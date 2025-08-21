"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div >
          <h2 className="text-xl font-bold mb-3">FurniHaven</h2>
          <p className="text-sm leading-relaxed text-[#6e0d25]">
            Discover stylish and modern furniture for every room.  
            Quality designs that make your home more beautiful and functional.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#6e0d25] transition">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#6e0d25] transition">Products</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#6e0d25] transition">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📍 Sylhet, Bangladesh</p>
          <p className="text-sm">📧 info@furnihaven.com</p>
          <p className="text-sm">📞 +880 1746-423366</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 py-4 text-center text-sm">
        © {new Date().getFullYear()} FurniHaven. All rights reserved.
      </div>
    </footer>
  );
}
