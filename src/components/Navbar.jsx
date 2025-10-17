import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/starfoundation",
    svg: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/starfoundation",
    svg: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12a10 10 0 10-11.656 9.82v-6.93h-3.34v-2.89h3.34v-2.2c0-3.3 1.982-5.116 5.02-5.116 1.454 0 2.975.26 2.975.26v3.273h-1.676c-1.652 0-2.17 1.036-2.17 2.1v2.683h3.687l-.59 2.892h-3.097v6.93A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/starfoundation",
    svg: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.46 6c-.77.35-1.59.58-2.46.69a4.29 4.29 0 001.88-2.37 8.494 8.494 0 01-2.71 1.03 4.27 4.27 0 00-7.27 3.89A12.11 12.11 0 013 4.8a4.27 4.27 0 001.32 5.7 4.23 4.23 0 01-1.93-.54v.05a4.27 4.27 0 003.43 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54 12.09 12.09 0 008.29 21c7.547 0 11.675-6.256 11.675-11.675 0-.18-.004-.355-.012-.53A8.348 8.348 0 0022.46 6z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Our Work", path: "/our-work" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Stories", path: "/stories" },
    { name: "Donate", path: "/donate", cta: true },
  ];

  useEffect(() => {
    const idx = links.findIndex((l) => l.path === location.pathname);
    if (idx !== -1) setActive(idx);
    else {
      // fallback for deeper nested routes like /our-work/xyz
      const startsIdx = links.findIndex(
        (l) => l.path !== "/" && location.pathname.startsWith(l.path)
      );
      setActive(startsIdx !== -1 ? startsIdx : 0);
    }
  }, [location.pathname]);

  // Close mobile menu when viewport resized above md breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 bg-white shadow-md border-b border-gray-200 select-none z-50">
      {/* Top contact & socials */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-8 py-2 text-[#0757a0] text-sm font-semibold select-text">
        <div>
          Call us:{" "}
          <a
            href="tel:+917678414989"
            className="underline hover:text-[#9ac531] transition-colors"
          >
            +91 7678414989
          </a>
        </div>
        <div className="flex gap-6" aria-label="Social media links">
          {socialLinks.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-[#9ac531] transition-colors"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 font-black text-[#0757a0] text-2xl tracking-wide select-none"
          aria-label="Navigate to Home"
        >
          <img
            src="/images/logo.png"
            alt="Stars Foundation Logo"
            className="w-16 h-16 rounded-lg p-1 shadow"
            draggable={false}
          />
          StarFoundation
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center" role="menubar">
          {links.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              className={({ isActive }) =>
                `relative px-4 py-2 font-semibold transition-colors duration-300 focus:outline-none ${
                  link.cta
                    ? "bg-[#9ac531] text-[#0757a0] rounded-md shadow-lg hover:bg-[#86b22b]"
                    : isActive
                    ? "text-[#9ac531]"
                    : "text-[#0757a0] hover:text-[#9ac531]"
                }`
              }
              role="menuitem"
              aria-current={active === idx ? "page" : undefined}
              tabIndex={0}
            >
              {link.name}
              {active === idx && !link.cta && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute left-0 right-0 bottom-0 h-1 rounded-full bg-[#9ac531]"
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  aria-hidden="true"
                />
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-[#0757a0] hover:text-[#9ac531] focus:outline-none focus:ring-2 focus:ring-[#9ac531]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 flex flex-col py-4"
            role="menu"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 font-semibold ${
                    link.cta
                      ? "bg-[#9ac531] text-[#0757a0] rounded-md mx-2"
                      : isActive
                      ? "text-[#9ac531]"
                      : "text-[#0757a0] hover:bg-[#9ac531]/20"
                  }`
                }
                role="menuitem"
                tabIndex={0}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex justify-center gap-6 mt-3 px-6" aria-label="Social media links">
              {socialLinks.map(({ name, href, svg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hover:text-[#9ac531] transition-colors"
                >
                  {svg}
                </a>
              ))}
            </div>
            <div className="text-center text-[#0757a0] mt-4 text-sm select-text">
              Call us:{" "}
              <a href="tel:+917678414989" className="underline hover:text-[#9ac531]">
                +91 7678414989
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
