"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Azure Haven Hotel
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Experience refined luxury and exceptional hospitality in the heart
            of the city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-blue-600 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-600 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📍 123 City Center, Downtown</li>
            <li>📞 +1 (234) 567-890</li>
            <li>📧 info@azurehaven.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {year} Azure Haven Hotel. All rights reserved.
      </div>
    </footer>
  );
}
