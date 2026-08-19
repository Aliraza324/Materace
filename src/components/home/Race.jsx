import React from "react";
import { motion } from "motion/react";
import valleyImg from "../../assets/images/valley.png";
import horseImg from "../../assets/images/horse.png";
import yearImg from "../../assets/images/year.png";
import pinkImg from "../../assets/images/pink.png";
import teamImg from "../../assets/images/team.png";

import gamepadIcon from "../../assets/icons/gamepadd.png";
import homeIcon from "../../assets/icons/home.png";
import coinIcon from "../../assets/icons/coin.png";
import trophyIcon from "../../assets/icons/trophy.png";

import {
  fadeIn,
  staggerContainer,
  cardVariant,
} from "../../animations/animation";

const raceFeatures = [
  {
    icon: gamepadIcon,
    title: "Race MetaRace Classes",
    description:
      "Choose from multiple highly specialized horse classes, each boasting unique bio-abilities, speeds, and customizable racing styles.",
  },
  {
    icon: homeIcon,
    title: "Build Your Stable",
    description:
      "Breed, customize, and level up your rare NFT horses with futuristic genetic code to architect the ultimate champion stables.",
  },
  {
    icon: coinIcon,
    title: "Earn $MRT Rewards",
    description:
      "Dominate tournaments to harvest MRT governance tokens, exclusive legendary equipment drops, and lucrative breeding yields.",
  },
  {
    icon: trophyIcon,
    title: "Lead To Victory",
    description:
      "Compete in weekly high-stakes tournaments, climb worldwide leaderboards, and capture ultimate glory on the metaverse racing tracks.",
  },
];

const Race = () => {
  return (
    <section className="relative w-full bg-black py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 max-w-4xl"
        >
          <motion.h2
            variants={fadeIn("up", 0.1, 0.6)}
            className="font-unbounded font-black text-2xl sm:text-4xl md:text-5xl lg:text-[42px] tracking-tight leading-[1.18] text-center mb-2"
          >
            <span className="block text-white">Race With A Wide Variety Of</span>
            <span className="block text-[#8b5cf6] mt-1">
              METARACE Classes
            </span>
          </motion.h2>

          {/* Center decorative divider line with diamond */}
          <div className="flex items-center justify-center gap-3 w-full max-w-[260px] sm:max-w-[340px] mt-4 opacity-60">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-purple-500/80" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-purple-500/40 to-purple-500/80" />
          </div>
        </motion.div>

        {/* Gallery Showcase Section */}
        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-12 sm:mb-16 items-stretch"
        >
          {/* Left Large Showcase: Stutengarden Valley */}
          <motion.div
            variants={cardVariant(0)}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#0c081e] border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 shadow-[0_10px_35px_rgba(139,92,246,0.2)] group aspect-[16/11] lg:aspect-auto flex flex-col justify-end"
          >
            <img
              src={valleyImg}
              alt="Stutengarden Valley"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out absolute inset-0"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06040d]/95 via-[#06040d]/30 to-transparent" />

            {/* Bottom Overlay Label */}
            <div className="relative z-10 p-6 sm:p-8 text-left">
              <h3 className="font-unbounded font-black text-lg sm:text-2xl text-white tracking-wide uppercase mb-1 drop-shadow-md">
                STUTENGARDEN VALLEY
              </h3>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest text-cyan-300 uppercase font-sans drop-shadow-sm">
                PRIMARY BREED AND CATCH RPG ZONE
              </p>
            </div>
          </motion.div>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 1: Moon Horse */}
            <motion.div
              variants={cardVariant(1)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl overflow-hidden bg-[#0c081e] border border-white/10 hover:border-purple-500/40 transition-all duration-300 aspect-[16/11] group shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <img
                src={horseImg}
                alt="Moon Horse"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06040d]/60 to-transparent" />
            </motion.div>

            {/* Card 2: Flaming 2026 */}
            <motion.div
              variants={cardVariant(2)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl overflow-hidden bg-[#0c081e] border border-white/10 hover:border-purple-500/40 transition-all duration-300 aspect-[16/11] group shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <img
                src={yearImg}
                alt="2026 Champion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06040d]/60 to-transparent" />
            </motion.div>

            {/* Card 3: Cyberpunk Pilot */}
            <motion.div
              variants={cardVariant(3)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl overflow-hidden bg-[#0c081e] border border-white/10 hover:border-purple-500/40 transition-all duration-300 aspect-[16/11] group shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <img
                src={pinkImg}
                alt="Cyberpunk Pilot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06040d]/60 to-transparent" />
            </motion.div>

            {/* Card 4: Lab & Scientist */}
            <motion.div
              variants={cardVariant(4)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl overflow-hidden bg-[#0c081e] border border-white/10 hover:border-purple-500/40 transition-all duration-300 aspect-[16/11] group shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <img
                src={teamImg}
                alt="Laboratory Stable"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06040d]/60 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom 4 Feature Cards */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {raceFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant(index)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card border border-purple-500/20 hover:border-purple-500/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-start text-left transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#1d143d] border border-purple-500/30 flex items-center justify-center p-2.5 mb-4 shrink-0 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain filter brightness-150"
                />
              </div>

              {/* Title */}
              <h3 className="font-unbounded font-bold text-sm sm:text-base text-white mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Race;
