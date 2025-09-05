import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    console.log('Creating checkout session...');
    
    const { planId, billingCycle } = await request.json();
    console.log('Request data:', { planId, billingCycle });
    
    if (!planId || !billingCycle) {
      console.error('Missing required fields:', { planId, billingCycle });
      return NextResponse.json({ error: 'Missing planId or billingCycle' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not set');
      return NextResponse.json({ error: 'Stripe configuration missing' }, { status: 500 });
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.error('NEXT_PUBLIC_SITE_URL is not set');
      return NextResponse.json({ error: 'Site URL configuration missing' }, { status: 500 });
    }

    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError) {
      console.error('Auth error:', authError);
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }

    if (!user) {
      console.error('No user found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('User authenticated:', user.id);

    // Get plan details from Supabase
    console.log('Fetching plan with ID:', planId);
    const { data: plan, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError) {
      console.error('Plan fetch error:', planError);
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    if (!plan) {
      console.error('No plan found for ID:', planId);
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    console.log('Plan found:', plan.name);

    // Get or create Stripe customer
    let customerId = user.user_metadata?.stripe_customer_id;
    
    if (!customerId) {
      console.log('Creating new Stripe customer...');
      const customer = await stripe.customers.create({
        email: user.email!,
        metadata: { user_id: user.id }
      });
      customerId = customer.id;
      
      // Update user metadata with Stripe customer ID
      await supabase.auth.updateUser({
        data: { stripe_customer_id: customerId }
      });
    }

    // Create checkout session
    const unitAmount = billingCycle === 'yearly' ? plan.yearly_price * 100 : plan.monthly_price * 100;
    
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan.name,
            description: plan.description,
          },
          unit_amount: unitAmount,
          recurring: {
            interval: billingCycle === 'yearly' ? 'year' : 'month',
          },
        },
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?canceled=true`,
      metadata: {
        user_id: user.id,
        plan_id: planId,
        billing_cycle: billingCycle,
      },
    });

    console.log('Checkout session created:', session.id);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
