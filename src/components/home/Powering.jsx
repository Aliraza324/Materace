import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import poweringImg from "../../assets/images/poweringImg.png";
import powerHorseImg from "../../assets/images/powerHorse.png";

import usersIcon from "../../assets/icons/users.png";
import shieldCheckIcon from "../../assets/icons/shield-check.png";
import trendingIcon from "../../assets/icons/trending-ups.png";
import circleXIcon from "../../assets/icons/circle-x.png";
import decentralizedIcon from "../../assets/icons/centralized.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";

import {
  fadeIn,
  staggerContainer,
  badgeVariant,
  btnHover,
  btnTap,
} from "../../animations/animation";

const governanceFeatures = [
  { icon: usersIcon, title: "Community", sub: "Driven" },
  { icon: shieldCheckIcon, title: "Transparent", sub: "Decisions" },
  { icon: trendingIcon, title: "Sustainable", sub: "Growth" },
];

const marketplaceFeatures = [
  { icon: circleXIcon, title: "SECURE", sub: "Trading" },
  { icon: circleXIcon, title: "RARE DIGITAL", sub: "Assets" },
  { icon: decentralizedIcon, title: "DECENTRALIZED", sub: "Platform" },
];

const Powering = () => {
  return (
    <section className="relative w-full bg-black py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.h2
            variants={fadeIn("up", 0.1, 0.6)}
            className="font-unbounded font-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight leading-[1.15] text-white mb-3"
          >
            <span className="block">Powering the Future</span>
            <span className="block mt-1">
              <span className="text-white">of </span>
              <span className="text-[#8b5cf6]">MetaRace</span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2, 0.6)}
            className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal mt-2"
          >
            Governance, economy, and technology working together to build the
            ultimate horse racing universe.
          </motion.p>
        </motion.div>

        {/* Section Cards Stack */}
        <div className="w-full flex flex-col gap-10 sm:gap-14">
          {/* Card 1: MetaRace Governance (Image Left, Content Right) */}
          <motion.div
            variants={fadeIn("up", 0.2, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full rounded-3xl overflow-hidden bg-[#0c081e]/70 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#090714] aspect-[16/11] group">
                <img
                  src={poweringImg}
                  alt="MetaRace Command Center"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c081e]/60 to-transparent" />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Badge */}
                <motion.div
                  variants={badgeVariant}
                  className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1e133d] border border-purple-500/40 text-purple-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4"
                >
                  <span>GOVERNANCE</span>
                </motion.div>

                {/* Title */}
                <h3 className="font-unbounded font-black text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-4">
                  <span className="text-[#8b5cf6]">MetaRace </span>
                  <span className="text-white">Governance</span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  MRT token holders vote on key decisions that shape the future
                  of MetaRace — including game development, reward structures, and
                  new feature rollouts.
                </p>

                {/* 3 Feature Pills */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full mb-8">
                  {governanceFeatures.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-2.5 bg-[#140e2b] border border-white/10 rounded-xl p-2.5 sm:p-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-purple-900/40 flex items-center justify-center p-1 shrink-0">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-contain filter brightness-150"
                        />
                      </div>
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-xs font-bold text-white truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-gray-400 truncate">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link to="/governance" className="w-full">
                  <motion.button
                    whileHover={btnHover}
                    whileTap={btnTap}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#2e1554]/90 hover:bg-[#3d1a70] border border-purple-500/50 text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(139,92,246,0.3)] cursor-pointer"
                  >
                    <span>View Governance</span>
                    <img
                      src={arrowRightIcon}
                      alt="Arrow"
                      className="w-3 h-3 object-contain filter brightness-200"
                    />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MetaRace Marketplace (Content Left, Image Right) */}
          <motion.div
            variants={fadeIn("up", 0.2, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full rounded-3xl overflow-hidden bg-[#000] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
                {/* Badge */}
                <motion.div
                  variants={badgeVariant}
                  className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1e133d] border border-purple-500/40 text-purple-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4"
                >
                  <span>MARKETPLACE</span>
                </motion.div>

                {/* Title */}
                <h3 className="font-unbounded font-black text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-4">
                  <span className="block text-[#8b5cf6]">MetaRace</span>
                  <span className="block text-white">Marketplace</span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Trade, buy, and sell exclusive NFT horses, rare items, and in-game
                  assets in a secure and decentralized marketplace.
                </p>

                {/* 3 Feature Pills */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full mb-8">
                  {marketplaceFeatures.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-2 bg-[#140e2b] border border-white/10 rounded-xl p-2.5 sm:p-3"
                    >
                      <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-contain filter brightness-150"
                        />
                      </div>
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-[11px] font-bold text-white tracking-tight truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-gray-400 truncate">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link to="/marketplace">
                  <motion.button
                    whileHover={btnHover}
                    whileTap={btnTap}
                    className="py-3.5 px-7 rounded-2xl bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#8b5cf6] text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 glow-btn hover:brightness-110 transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-pointer"
                  >
                    <span>Explore Marketplace</span>
                    <img
                      src={arrowRightIcon}
                      alt="Arrow"
                      className="w-3 h-3 object-contain filter brightness-200"
                    />
                  </motion.button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#090714] aspect-[16/11] group order-1 lg:order-2">
                <img
                  src={powerHorseImg}
                  alt="MetaRace Marketplace NFT Horses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c081e]/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Powering;
