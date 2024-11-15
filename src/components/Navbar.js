import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">African Student Union</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-secondary">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-secondary">About</Link></li>
          <li><Link to="/our-team" className="text-white hover:text-secondary">Our Team</Link></li>
          <li><Link to="/contact" className="text-white hover:text-secondary">Contact</Link></li>
          <li><Link to="/blog" className="text-white hover:text-secondary">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
