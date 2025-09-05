"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  CircleAlert,
  Circle,
  CircleCheck,
  Grid3x3,
  List,
  User,
  Crown,
  Settings,
} from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import Link from "next/link";

interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  provider?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description?: string;
  monthly_price: number;
  yearly_price: number;
  features: string[];
}

export default function Pricing() {
  const [pricing, setPricing] = useState<"monthly" | "yearly">("monthly");
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [currentSubscription, setCurrentSubscription] = useState<any>(null);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // Fetch user profile (includes provider info)
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        setUserProfile(profile);

        // Fetch current subscription
        const { data: subscription } = await supabase
          .from('user_subscriptions')
          .select(`
            *,
            subscription_plans (
              name,
              description
            )
          `)
          .eq('user_id', user.id)
          .eq('status', 'active')
          .single();

        if (subscription) {
          setCurrentSubscription(subscription);
        }
      }

      setLoading(false);
    };
    getUser();
  }, [supabase.auth]);

  // Fetch pricing plans from Supabase
  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const { data, error } = await supabase
          .from("subscription_plans")
          .select("*")
          .eq("is_active", true)
          .order("monthly_price", { ascending: true });

        if (error) {
          console.error("Error fetching pricing plans:", error);
        } else {
          setPricingPlans(data || []);
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPricingPlans();
  }, [supabase]);

  // Your existing functions...
  function getPricing(plan: any) {
    if (pricing === "yearly") {
      return plan.yearly_price.toFixed(2);
    }
    return plan.monthly_price.toFixed(2);
  }

  function getPriceLabel() {
    return pricing === "yearly" ? "/year" : "/month";
  }

  // Enhanced button logic
  const getButtonText = (plan: any, index: number) => {
    if (!user) return "Select";

    if (!currentSubscription) return "Select";

    if (currentSubscription.subscription_plans?.name === plan.name) {
      return "Current Plan";
    }

    return "Upgrade";
  };

  const getButtonVariant = (plan: any) => {
    if (!user) return "default";

    if (currentSubscription?.subscription_plans?.name === plan.name) {
      return "secondary";
    }

    return "default";
  };

  // Handle checkout
  const handleCheckout = async (planId: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          planId, 
          billingCycle: pricing 
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  // Handle customer portal
  const handleManageSubscription = async () => {
    try {
      const response = await fetch('/api/create-customer-portal', {
        method: 'POST',
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating customer portal session:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-20">
        <div className="container mx-auto px-4 ">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8 text-center">
              {user ? (
                <>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Crown className="w-8 h-8 text-blue-900" />
                    <h1 className="text-4xl md:text-6xl font-semibold text-blue-900">
                      Manage Your Subscription
                    </h1>
                  </div>
                  <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Welcome back, {userProfile?.full_name || user.email}!
                    {userProfile?.provider === "google" && (
                      <span className="block text-sm text-blue-600 mt-1">
                        Signed in with Google
                      </span>
                    )}
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <Link href="/dashboard">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      className="bg-blue-900 flex items-center gap-2"
                      onClick={handleManageSubscription}
                    >
                      <Settings className="w-4 h-4" />
                      Manage Subscription
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-4xl md:text-6xl font-semibold text-blue-900">
                    Choose Your Plan
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Join our membership program for regular maintenance and
                    exclusive perks. Keep your vehicle in stellar condition
                    year-round.
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-row items-center justify-center space-y-4 md:space-y-0 mb-8">
              <div className="flex items-center space-x-2 bg-gray-white rounded-lg border border-gray-100 shadow p-2">
                <Button
                  variant={pricing === "monthly" ? "default" : "ghost"}
                  className={pricing === "monthly" ? "bg-blue-900" : ""}
                  size="lg"
                  onClick={() => setPricing("monthly")}
                >
                  Monthly
                </Button>
                <Button
                  variant={pricing === "yearly" ? "default" : "ghost"}
                  className={pricing === "yearly" ? "bg-blue-900" : ""}
                  size="lg"
                  onClick={() => setPricing("yearly")}
                >
                  Yearly (Save 10%)
                </Button>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* starter */}
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-300 bg-white"
                >
                  <div className="grid gap-4 p-6">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-4xl font-semibold">
                        {getPricing(plan)}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {getPriceLabel()}
                      </p>
                    </div>
                    <div className="grid gap-3 text-sm">
                      {plan.features &&
                        Array.isArray(plan.features) &&
                        plan.features.map((feature: string, index: number) => (
                          <span key={index} className="flex items-center gap-2">
                            <CircleCheck />
                            {feature}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className=" flex-1"></div>
                  <div className="p-4 border-t grid gap-2">
                    {user ? (
                      <Button 
                        size="sm" 
                        className="bg-blue-900"
                        onClick={() => handleCheckout(plan.id)}
                        disabled={currentSubscription?.subscription_plans?.name === plan.name}
                      >
                        {getButtonText(plan, index)}
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        className="bg-blue-900"
                        onClick={() => handleCheckout(plan.id)}
                      >
                        Select
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Subscription Status for Authenticated Users */}
            {user && (
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="flex flex-col rounded-lg border border-blue-200 bg-blue-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Crown className="w-6 h-6 text-blue-900" />
                    <h3 className="text-xl font-semibold text-blue-900">
                      Your Current Subscription
                    </h3>
                  </div>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800">Plan:</span>
                      <span className="font-semibold text-blue-900">
                        Orbital (Free Trial)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800">Status:</span>
                      <span className="font-semibold text-green-600">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800">Next Billing:</span>
                      <span className="font-semibold text-blue-900">
                        January 15, 2024
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800">Payment Method:</span>
                      <span className="font-semibold text-blue-900">
                        •••• •••• •••• 1234
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-900 hover:bg-blue-100"
                    >
                      Update Payment
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-900 hover:bg-blue-100"
                    >
                      Billing History
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Subscription Information Card */}
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-6">
                <div className="grid gap-3 text-sm">
                  <span className="flex items-center gap-2">
                    <CircleAlert className="text-blue-900" />
                    All subscription plans can be canceled at any time with no
                    cancellation fees.
                  </span>
                  <span className="flex items-center gap-2">
                    <CircleAlert className="text-blue-900" />
                    Annual subscriptions are billed upfront and include a 10%
                    discount compared to monthly billing.
                  </span>
                  <span className="flex items-center gap-2">
                    <CircleAlert className="text-blue-900" />
                    For more information, check our detailed terms and
                    conditions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
