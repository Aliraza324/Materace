import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import studioImg from "../../assets/images/studio.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";

import {
  fadeIn,
  staggerContainer,
  badgeVariant,
  heroTextVariant,
  btnHover,
  btnTap,
} from "../../animations/animation";

const Studio = () => {
  return (
    <section className="relative w-full bg-black py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full rounded-3xl overflow-hidden bg-[#0c081e]/60 transition-all duration-300 p-6 sm:p-10 lg:p-14 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={fadeIn("right", 0.2, 0.7)}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              {/* Badge */}
              <motion.div
                variants={badgeVariant}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e153a]/80 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-5 sm:mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
                <span>OUR TEAM</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                variants={heroTextVariant}
                className="font-unbounded font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-tight uppercase mb-6 text-left"
              >
                <span className="block text-white">METARACE</span>
                <span className="block text-[#8b5cf6] mt-1">STUDIOS</span>
              </motion.h2>

              {/* Lead Paragraph */}
              <p className="text-white text-sm sm:text-base md:text-lg font-bold leading-relaxed mb-4">
                MetaRace Studios{" "}
                <span className="text-[#a78bfa]">specializes in creating</span>{" "}
                high-quality 3D art, animations, and immersive Web3 gaming
                experiences.
              </p>

              {/* Sub-paragraph */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 font-normal">
                A seasoned team with 25+ years of management at the forefront of
                EMEA and Asia gaming. With "Your Gaming Soul," we're your gateway
                to the web3 gaming universe, active and innovating since 2019.
              </p>

              {/* CTA Button */}
              <Link to="/studio">
                <motion.button
                  whileHover={btnHover}
                  whileTap={btnTap}
                  className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#8b5cf6] text-white font-unbounded text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-3 glow-btn hover:brightness-110 transition-all shadow-[0_0_25px_rgba(139,92,246,0.45)] cursor-pointer"
                >
                  <span>VISIT STUDIO</span>
                  <img
                    src={arrowRightIcon}
                    alt="Arrow"
                    className="w-3.5 h-3.5 object-contain filter brightness-200"
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Column - Team Image */}
            <motion.div
              variants={fadeIn("left", 0.3, 0.8)}
              className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#090714] border border-purple-500/30 group shadow-[0_8px_30px_rgba(0,0,0,0.6)] aspect-[16/11] lg:aspect-auto"
            >
              <img
                src={studioImg}
                alt="MetaRace Studios Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c081e]/40 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Studio;
