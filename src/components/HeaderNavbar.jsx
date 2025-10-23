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
      // { name: "Media", path: "/media" },
      { name: "Stories & Media", path: "/stories" },
      { name: "Donate", path: "/donate", cta: true },
    ];

    useEffect(() => {
      const idx = links.findIndex((l) => l.path === location.pathname);
      setActive(idx !== -1 ? idx : 0);
    }, [location.pathname]);

    return (
      <header className=" top-0 bg-white shadow-md z-50">

        {/* ======================== HEADER SECTION ======================== */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 text-[#0757a0]">

          {/* -------- MOBILE HEADER -------- */}
          <div className="flex flex-col md:hidden gap-2">

            {/* First line: Contact left + icons */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-4 text-sm font-medium">
                <p>
                  <span>📞 Call: </span>
                  <a href="tel:+917678414989" className="underline hover:text-[#9ac531]">
                    +91 7678414989
                  </a>
                </p>
                <p>
                  <span>✉️ Email: </span>
                  <a href="mailto:info@starfoundation.org" className="underline hover:text-[#9ac531]">
                    info@starfoundation.org
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
  <SocialIcon url="https://www.instagram.com/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 26, width: 26 }} />
  <SocialIcon url="https://www.facebook.com/profile.php?id=61582811300667" bgColor="transparent" fgColor="#0757a0" style={{ height: 26, width: 26 }} />
  <SocialIcon url="https://www.youtube.com/@STARSFOUNDATION-2018" bgColor="transparent" fgColor="#0757a0" style={{ height: 26, width: 26 }} />
  <SocialIcon network="linkedin" url="https://www.linkedin.com/company/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 26, width: 26 }} />
  <SocialIcon network="x" url="https://twitter.com/starsfoundation" bgColor="transparent" fgColor="#0757a0" style={{ height: 26, width: 26 }} />

              </div>
            </div>

            {/* Second line: Logo + Name + Hamburger */}
            <div className="flex items-center justify-between w-full mt-1">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="StarFoundation Logo" className="w-14 h-14 object-contain" draggable={false} />
                <h1 className="text-lg font-bold tracking-wide whitespace-nowrap text-[#0757a0]">
                  STARS FOUNDATION
                </h1>
              </div>
              <button
                className="p-2 text-[#0757a0] hover:text-[#9ac531]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* -------- DESKTOP HEADER -------- */}
          <div className="hidden md:flex items-center justify-between w-full text-[#0757a0]">
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="StarFoundation Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" draggable={false} />
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wide whitespace-nowrap text-[#0757a0]">
                STARS FOUNDATION
              </h1>
            </div>

            <div className="flex items-center gap-8 text-base sm:text-lg font-medium text-[#0757a0]">
              <p>
                <span>📞 Call: </span>
                <a href="tel:+917678414989" className="underline hover:text-[#9ac531]">
                  +91 7678414989
                </a>
              </p>
              <p>
                <span>✉️ Email: </span>
                <a href="mailto:info@starfoundation.org" className="underline hover:text-[#9ac531]">
                  info@starfoundation.org
                </a>
              </p>
  <div className="flex items-center gap-2">
    <SocialIcon url="https://www.instagram.com/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
    <SocialIcon url="https://www.facebook.com/profile.php?id=61582811300667" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
    <SocialIcon url="https://www.youtube.com/@STARSFOUNDATION-2018" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
    <SocialIcon network="linkedin" url="https://www.linkedin.com/company/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
    <SocialIcon network="x" url="https://twitter.com/starsfoundation" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />

    </div>
            </div>
          </div>
        </div>

        {/* ======================== NAVBAR ======================== */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3 relative">

          {/* Desktop Navbar - Centered */}
          <div className="hidden md:flex justify-center w-full gap-10 items-center">
            {links.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.path}
                onMouseEnter={() => setActive(idx)}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-semibold transition-colors duration-300 ${
                    link.cta
                      ? "bg-[#9ac531] text-[#0757a0] rounded-md shadow-lg hover:bg-[#86b22b]"
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
                    className="absolute left-0 right-0 bottom-0 h-1 rounded-full bg-[#9ac531]"
                    transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg flex flex-col py-4"
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
