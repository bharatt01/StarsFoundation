import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function HeaderNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Stories & Media", path: "/stories" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donate", path: "/donate", cta: true },
  ];

  useEffect(() => {
    const idx = links.findIndex((l) => l.path === location.pathname);
    setActive(idx !== -1 ? idx : 0);
  }, [location.pathname]);

  return (
    <header className="top-0 bg-white shadow-md z-50">
      {/* ================= TOP HEADER (DESKTOP + MOBILE) ================= */}
      <div className="bg-[#054b87] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* ===== Mobile Top: Call + Email + Icons ===== */}
          <div className="flex w-full items-center justify-between md:hidden">
            <div className="flex gap-2">
              <a
                href="tel:+917678414989"
                className="bg-[#9ac531] text-[#054b87] text-sm px-3 py-1 rounded-md shadow hover:bg-[#86b22b] transition"
              >
                📞 Call
              </a>
              <a
                href="mailto:info@starfoundation.org"
                className="bg-[#9ac531] text-[#054b87] text-sm px-3 py-1 rounded-md shadow hover:bg-[#86b22b] transition"
              >
                ✉️ Email
              </a>
            </div>
            <div className="flex items-center gap-2">
              <SocialIcon url="https://www.instagram.com/starsfoundation2018/" bgColor="transparent" fgColor="#ffffff" style={{ height: 26, width: 26 }} />
              <SocialIcon url="https://www.facebook.com/profile.php?id=61582811300667" bgColor="transparent" fgColor="#ffffff" style={{ height: 26, width: 26 }} />
              <SocialIcon url="https://www.youtube.com/@STARSFOUNDATION-2018" bgColor="transparent" fgColor="#ffffff" style={{ height: 26, width: 26 }} />
              <SocialIcon network="linkedin" url="https://www.linkedin.com/company/starsfoundation2018/" bgColor="transparent" fgColor="#ffffff" style={{ height: 26, width: 26 }} />
              <SocialIcon network="x" url="https://twitter.com/starsfoundation" bgColor="transparent" fgColor="#ffffff" style={{ height: 26, width: 26 }} />
            </div>
          </div>

          {/* ===== Desktop Top: Logo + Name + Contact + Icons ===== */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Stars Foundation Logo" className="w-20 h-20 object-contain" />
              <h1 className="text-3xl font-bold tracking-wide text-white">STARS FOUNDATION</h1>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium">
              <p>
                📞{" "}
                <a href="tel:+917678414989" className="underline hover:text-[#9ac531]">
                  +91 7678414989
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@starfoundation.org" className="underline hover:text-[#9ac531]">
                  info@starfoundation.org
                </a>
              </p>
              <div className="flex items-center gap-3">
                <SocialIcon url="https://www.instagram.com/starsfoundation2018/" bgColor="transparent" fgColor="#ffffff" style={{ height: 30, width: 30 }} />
                <SocialIcon url="https://www.facebook.com/profile.php?id=61582811300667" bgColor="transparent" fgColor="#ffffff" style={{ height: 30, width: 30 }} />
                <SocialIcon url="https://www.youtube.com/@STARSFOUNDATION-2018" bgColor="transparent" fgColor="#ffffff" style={{ height: 30, width: 30 }} />
                <SocialIcon network="linkedin" url="https://www.linkedin.com/company/starsfoundation2018/" bgColor="transparent" fgColor="#ffffff" style={{ height: 30, width: 30 }} />
                <SocialIcon network="x" url="https://twitter.com/starsfoundation" bgColor="transparent" fgColor="#ffffff" style={{ height: 30, width: 30 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LOGO + MENU (MOBILE ONLY) ================= */}
      <div className="md:hidden bg-white px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Stars Foundation Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-lg font-bold text-[#0757a0]">STARS FOUNDATION</h1>
        </div>
        <button
          className="p-2 text-[#0757a0] hover:text-[#9ac531]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3 relative bg-white">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 font-semibold transition-colors duration-300 ${
                  link.cta
                    ? "bg-[#9ac531] text-[#0757a0] rounded-md shadow hover:bg-[#86b22b]"
                    : isActive
                    ? "text-[#9ac531]"
                    : "text-[#0757a0] hover:text-[#9ac531]"
                }`
              }
            >
              {link.name}
              {active === idx && !link.cta && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute left-0 right-0 bottom-0 h-1 bg-[#9ac531] rounded-full"
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                />
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-4 mt-2 w-56 bg-white rounded-md shadow-lg flex flex-col py-4 border border-gray-100"
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
                      : "text-[#0757a0] hover:bg-[#9ac531]/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
