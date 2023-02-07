import Link from 'next/link';
import React from 'react';

const Navigation = () => (
  <nav>
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">Home</Link>
      </li>
      <li className="mr-6">
        <Link href="/services">Services</Link>
      </li>
      <li className="mr-6">
        <Link href="/about">About Us</Link>
      </li>
      <li className="mr-6">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
