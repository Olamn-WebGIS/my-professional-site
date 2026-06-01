import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
    // 'justify-between' forces the logo and nav to opposite ends
    // 'px-6' or 'px-12' adds space on the sides for mobile
    <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-white shadow-sm">
      <div className="text-blue-600 font-bold text-xl">My Professional Site</div>
      
      {/* Navigation Links */}
      <div className="flex gap-4 md:gap-8">
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path}
            className={({ isActive }) => 
              `hover:text-blue-600 transition ${isActive ? "text-blue-600 font-bold" : "text-gray-600"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}