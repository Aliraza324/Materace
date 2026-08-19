import React from "react";
import { motion } from "motion/react";
import aboutImg from "../../assets/images/about.png";
import gamepadIcon from "../../assets/icons/gamepadd.png";
import userIcon from "../../assets/icons/users.png";
import Counter from "../common/Counter";
import {
  fadeIn,
  staggerContainer,
  badgeVariant,
  heroTextVariant,
  cardVariant,
} from "../../animations/animation";

const bottomStats = [
  {
    icon: userIcon,
    isSvg: false,
    endValue: 1.02,
    decimals: 2,
    suffix: "M+",
    label: "Happy Players",
  },
  {
    icon: gamepadIcon,
    isSvg: false,
    endValue: 1.37,
    decimals: 2,
    suffix: "M+",
    label: "Games Played",
  },
  {
    isSvg: true,
    endValue: 250,
    decimals: 0,
    suffix: "+",
    label: "Tournaments Hosted",
  },
];

const AboutUs = () => {
  return (
    <section className="relative w-full bg-black py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Content */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e153a]/80 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
            <span>ABOUT US</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={heroTextVariant}
            className="font-unbounded font-black text-2xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.12] tracking-tight uppercase mb-5 sm:mb-6 text-left"
          >
            <span className="block text-white">Built For Gamers.</span>
            <span className="block text-white">Driven By Innovation.</span>
            <span className="block">
              <span className="text-gradient-purple-pink">Powered By </span>
              <span className="text-white">Community.</span>
            </span>
          </motion.h2>

          {/* Paragraph description */}
          <motion.p
            variants={fadeIn("up", 0.3, 0.6)}
            className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal"
          >
            MetaRace is a next-gen gaming ecosystem where players compete, own, and
            earn. We're building the future of Web3 gaming with immersive
            experiences and true ownership.
          </motion.p>

          {/* Mission & Vision Cards (2 side-by-side cards) */}
          <motion.div
            variants={staggerContainer(0.1, 0.4)}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12 max-w-xl"
          >
            {/* Our Mission */}
            <motion.div
              variants={cardVariant(0)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card border border-purple-500/20 hover:border-purple-500/50 rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)] group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center p-2.5 shrink-0 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                <img
                  src={gamepadIcon}
                  alt="Mission"
                  className="w-full h-full object-contain filter brightness-200"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-unbounded font-bold text-sm sm:text-base text-white mb-1.5">
                  Our Mission
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  To create a fair, fun, and rewarding gaming universe owned by the
                  players.
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              variants={cardVariant(1)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card border border-purple-500/20 hover:border-purple-500/50 rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)] group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center p-2.5 shrink-0 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                <img
                  src={userIcon}
                  alt="Vision"
                  className="w-full h-full object-contain filter brightness-200"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-unbounded font-bold text-sm sm:text-base text-white mb-1.5">
                  Our Vision
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  To become the leading Web3 gaming platform connecting millions of
                  gamers worldwide.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3 Bottom Mini Stats */}
          <motion.div
            variants={fadeIn("up", 0.5, 0.6)}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2"
          >
            {bottomStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  {stat.isSvg ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                      <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  ) : (
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-5 h-5 object-contain filter brightness-150 group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>
                <div className="flex flex-col text-left">
                  <div className="font-unbounded font-black text-lg sm:text-xl text-white tracking-tight leading-none">
                    <Counter
                      end={stat.endValue}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-[11px] font-medium text-gray-400 font-sans mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Portal Robot Mascot Artwork */}
        <motion.div
          variants={fadeIn("left", 0.3, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-[500px] lg:max-w-none">
            <motion.img
              src={aboutImg}
              alt="MetaRace Cyber Portal & Mascot"
              className="w-full h-auto object-contain"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
