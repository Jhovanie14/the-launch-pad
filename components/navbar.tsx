"use client";

import {
  ChevronDown,
  CircleQuestionMark,
  Menu,
  NotebookPen,
  Phone,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Card, CardContent } from "./ui/card";
import { useBooking } from "../context/bookingcontext";

const services: {
  title: string;
  href: string;
  description: string;
  icon?: React.ComponentType<any>;
}[] = [
  {
    icon: User,
    title: "What is The Launch Pad",
    href: "/launchpad",
    description:
      "Our signature premium wash with ceramic coating protection and interior detailing.",
  },
  {
    icon: NotebookPen,
    title: "Blog",
    href: "/blog",
    description:
      "Quick and efficient exterior wash perfect for busy schedules.",
  },
  {
    icon: Phone,
    title: "Contact",
    href: "/contact",
    description: "We provide exceptional customer service.",
  },
  {
    icon: Users,
    title: "About Us",
    href: "/about",
    description: "Learn more about the team of the launch pad.",
  },
  {
    icon: CircleQuestionMark,
    title: "FAQ",
    href: "/services/paint-correction",
    description:
      "Professional paint restoration to remove swirls, scratches, and oxidation.",
  },
  //   {
  //     title: "Interior Detailing",
  //     href: "/services/interior-detail",
  //     description:
  //       "Deep cleaning and protection for leather, fabric, and all interior surfaces.",
  //   },
];

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon?: React.ComponentType<any>;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-row items-center space-x-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          {icon &&
            React.createElement(icon, { className: "w-4 h-4 flex-shrink-0" })}
          <div className="flex-1 space-y-2">
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Full-width background bar */}
      {/* <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
        <div className="w-full px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-blue-800">
              <span className="font-medium">🚀 Premium Car Care Services</span>
              <span className="hidden md:inline">📍 Houston, TX</span>
              <span className="hidden lg:inline">⏰ Open 7 Days a Week</span>
            </div>
            <div className="flex items-center space-x-4 text-blue-700">
              <span className="hidden sm:inline">📞 (555) 123-4567</span>
              <span className="hidden md:inline">✉️ info@thelaunchpad.com</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Main navigation */}
      <div className="w-full px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image
                  src="/thelaunchpad.png"
                  alt="The Launch Pad"
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
              </Link>
              <div className="hidden md:flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  THE LAUNCH PAD
                </span>
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wider">
                  Premium Car Care
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="relative inline-block text-base font-semibold text-foreground hover:text-blue-800 transition-colors duration-200 group uppercase tracking-wide"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-semibold text-foreground hover:text-blue-800 transition-colors duration-200 uppercase tracking-wide bg-transparent">
                      About Launch Pad
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <ul className="grid w-[500px] gap-2 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                        {services.map((service) => (
                          <ListItem
                            icon={service.icon}
                            key={service.title}
                            title={service.title}
                            href={service.href}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/products"
                className="relative inline-block text-base font-semibold text-foreground hover:text-blue-800 transition-colors duration-200 group uppercase tracking-wide"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/pricing"
                className="relative inline-block text-base font-semibold text-foreground hover:text-blue-800 transition-colors duration-200 group uppercase tracking-wide"
              >
                Subscription
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 rounded-md transition-all duration-200 shadow-md hover:shadow-lg uppercase tracking-wide"
                onClick={openBookingModal}
              >
                Book Online
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:text-blue-800 font-semibold transition-all duration-200 uppercase tracking-wide"
              >
                <User className="w-4 h-4" />
                <span className="hidden md:inline">Login</span>
              </Button>
              {/* Mobile Menu Button */}

              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                size="sm"
                variant="outline"
                className="flex items-center md:hidden hover:text-blue-800 font-semibold transition-all duration-200 uppercase tracking-wide"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>

              {/* Full screen mobile menu overlay */}
              {isMobileMenuOpen && (
                <div
                  className={`fixed inset-0 top-16 w-full z-50 bg-white md:hidden transition-transform duration-5000 ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {/* <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-xl font-semibold">Menu</h1>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div> */}
                  {/* Menu Items */}
                  <div className="flex flex-col p-4 space-y-4">
                    <Link
                      href="/"
                      className="flex items-center space-x-2 py-2 border-b"
                    >
                      <User className="w-4 h-4" />
                      <span className="">Login</span>
                    </Link>

                    <Link href="/" className="flex items-center space-x-2 py-2">
                      <User />
                      <span>Home</span>
                    </Link>
                    <Link
                      href="/products"
                      className="flex items-center space-x-2 py-2"
                    >
                      <User />
                      <span>Products</span>
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center space-x-2 py-2"
                    >
                      <User />
                      <span>Subscription</span>
                    </Link>
                    <div className="border-b">
                      <div
                        className="flex items-center justify-between space-x-2 py-2 cursor-pointer"
                        onClick={() =>
                          setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        }
                      >
                        <span>About Launch Pad</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isAboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {/* Dropdown Menu */}
                      {isAboutDropdownOpen && (
                        <div className="ml-4 mt-2">
                          <Link
                            href="/blog"
                            className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                          >
                            Blog
                          </Link>
                          <Link
                            href="/contact"
                            className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                          >
                            Contact
                          </Link>
                          <Link
                            href="/about"
                            className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                          >
                            About Us
                          </Link>
                          <Link
                            href="/faq"
                            className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                          >
                            FAQ
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu button (hidden on desktop) */}
      {/* <div className="lg:hidden w-full px-4 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-sm font-semibold text-foreground hover:text-blue-800 transition-colors uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-foreground hover:text-blue-800 transition-colors uppercase tracking-wide"
              >
                Services
              </Link>
              <Link
                href="/packages"
                className="text-sm font-semibold text-foreground hover:text-blue-800 transition-colors uppercase tracking-wide"
              >
                Packages
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-md font-semibold uppercase tracking-wide"
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </nav>
  );
}
