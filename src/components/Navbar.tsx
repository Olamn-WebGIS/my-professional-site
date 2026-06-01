import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 bg-white shadow-sm">
      <div className="text-blue-600 font-bold text-xl">My Professional Site</div>

      {/* Hamburger Button - Visible only on mobile */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Nav Links - Responsive logic */}
      <div className={`md:flex gap-8 ${isOpen ? 'absolute top-20 left-0 w-full bg-white p-6 flex-col shadow-lg z-50' : 'hidden md:flex'}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)} // Close menu when link is clicked
            className={({ isActive }) => 
              `block ${isActive ? "text-blue-600 font-bold" : "text-gray-600"} hover:text-blue-600 transition`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}