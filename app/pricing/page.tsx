"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { CircleAlert, Circle, CircleCheck, Grid3x3, List } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Orbital",
    description: "Perfect for individuals getting started",
    monthlyPrice: 49.99,
    features: [
      "Monthly exterior wash",
      "Tire dressing",
      "Vacuum and interior wipe-down",
      "Priority scheduling",
      "Basic window cleaning",
    ],
  },
  {
    name: "Interstellar",
    description: "For teams shipping quality projects",
    monthlyPrice: 89.99,
    features: [
      "Bi-weekly exterior wash",
      "Monthly interior detailing",
      "Tire dressing and wheel cleaning",
      "Premium window cleaning",
      "Dash and console conditioning",
      "Priority scheduling with VIP hours",
    ],
  },
  {
    name: "Galactic",
    description: "For teams shipping quality projects",
    monthlyPrice: 149.99,
    features: [
      "Weekly exterior wash",
      "Bi-weekly interior detailing",
      "Quarterly paint correction",
      "Monthly wax application",
      "Complete leather treatment",
      "Unlimited priority scheduling",
      "Annual ceramic coating refresh",
    ],
  },
];

export default function Pricing() {
  const [pricing, setPricing] = useState<"monthly" | "yearly">("monthly");

  function getPricing(monthlyPrice: number) {
    if (pricing === "yearly") {
      return (monthlyPrice * 12 * 0.9).toFixed(2);
    }
    return monthlyPrice.toFixed(2);
  }
  function getPriceLabel() {
    return pricing === "yearly" ? "/year" : "/month";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-20">
        <div className="container mx-auto px-4 ">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8 text-center">
              <h1 className="text-4xl md:text-6xl font-semibold text-blue-900">
                Latest Article
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Join our membership program for regular maintenance and
                exclusive perks. Keep your vehicle in stellar condition
                year-round.
              </p>
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
                        {getPricing(plan.monthlyPrice)}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {getPriceLabel()}
                      </p>
                    </div>
                    <div className="grid gap-3 text-sm">
                      {plan.features.map((feature, index) => (
                        <span key={index} className="flex items-center gap-2">
                          <CircleCheck />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className=" flex-1"></div>
                  <div className="p-4 border-t grid gap-2">
                    <Button size="sm" className="bg-blue-900">
                      Select
                    </Button>
                  </div>
                </div>
              ))}
            </div>

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
