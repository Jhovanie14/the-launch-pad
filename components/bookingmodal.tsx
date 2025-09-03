"use client";

import { useMemo, useState } from "react";
import { useBooking } from "../context/bookingcontext";
import { Button } from "./ui/button";
import { Car, carsData } from "../lib/supabase/model";
import { X } from "lucide-react";

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedTrim, setSelectedTrim] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  //get unique year model
  const availableYears = useMemo(() => {
    return [...new Set(carsData.map((car) => car.year))].sort((a, b) => b - a);
  }, []);

  const availableMakes = useMemo(() => {
    if (!selectedYear) return [];
    return [
      ...new Set(
        carsData
          .filter((car) => car.year === selectedYear)
          .map((car) => car.make)
      ),
    ].sort();
  }, [selectedYear]);

  const availableModels = useMemo(() => {
    if (!selectedYear || !selectedMake) return [];
    return [
      ...new Set(
        carsData
          .filter(
            (car) => car.year === selectedYear && car.make === selectedMake
          )
          .map((car) => car.model)
      ),
    ].sort();
  }, [selectedYear, selectedMake]);

  const availableTrims = useMemo(() => {
    if (!selectedYear || !selectedMake || !selectedModel) return [];
    return [
      ...new Set(
        carsData
          .filter(
            (car) =>
              car.year === selectedYear &&
              car.make === selectedMake &&
              car.model === selectedModel
          )
          .map((car) => car.trim)
      ),
    ].sort();
  }, [selectedYear, selectedMake, selectedModel]);

  const availableColors = useMemo(() => {
    if (!selectedYear || !selectedMake || !selectedModel || !selectedTrim)
      return [];
    const car = carsData.find(
      (car) =>
        car.year === selectedYear &&
        car.make === selectedMake &&
        car.model === selectedModel &&
        car.trim === selectedTrim
    );
    return car?.colors || [];
  }, [selectedYear, selectedMake, selectedModel, selectedTrim]);

  const handleYear = (year: number) => {
    setSelectedYear(year);
    setSelectedMake(null);
    setSelectedModel(null);
    setSelectedTrim(null);
    setSelectedColor(null);
  };
  const handleMake = (make: string) => {
    setSelectedMake(make);
    setSelectedModel(null);
    setSelectedTrim(null);
    setSelectedColor(null);
  };
  const handleModel = (model: string) => {
    setSelectedModel(model);
    setSelectedTrim(null);
    setSelectedColor(null);
  };
  const handleTrim = (trim: string) => {
    setSelectedTrim(trim);
    setSelectedColor(null);
  };

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl mx-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-2xl font-bold ">Get Vehicle-Specific Pricing</h2>

          <Button variant="outline" size="lg" onClick={closeBookingModal}>
            <X className="text-red-600" />
          </Button>
        </div>
        <p className="text-sm text-start text-muted-foreground text-wrap mb-6">
          Enter your car info to see exact prices for your vehicle type
        </p>
        <div className="space-y-4">
          {/* Year Selection */}
          <div className="block text-sm font-medium mb-2">
            <select
              name=""
              id=""
              value={selectedYear || ""}
              onChange={(e) => handleYear(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Select Year</option>
              {availableYears.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Make */}
          <div className="block text-sm font-medium mb-2">
            <select
              name=""
              id=""
              value={selectedMake || ""}
              onChange={(e) => handleMake(String(e.target.value))}
              disabled={!selectedYear}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Select Make</option>
              {availableMakes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          {/* Model */}
          <div className="block text-sm font-medium mb-2">
            <select
              name=""
              id=""
              value={selectedModel || ""}
              onChange={(e) => handleModel(String(e.target.value))}
              disabled={!selectedYear || !selectedMake}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Select Model</option>
              {availableModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          {/* Trim */}
          <div className="block text-sm font-medium mb-2">
            <select
              name=""
              id=""
              value={selectedTrim || ""}
              onChange={(e) => handleTrim(String(e.target.value))}
              disabled={!selectedYear || !selectedMake || !selectedModel}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Select Trim</option>
              {availableTrims.map((trim, index) => (
                <option key={index} value={trim}>
                  {trim}
                </option>
              ))}
            </select>
          </div>
          {/* Color */}
          <div className="block text-sm font-medium mb-2">
            <select
              name=""
              id=""
              value={selectedColor || ""}
              onChange={(e) => setSelectedColor(e.target.value)}
              disabled={
                !selectedYear ||
                !selectedMake ||
                !selectedModel ||
                !selectedTrim
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Available Colors</option>
              {availableColors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          {/* Action Button */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            <Button
              variant="outline"
              className="bg-blue-900 text-white hover:bg-blue-800 hover:text-white"
            >
              See My Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
