import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Sun,
  Gift,
  Layers,
  Repeat,
  Shield,
  Activity,
  Users,
  Database,
  TrendingUp,
  Target,
  DollarSign,
  Hexagon,
  Globe,
  Cpu,
  Flame,
  Terminal,
  Coins,
  Zap,
  Image,
  Compass,
  Feather,
  ShieldCheck,
  MousePointer,
  Anchor,
  Square,
  Box,
  Tv,
} from "lucide-react";

import {
  fadeIn,
  staggerContainer,
  badgeVariant,
} from "../../animations/animation";

const row1 = [
  { name: "Solstice Ventures", icon: Sun, highlight: "pink" },
  { name: "Triple Reward", icon: Gift },
  { name: "Sandbox+", icon: Layers },
  { name: "R-Logo Group", icon: Repeat },
  { name: "ARCON", icon: Shield, highlight: "purple" },
  { name: "PrismLabs", icon: Activity },
];

const row2 = [
  { name: "DAO Maker", icon: Users },
  { name: "Poolz", icon: Database, highlight: "purple" },
  { name: "Finapler", icon: TrendingUp },
  { name: "SquidShell", icon: Target },
  { name: "Web3 Capital", icon: DollarSign },
];

const row3 = [
  { name: "Polygon", icon: Hexagon, highlight: "pink" },
  { name: "OnePlanet", icon: Globe },
  { name: "MZ Web3", icon: Cpu },
  { name: "Mystic", icon: Flame },
  { name: "AWS Game Tech", icon: Terminal, highlight: "purple" },
  { name: "CoinPlex", icon: Coins },
];

const row4 = [
  { name: "YOOZOO", icon: Zap },
  { name: "Game Arts", icon: Image },
  { name: "Discovery", icon: Compass, highlight: "pink" },
  { name: "Plasmeki", icon: Feather },
  { name: "KONCERTED", icon: ShieldCheck },
  { name: "Pixril Studio", icon: MousePointer },
];

const row5 = [
  { name: "Surra", icon: Anchor },
  { name: "PixelPlex", icon: Square, highlight: "purple" },
  { name: "Pharomeon", icon: Box },
  { name: "Tomante Studios", icon: Tv },
];

const PartnerBadge = ({ partner }) => {
  const Icon = partner.icon;
  const isPink = partner.highlight === "pink";
  const isPurple = partner.highlight === "purple";

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-default select-none ${
        isPink
          ? "bg-[#1f0f29]/90 border-2 border-pink-500/80 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.35)]"
          : isPurple
          ? "bg-[#1a1036]/90 border-2 border-purple-500/80 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
          : "bg-[#110c26]/70 border border-white/10 text-gray-300 hover:border-purple-500/40 hover:text-white shadow-sm"
      }`}
    >
      <Icon
        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
          isPink ? "text-pink-400" : isPurple ? "text-purple-400" : "text-gray-400"
        }`}
      />
      <span className="font-unbounded text-xs sm:text-[13px] font-bold tracking-tight whitespace-nowrap">
        {partner.name}
      </span>
    </div>
  );
};

const Partners = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Alternating scroll transformations (Right, Left, Right, Left, Right)
  const xRow1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const xRow3 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const xRow4 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const xRow5 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-8 sm:py-12 lg:py-14 overflow-hidden selection:bg-purple-500 selection:text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-12 mb-8 sm:mb-12">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariant}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#181033]/90 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-5"
          >
            <span>TRUSTED ECOSYSTEM</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeIn("up", 0.1, 0.6)}
            className="font-unbounded font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-tight text-white"
          >
            <span>World-Class </span>
            <span className="text-[#8b5cf6]">Partners</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* 5 Rows with Scroll-Driven Directional Motion */}
      <div className="w-full flex flex-col gap-3.5 sm:gap-4.5 overflow-hidden">
        {/* Row 1 -> Moves Right on Scroll */}
        <motion.div
          style={{ x: xRow1 }}
          className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap will-change-transform"
        >
          {row1.map((partner) => (
            <PartnerBadge key={partner.name} partner={partner} />
          ))}
        </motion.div>

        {/* Row 2 -> Moves Left on Scroll */}
        <motion.div
          style={{ x: xRow2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap will-change-transform"
        >
          {row2.map((partner) => (
            <PartnerBadge key={partner.name} partner={partner} />
          ))}
        </motion.div>

        {/* Row 3 -> Moves Right on Scroll */}
        <motion.div
          style={{ x: xRow3 }}
          className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap will-change-transform"
        >
          {row3.map((partner) => (
            <PartnerBadge key={partner.name} partner={partner} />
          ))}
        </motion.div>

        {/* Row 4 -> Moves Left on Scroll */}
        <motion.div
          style={{ x: xRow4 }}
          className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap will-change-transform"
        >
          {row4.map((partner) => (
            <PartnerBadge key={partner.name} partner={partner} />
          ))}
        </motion.div>

        {/* Row 5 -> Moves Right on Scroll */}
        <motion.div
          style={{ x: xRow5 }}
          className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap will-change-transform"
        >
          {row5.map((partner) => (
            <PartnerBadge key={partner.name} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
