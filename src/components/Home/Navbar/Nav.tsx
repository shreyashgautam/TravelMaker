"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Places", href: "#places" },
  { label: "Hotel", href: "#hotel" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Optional: update active link based on scroll position
      const scrollPos = window.scrollY + 100; // offset for navbar height
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(link.label);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-red-500" : "text-white";
  const activeTextColor = "text-red-500";
  const hoverTextColor = scrolled ? "hover:text-red-200" : "hover:text-red-300";

  // Smooth scroll handler (for mobile to close menu + scroll)
  const handleLinkClick = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 border-b border-white/20 backdrop-blur-md transition-colors duration-300 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-red-300" : "text-red-500"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Home", "#home");
          }}
        >
          TRIPMAKER
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {links.map(({ label, href }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(label, href);
                }}
                className={`relative font-medium transition-all duration-300 ${
                  active === label
                    ? activeTextColor
                    : `${textColor} ${hoverTextColor}`
                }`}
              >
                {label}
                {active === label && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 w-full h-[2px] rounded bg-red-500`}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Book Now Button (Desktop) */}
        <Link
          href="/"
         
          className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-xl font-medium shadow hover:bg-red-700 transition-colors duration-300"
        >
          Book Now
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/20 shadow px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(label, href);
                  }}
                  className={`font-medium transition-colors duration-300 ${
                    active === label
                      ? activeTextColor
                      : `${textColor} ${hoverTextColor}`
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/"
                className="mt-2 inline-block bg-red-600 text-white text-center px-4 py-2 rounded-lg font-medium shadow hover:bg-red-700 transition"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
