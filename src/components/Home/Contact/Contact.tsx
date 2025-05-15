'use client';

import React from 'react';
import { Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <footer className="py-8 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="md:col-span-2">
              <Link href="/" className="text-xl font-semibold text-red-500 mb-2 block">
                TripMaker
              </Link>
              <p className="text-sm text-gray-600 max-w-md leading-relaxed mb-3">
                Explore the world one trip at a time. TripMaker brings you curated travel packages, unique stays, and lifetime memories.
              </p>
              <div className="flex space-x-3">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-red-700 transition-colors">
                  <Github className="h-4 w-4" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-red-700 transition-colors">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red-700 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-left md:text-right">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">Contact Us</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex md:justify-end items-center gap-2 hover:text-red-700 transition">
                  <MapPin className="h-4 w-4" />
                  123 Paradise Lane, Goa
                </li>
                <li className="flex md:justify-end items-center gap-2 hover:text-red-700 transition">
                  <span className="w-4 h-4" /> India, 403001
                </li>
                <li className="flex md:justify-end items-center gap-2 hover:text-red-700 transition">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </li>
                <li className="flex md:justify-end items-center gap-2 hover:text-red-700 transition">
                  <Mail className="h-4 w-4" />
                  support@tripmaker.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} TripMaker. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-left md:text-right mt-2 md:mt-0">
              Designed with love by Team Wander
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
