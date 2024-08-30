// components/Navbar.js
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-b2 shadow-md py-4 px-8 font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            Fund raise
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/create" className="bg-b1 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Create Campaign
          </Link>
          <Link href="/connect" className="bg-b1 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Connect Wallet
          </Link>
        </div>
      </div>
    </header>
  );
}
