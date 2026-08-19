import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import searchIcon from "../assets/icons/search.png";
import gamepadIcon from "../assets/icons/gamepad.png";
import { navVariant, btnHover, btnTap } from "../animations/animation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "NFTs", path: "/nfts" },
  { name: "DAO", path: "/dao" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      variants={navVariant}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-12 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center p-2 shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-400/30">
            <img
              src={gamepadIcon}
              alt="MetaRace Logo"
              className="w-full h-full object-contain filter brightness-200"
            />
          </div>
          <span className="font-unbounded font-black tracking-wider text-lg sm:text-xl text-white">
            META<span className="text-white">RACE</span>
          </span>
        </Link>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center bg-[#0d0922]/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer select-none ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#281a53]/90 border border-purple-500/40 rounded-full shadow-[0_0_12px_rgba(147,51,234,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Search + Play Now) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Search Button */}
          <motion.button
            whileHover={btnHover}
            whileTap={btnTap}
            aria-label="Search"
            className="w-10 h-10 rounded-full bg-[#0d0922]/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-950/40 transition-all cursor-pointer shadow-sm group"
          >
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 object-contain filter brightness-200 opacity-90 group-hover:scale-110 transition-transform"
            />
          </motion.button>

          {/* Play Now CTA Button */}
          <Link to="/play">
            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              className="relative px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#9333ea] text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center gap-2 glow-btn hover:brightness-110 transition-all shadow-[0_0_20px_rgba(139,92,246,0.45)] cursor-pointer"
            >
              <img
                src={gamepadIcon}
                alt="Gamepad"
                className="w-4 h-4 object-contain filter brightness-200"
              />
              <span>PLAY NOW</span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-[#0d0922]/90 border border-white/10 flex flex-col items-center justify-center gap-1.5 p-2 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-3 overflow-hidden bg-[#0d0922]/95 backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      setActiveTab(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#281a53] text-white border border-purple-500/40 font-semibold"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search games, NFTs..."
                      className="w-full bg-[#161233] text-white text-xs px-3 py-2 pl-9 rounded-full border border-white/10 focus:outline-none focus:border-purple-500"
                    />
                    <img
                      src={searchIcon}
                      alt="Search"
                      className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 filter brightness-200 opacity-60"
                    />
                  </div>
                </div>

                <Link
                  to="/play"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <motion.button
                    whileTap={btnTap}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 glow-btn cursor-pointer"
                  >
                    <img
                      src={gamepadIcon}
                      alt="Gamepad"
                      className="w-4 h-4 object-contain filter brightness-200"
                    />
                    <span>PLAY NOW</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;