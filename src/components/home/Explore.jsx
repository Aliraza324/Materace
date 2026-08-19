import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import keychainsImg from "../../assets/images/Keychains.png";
import plushiesImg from "../../assets/images/Plushies.png";
import pinsImg from "../../assets/images/Pins.png";
import postersImg from "../../assets/images/Posters.png";
import mugsImg from "../../assets/images/Mugs.png";
import starIcon from "../../assets/icons/star.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";
import {
  fadeIn,
  staggerContainer,
  badgeVariant,
  cardVariant,
} from "../../animations/animation";

const exploreItems = [
  {
    id: "keychains",
    title: "Keychains",
    image: keychainsImg,
    badge: "POPULAR",
    link: "/collection/keychains",
  },
  {
    id: "plushies",
    title: "Plushies",
    image: plushiesImg,
    badge: "POPULAR",
    link: "/collection/plushies",
  },
  {
    id: "pins",
    title: "Pins",
    image: pinsImg,
    badge: "POPULAR",
    link: "/collection/pins",
  },
  {
    id: "posters",
    title: "Posters",
    image: postersImg,
    badge: "POPULAR",
    link: "/collection/posters",
  },
  {
    id: "mugs",
    title: "Mugs",
    image: mugsImg,
    badge: "POPULAR",
    link: "/collection/mugs",
  },
];

const Explore = () => {
  return (
    <section className="relative w-full bg-[#06040d] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          {/* Top Pill / Badge */}
          <motion.div
            variants={badgeVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16102e]/80 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-4"
          >
            <span className="text-purple-400 text-xs">✦</span>
            <span>
              DISCOVER THE WORLD OF <span className="text-purple-400 font-bold">METARACE</span>
            </span>
            <span className="text-purple-400 text-xs">✦</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeIn("up", 0.2, 0.6)}
            className="font-unbounded font-black text-2xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight uppercase leading-tight"
          >
            <span className="text-white">EXPLORE. PLAY. </span>
            <span className="text-gradient-purple-pink">EARN</span>
          </motion.h2>
        </motion.div>

        {/* 5 Cards Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariant(index)}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl overflow-hidden bg-[#0e0a24]/60 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)] flex flex-col aspect-[3/4.2] sm:aspect-[3/4.4]"
            >
              <Link to={item.link} className="w-full h-full relative flex flex-col justify-between p-4 sm:p-5">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Gradient Overlays for contrast and depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090717] via-[#090717]/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090717]/60 to-transparent" />
                </div>

                {/* Top Badge (POPULAR) */}
                <div className="relative z-10 self-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/80 backdrop-blur-md border border-purple-400/30 text-white text-[10px] sm:text-[11px] font-bold tracking-wide shadow-[0_2px_10px_rgba(124,58,237,0.4)]">
                    <img
                      src={starIcon}
                      alt="Star"
                      className="w-2.5 h-2.5 object-contain filter brightness-200"
                    />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 mt-auto flex flex-col gap-1.5">
                  <h3 className="font-unbounded font-bold text-lg sm:text-xl text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Explore Collection</span>
                    <img
                      src={arrowRightIcon}
                      alt="Arrow"
                      className="w-3 h-3 object-contain filter brightness-200 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
