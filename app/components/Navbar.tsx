"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 relative z-10">
      {/* Logo */}
      <div className="text-white font-bold text-xl">RememberMine.ai</div>
      {/* Floating Nav Links */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-8 px-8 py-2 rounded-full bg-black/60 border border-gray-700 shadow-lg backdrop-blur-md">
          <button className="px-3 py-1 rounded-full text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500/40 bg-white/10 shadow-inner">Dashboard</button>
          <button className="px-3 py-1 rounded-full text-gray-300 text-base font-medium hover:text-white transition">Story</button>
          <button className="px-3 py-1 rounded-full text-gray-300 text-base font-medium hover:text-white transition">Function</button>
          <button className="px-3 py-1 rounded-full text-gray-300 text-base font-medium hover:text-white transition">Pricing</button>
        </div>
      </div>
      {/* Login Button */}
      <div>
        <button
          className="px-4 py-1 rounded bg-transparent text-gray-300 text-base font-medium hover:text-white transition"
          onClick={() => router.push("/sign-in")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 