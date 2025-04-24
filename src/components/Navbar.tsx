import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Health Metrics</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;