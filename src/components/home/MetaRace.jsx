import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import playnowImg from "../../assets/images/playnow.png";
import getImg from "../../assets/images/get.png";
import joinImg from "../../assets/images/join.png";

import gamepadIcon from "../../assets/icons/gamepadd.png";
import coinsIcon from "../../assets/icons/coins.png";
import navigationIcon from "../../assets/icons/navigation.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";

import globeIcon from "../../assets/icons/globe.png";
import activityIcon from "../../assets/icons/activity.png";
import trendingUpIcon from "../../assets/icons/trending-up.png";
import vectorIcon from "../../assets/icons/Vector.png";

import {
  fadeIn,
  staggerContainer,
  badgeVariant,
  cardVariant,
} from "../../animations/animation";

const partners = [
  { name: "Gate.io", icon: globeIcon, link: "https://www.gate.io" },
  { name: "MEXC", icon: activityIcon, link: "https://www.mexc.com" },
  { name: "CoinGecko", icon: trendingUpIcon, link: "https://www.coingecko.com" },
  { name: "CoinMarketCap", icon: vectorIcon, link: "https://coinmarketcap.com" },
];

const MetaRace = () => {
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
          {/* Badge */}
          <motion.div
            variants={badgeVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181133]/80 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-5"
          >
            <span>EXPLORE</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeIn("up", 0.2, 0.6)}
            className="font-unbounded font-black text-2xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight uppercase leading-tight text-white mb-4 sm:mb-6"
          >
            Explore METARACE
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("up", 0.3, 0.6)}
            className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal"
          >
            Dive into the MetaRace ecosystem — where blockchain gaming meets real
            ownership. Race, stake, and earn MRT tokens while building your
            ultimate NFT horse stable.
          </motion.p>
        </motion.div>

        {/* 3 Feature Cards Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {/* Card 1: Play Now */}
          <motion.div
            variants={cardVariant(0)}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl overflow-hidden bg-[#0d091f]/60 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)]"
          >
            {/* Top Artwork Container with unclipped Floating Icon Badge */}
            <div className="relative w-full aspect-[16/11] bg-[#090714]">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={playnowImg}
                  alt="Play Now"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d091f] via-transparent to-transparent" />
              </div>

              {/* Center Floating Icon Badge - fully visible */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-2xl bg-[#1d123d] border border-purple-500/60 flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform">
                  <img
                    src={gamepadIcon}
                    alt="Play Gamepad"
                    className="w-full h-full object-contain filter brightness-200"
                  />
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-10 sm:pt-11 pb-7 px-6 flex-1 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="font-unbounded font-bold text-xl sm:text-2xl text-white mb-3">
                  Play Now
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Embark on the thrilling journey of Stutengarden, the horse-catching
                  game, directly on your web browser.
                </p>
              </div>

              {/* Action Link */}
              <Link
                to="/play"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors group/link mt-auto"
              >
                <span>Play Now</span>
                <img
                  src={arrowRightIcon}
                  alt="Arrow"
                  className="w-3.5 h-3.5 object-contain filter brightness-200 group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Get MRT Tokens (Featured Highlight Card) */}
          <motion.div
            variants={cardVariant(1)}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl overflow-hidden bg-[#0d091f]/80 border-2 border-pink-500/50 hover:border-pink-500/80 transition-all duration-300 flex flex-col justify-between shadow-[0_0_35px_rgba(236,72,153,0.2)] hover:shadow-[0_0_45px_rgba(236,72,153,0.35)]"
          >
            {/* Top Artwork Container with unclipped Floating Icon Badge */}
            <div className="relative w-full aspect-[16/11] bg-[#090714]">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={getImg}
                  alt="Get MRT Tokens"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d091f] via-transparent to-transparent" />
              </div>

              {/* Center Floating Icon Badge - fully visible */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-2xl bg-[#361334] border border-pink-500/70 flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(236,72,153,0.7)] group-hover:scale-110 transition-transform">
                  <img
                    src={coinsIcon}
                    alt="MRT Coins"
                    className="w-full h-full object-contain filter brightness-200"
                  />
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-10 sm:pt-11 pb-6 px-6 flex-1 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="font-unbounded font-bold text-xl sm:text-2xl text-white mb-3">
                  Get MRT Tokens
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Learn about the $MRT governance token powering rewards, staking,
                  and in-game economies.
                </p>
              </div>

              {/* Partner Badges Bar */}
              <div className="w-full bg-[#160f2b]/90 border border-white/10 rounded-2xl p-2.5 flex items-center justify-around gap-1 mt-auto">
                {partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors group/item px-1"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center p-1 group-hover/item:bg-white/15 transition-all">
                      <img
                        src={partner.icon}
                        alt={partner.name}
                        className="w-3.5 h-3.5 object-contain filter brightness-150"
                      />
                    </div>
                    <span className="text-[9px] font-medium tracking-tight whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Join The Airdrop */}
          <motion.div
            variants={cardVariant(2)}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl overflow-hidden bg-[#0d091f]/60 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)]"
          >
            {/* Top Artwork Container with unclipped Floating Icon Badge */}
            <div className="relative w-full aspect-[16/11] bg-[#090714]">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={joinImg}
                  alt="Join The Airdrop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d091f] via-transparent to-transparent" />
              </div>

              {/* Center Floating Icon Badge - fully visible */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-2xl bg-[#0e273a] border border-cyan-500/60 flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                  <img
                    src={navigationIcon}
                    alt="Airdrop Navigation"
                    className="w-full h-full object-contain filter brightness-200"
                  />
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-10 sm:pt-11 pb-7 px-6 flex-1 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="font-unbounded font-bold text-xl sm:text-2xl text-white mb-3">
                  Join The Airdrop
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Join the MetaRace airdrop campaign. Early participants earn bonus
                  MRT tokens and exclusive NFT horse drops before public launch.
                </p>
              </div>

              {/* Action Link */}
              <Link
                to="/airdrop"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors group/link mt-auto"
              >
                <span>Join Airdrop</span>
                <img
                  src={arrowRightIcon}
                  alt="Arrow"
                  className="w-3.5 h-3.5 object-contain filter brightness-200 group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetaRace;
