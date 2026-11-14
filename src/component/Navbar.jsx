
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "BM Solutions", path: "/bm-solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "8801831591975";

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-fuchsia-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-[#030817]/95 shadow-[0_4px_25px_rgba(0,80,255,0.08)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="FBMVerified Logo"
            className="h-16 w-16 rounded-lg object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-wide text-white sm:text-lg">
              FBM<span className="text-fuchsia-400">Verified</span>
            </h1>
            <p className="mt-1 text-[9px] font-medium tracking-wide text-slate-400 sm:text-[10px]">
              Facebook Business Manager Provider
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <span className="relative py-2">
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(16,185,129,0.2)] transition duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] sm:inline-flex"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 text-white transition hover:bg-blue-500/20 lg:hidden"
        >
          {isOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenuAlt3 className="text-2xl" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-blue-500/20 bg-[#030817] px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;