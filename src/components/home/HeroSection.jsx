import React from "react";
import { motion } from "motion/react";
import Navbar from "../../layout/Navbar";
import Counter from "../common/Counter";
import heroBg from "../../assets/images/herobg.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";
import playCircleIcon from "../../assets/icons/play-circle.png";
import userIcon from "../../assets/icons/Frame.png";
import nftIcon from "../../assets/icons/Frame (1).png";
import gamesIcon from "../../assets/icons/Frame (2).png";
import {
  fadeIn,
  staggerContainer,
  heroTextVariant,
  badgeVariant,
  cardVariant,
  btnHover,
  btnTap,
} from "../../animations/animation";

const stats = [
  {
    icon: userIcon,
    endValue: 1.02,
    decimals: 2,
    suffix: "M+",
    label: "PLAYERS",
  },
  {
    icon: nftIcon,
    endValue: 92.4,
    decimals: 1,
    suffix: "K+",
    label: "NFTS SOLD",
  },
  {
    isSvg: true,
    endValue: 1.37,
    decimals: 2,
    suffix: "M+",
    label: "COMMUNITY",
  },
  {
    icon: gamesIcon,
    endValue: 250,
    decimals: 0,
    suffix: "+",
    label: "GAMES",
  },
];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#06040d] overflow-hidden flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBg}
          alt="MetaRace Universe"
          className="w-full h-full object-cover object-right md:object-[82%_center] lg:object-[88%_center] filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Left Side Shadow & Ambient Gradient Overlay for text focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06040d] via-[#06040d]/80 to-transparent w-full md:w-[70%] lg:w-[58%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06040d] via-[#06040d]/40 to-transparent h-full" />
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#06040d]/90 to-transparent" />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Hero Content Area - Aligned strictly to the left */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 flex-1 flex flex-col justify-center items-start text-left">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start text-left"
        >
          {/* Tag / Pill */}
          <motion.div
            variants={badgeVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e153a]/80 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
            <span>PLAY. OWN. EARN.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={heroTextVariant}
            className="font-unbounded font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.08] tracking-tight uppercase mb-4 sm:mb-6 text-left"
          >
            <span className="block text-white drop-shadow-md">RACE INTO THE</span>
            <span className="block text-gradient-purple-pink drop-shadow-[0_0_35px_rgba(192,132,252,0.4)]">
              METAVERSE
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            variants={fadeIn("up", 0.3, 0.6)}
            className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal text-left"
          >
            MetaRace is a next-gen gaming universe where adventure meets
            ownership.{" "}
            <span className="text-[#a78bfa] font-semibold">Play epic games</span>
            , collect unique{" "}
            <span className="text-[#f472b6] font-semibold">NFTs</span>, and earn
            real <span className="text-[#c084fc] font-semibold">rewards</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeIn("up", 0.4, 0.6)}
            className="flex flex-wrap items-center justify-start gap-3.5 sm:gap-5 w-full sm:w-auto mb-12 sm:mb-16"
          >
            {/* Play Now CTA Button */}
            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#9333ea] text-white font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all cursor-pointer glow-btn"
            >
              <span>PLAY NOW</span>
              <img
                src={arrowRightIcon}
                alt="Arrow right"
                className="w-3.5 h-3.5 object-contain filter brightness-200"
              />
            </motion.button>

            {/* Watch Trailer Button */}
            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#120d2c]/70 hover:bg-[#1f1747]/90 backdrop-blur-xl border border-white/15 hover:border-purple-400/50 text-white font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer group"
            >
              <img
                src={playCircleIcon}
                alt="Watch Trailer"
                className="w-4 h-4 object-contain filter brightness-200 group-hover:scale-110 transition-transform"
              />
              <span className="text-gray-200 group-hover:text-white">
                WATCH TRAILER
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Cards Grid (4 cards aligned to left side) */}
          <motion.div
            variants={staggerContainer(0.1, 0.5)}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl lg:max-w-2xl xl:max-w-3xl"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                variants={cardVariant(index)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card border border-white/10 hover:border-purple-500/40 rounded-2xl p-3.5 sm:p-4.5 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] group text-left"
              >
                {/* Stat Icon */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 flex items-center justify-start">
                  {item.isSvg ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain filter brightness-150 group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>

                {/* Animated Value */}
                <div className="font-unbounded font-black text-xl sm:text-2xl lg:text-[26px] text-white tracking-tight leading-none mb-1">
                  <Counter
                    end={item.endValue}
                    decimals={item.decimals}
                    suffix={item.suffix}
                    duration={2000}
                  />
                </div>

                {/* Stat Label */}
                <div className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wider uppercase font-sans">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default HeroSection;