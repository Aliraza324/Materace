import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Send, Globe } from "lucide-react";
import gamepadIcon from "../assets/icons/gamepad.png";
import arrowRightIcon from "../assets/icons/arrow-right.png";
import { btnHover, btnTap } from "../animations/animation";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-black pt-10 sm:pt-14 pb-10 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Newsletter / Subscription Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Left Text */}
          <div className="flex flex-col max-w-xl text-left">
            <h3 className="font-unbounded font-black text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase leading-tight text-white mb-3">
              <span>STAY AHEAD OF THE </span>
              <span className="text-[#8b5cf6]">PACK</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Get the latest updates, limited horse NFT drops, and tactical
              breeding guides sent straight to your terminal.
            </p>
          </div>

          {/* Right Input and Button Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          >
            <div className="relative flex-1 sm:w-80 md:w-96">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#100b26]/90 border border-white/15 focus:border-purple-500/80 rounded-full py-3.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-all shadow-inner"
              />
              <Mail className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              type="submit"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#9333ea] text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 glow-btn hover:brightness-110 transition-all shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer shrink-0"
            >
              <span>{subscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}</span>
              <img
                src={arrowRightIcon}
                alt="Arrow"
                className="w-3 h-3 object-contain filter brightness-200"
              />
            </motion.button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 py-12 sm:py-16 text-left">
          {/* Col 1: Brand Info (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-2.5 mb-5 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center p-2 shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-400/30">
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

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              The ultimate Web3 horse-racing ecosystem. Race elite genetic
              champions, manage your digital stable, and earn real yield in a
              player-owned universe.{" "}
              <span className="text-[#f472b6] font-semibold">
                Feed Your Gaming Soul.
              </span>
            </p>
          </div>

          {/* Col 2: GAMES (Spans 2-3 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-unbounded font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-5">
              GAMES
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link
                  to="/games/stuten-garden"
                  className="hover:text-purple-300 transition-colors"
                >
                  Stuten Garden
                </Link>
              </li>
              <li>
                <Link
                  to="/games/arena"
                  className="hover:text-purple-300 transition-colors"
                >
                  MetaRace Arena
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="hover:text-purple-300 transition-colors"
                >
                  NFT Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: RESOURCES (Spans 2-3 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-unbounded font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-5">
              RESOURCES
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link
                  to="/whitepaper"
                  className="hover:text-purple-300 transition-colors"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-purple-300 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-purple-300 transition-colors"
                >
                  Official Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: COMMUNITY (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-unbounded font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-5">
              COMMUNITY
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link
                  to="/community/discord"
                  className="hover:text-purple-300 transition-colors"
                >
                  Discord Guild
                </Link>
              </li>
              <li>
                <Link
                  to="/community/twitter"
                  className="hover:text-purple-300 transition-colors"
                >
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link
                  to="/community/telegram"
                  className="hover:text-purple-300 transition-colors"
                >
                  Telegram Feed
                </Link>
              </li>
              <li>
                <Link
                  to="/community/medium"
                  className="hover:text-purple-300 transition-colors"
                >
                  Medium Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span>© 2024 MetaRace Studios. All rights reserved.</span>
            <Link
              to="/privacy"
              className="hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Discord */}
            <Link
              to="/community/discord"
              aria-label="Discord"
              className="w-9 h-9 rounded-full bg-[#120e28] hover:bg-[#25174f] border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>

            {/* X (formerly Twitter) */}
            <Link
              to="/community/twitter"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#120e28] hover:bg-[#25174f] border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* Telegram */}
            <Link
              to="/community/telegram"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full bg-[#120e28] hover:bg-[#25174f] border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
            </Link>

            {/* Website / Globe */}
            <Link
              to="/"
              aria-label="Website"
              className="w-9 h-9 rounded-full bg-[#120e28] hover:bg-[#25174f] border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
            >
              <Globe className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;