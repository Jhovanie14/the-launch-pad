import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { createClient as createSupabaseServerClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Use service-role client for webhook DB writes to bypass RLS
  const supabase = createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, supabase);
      break;
    
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object as Stripe.Subscription, supabase);
      break;
    
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object as Stripe.Subscription, supabase);
      break;

    case 'invoice.payment_succeeded':
      await handlePaymentSucceeded(event.data.object as Stripe.Invoice, supabase);
      break;

    case 'invoice.payment_failed':
      await handlePaymentFailed(event.data.object as Stripe.Invoice, supabase);
      break;
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session, supabase: any) {
  console.log('Checkout completed:', session.id);
  
  if (!session.metadata?.user_id || !session.metadata?.plan_id) {
    console.error('Missing metadata in checkout session');
    return;
  }

  // Get subscription details
  let subscription: Stripe.Subscription | null = null;
  try {
    subscription = await stripe.subscriptions.retrieve(session.subscription as string) as Stripe.Subscription;
  } catch (e) {
    console.error('Failed to retrieve subscription:', e);
    return;
  }
  
  const { error: insertError } = await supabase
    .from('user_subscriptions')
    .insert({
      user_id: session.metadata.user_id,
      plan_id: session.metadata.plan_id,
      stripe_customer_id: session.customer,
      stripe_subscription_id: subscription.id,
      status: subscription.status,
      billing_cycle: session.metadata.billing_cycle,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
    });
  if (insertError) {
    console.error('Insert user_subscriptions failed:', insertError);
  } else {
    console.log('Subscription created in database');
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: any) {
  console.log('Subscription updated:', subscription.id);
  
  const { error: updateError } = await supabase
    .from('user_subscriptions')
    .update({
      status: subscription.status,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
    })
    .eq('stripe_subscription_id', subscription.id);
  if (updateError) {
    console.error('Update user_subscriptions failed:', updateError);
  } else {
    console.log('Subscription updated in database');
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: any) {
  console.log('Subscription deleted:', subscription.id);
  
  const { error: cancelError } = await supabase
    .from('user_subscriptions')
    .update({ status: 'canceled' })
    .eq('stripe_subscription_id', subscription.id);
  if (cancelError) {
    console.error('Cancel user_subscriptions failed:', cancelError);
  } else {
    console.log('Subscription canceled in database');
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice, supabase: any) {
  console.log('Payment succeeded:', invoice.id);
  // You can add additional logic here for successful payments
}

async function handlePaymentFailed(invoice: Stripe.Invoice, supabase: any) {
  console.log('Payment failed:', invoice.id);
  // You can add additional logic here for failed payments
}
