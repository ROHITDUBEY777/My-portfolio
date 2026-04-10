import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rohit Dubey. All rights reserved.</p>
        <p className="mt-2 text-white/30">Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}

export default Footer;
