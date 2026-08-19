import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import stutenImg from "../../assets/images/stuten.png";
import metaraceImg from "../../assets/images/metarace.png";
import nftImg from "../../assets/images/nft.png";

import circleXIcon from "../../assets/icons/circle-x.png";
import swordsIcon from "../../assets/icons/swords.png";
import boxIcon from "../../assets/icons/box.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";
import prevArrowIcon from "../../assets/icons/icon-container.png";
import nextArrowIcon from "../../assets/icons/icon-container (1).png";

import {
  fadeIn,
  staggerContainer,
  cardVariant,
  btnHover,
  btnTap,
} from "../../animations/animation";

const gamesData = [
  {
    id: "stuten-garden",
    title: "STUTEN GARDEN:",
    category: "HORSE CATCHING RPG",
    categoryColor: "text-pink-500",
    description:
      "Collect & train horses, win MRT rewards and conquer global leaderboards. Explore mythical plains with fellow players.",
    image: stutenImg,
    icon: circleXIcon,
    status: "active",
    actionText: "PLAY NOW",
    actionLink: "/play/stuten-garden",
  },
  {
    id: "metarace-arena",
    title: "METARACE",
    category: "ARENA",
    categoryColor: "text-purple-400",
    description:
      "Multiplayer horse racing with epic stakes, pools and tournaments. Pitch your ultimate champions against global rivals.",
    image: metaraceImg,
    icon: swordsIcon,
    status: "coming_soon",
    actionText: "COMING SOON",
  },
  {
    id: "nft-marketplace",
    title: "NFT",
    category: "MARKETPLACE",
    categoryColor: "text-purple-400",
    description:
      "Trade, breed, and showcase MetaRace NFTs. Rare horses command real value. Rent out your champion stallion for steady yields.",
    image: nftImg,
    icon: boxIcon,
    status: "coming_soon",
    actionText: "COMING SOON",
  },
];

const Games = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gamesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gamesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-black py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header with Title on Left and Carousel Nav on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            variants={fadeIn("up", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col text-left"
          >
            <h2 className="font-unbounded font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight  leading-tight">
              <span className="text-white">Games </span>
              <span className="text-gradient-purple-pink">& Dapps</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 font-normal max-w-xl">
              Pick your favourite kind of merch and start exploring.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            variants={fadeIn("left", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-3 shrink-0 self-start sm:self-auto"
          >
            {/* Previous Arrow Button */}
            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              onClick={handlePrev}
              aria-label="Previous game"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#120e28] hover:bg-[#1f1747] border border-white/10 hover:border-purple-500/40 flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.5)] group"
            >
              <img
                src={prevArrowIcon}
                alt="Previous"
                className="w-3.5 h-3.5 object-contain filter brightness-200 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>

            {/* Next Arrow Button (Glowing Purple Active) */}
            <motion.button
              whileHover={btnHover}
              whileTap={btnTap}
              onClick={handleNext}
              aria-label="Next game"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] flex items-center justify-center transition-all cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.55)] glow-btn"
            >
              <img
                src={nextArrowIcon}
                alt="Next"
                className="w-3.5 h-3.5 object-contain filter brightness-200"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* 3 Games Cards Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {gamesData.map((game, index) => (
            <motion.div
              key={game.id}
              variants={cardVariant(index)}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl overflow-hidden bg-[#0c081e]/60 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)]"
            >
              {/* Artwork Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#090714]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c081e] via-transparent to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1d143d] border border-purple-500/30 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        src={game.icon}
                        alt={game.title}
                        className="w-full h-full object-contain filter brightness-150"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="font-unbounded font-black text-sm sm:text-base text-white tracking-wide leading-tight">
                        {game.title}
                      </h3>
                      <span
                        className={`text-[11px] font-bold tracking-wider font-sans uppercase mt-0.5 ${game.categoryColor}`}
                      >
                        {game.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 text-left font-normal">
                    {game.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="w-full mt-auto">
                  {game.status === "active" ? (
                    <Link to={game.actionLink} className="block w-full">
                      <motion.button
                        whileHover={btnHover}
                        whileTap={btnTap}
                        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#8b5cf6] text-white font-unbounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 glow-btn hover:brightness-110 transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-pointer"
                      >
                        <span>{game.actionText}</span>
                        <img
                          src={arrowRightIcon}
                          alt="Arrow"
                          className="w-3 h-3 object-contain filter brightness-200"
                        />
                      </motion.button>
                    </Link>
                  ) : (
                    <div className="w-full py-3.5 px-6 rounded-2xl bg-[#140e2b]/80 border border-white/10 text-gray-400 font-unbounded text-xs font-bold tracking-wider uppercase text-center select-none shadow-inner">
                      {game.actionText}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
