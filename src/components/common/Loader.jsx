import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import gamepadIcon from "../../assets/icons/gamepad.png";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Dynamic increment for realistic loading cadence
      const increment =
        current < 30
          ? Math.floor(Math.random() * 4) + 2
          : current < 70
          ? Math.floor(Math.random() * 3) + 1
          : current < 95
          ? Math.floor(Math.random() * 5) + 2
          : 1;

      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setIsDone(true);
        // Short pause at 100% to let user see completion, then open the book
        setTimeout(() => {
          setIsOpening(true);
        }, 350);
        // Fully remove loader once animation completes
        setTimeout(() => {
          setIsUnmounted(true);
          document.body.style.overflow = "auto";
          if (onLoadingComplete) onLoadingComplete();
        }, 1550);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [onLoadingComplete]);

  if (isUnmounted) return null;

  // Dynamic status text matching MetaRace theme
  const getStatusText = (val) => {
    if (val < 25) return "INITIALIZING METAVERSE PROTOCOL...";
    if (val < 50) return "SYNCING BLOCKCHAIN NODES...";
    if (val < 75) return "CALIBRATING QUANTUM GRAPHICS...";
    if (val < 95) return "LOADING HIGH-RES ASSETS...";
    if (val < 100) return "FINALIZING RACETRACK ENVIRONMENT...";
    return "ACCESS GRANTED // WELCOME TO METARACE";
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-auto [perspective:1400px]">
      {/* ----------------- LEFT HALF (LEFT PAGE / DOOR) ----------------- */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={
          isOpening
            ? {
                rotateY: -95,
                x: "-100%",
                transition: {
                  duration: 1.15,
                  ease: [0.77, 0, 0.175, 1],
                },
              }
            : {}
        }
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#05030a] overflow-hidden"
      >
        {/* Ambient Gradient Glows on Left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-800/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Top-Left HUD Info */}
        <div className="absolute top-6 sm:top-8 left-6 sm:left-10 z-20 flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-purple-200 uppercase">
              SYS ONLINE
            </span>
          </div>
          <span className="hidden sm:inline text-[11px] font-mono text-purple-400/60 tracking-wider">
            BUILD 2.4.0
          </span>
        </div>

        {/* Bottom-Left HUD Info */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20 space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-0.5 h-3.5">
              <span className="w-1 bg-purple-400/80 rounded-xs animate-pulse h-2" />
              <span className="w-1 bg-purple-400 rounded-xs animate-pulse h-3.5 delay-75" />
              <span className="w-1 bg-purple-300 rounded-xs animate-pulse h-1.5 delay-150" />
              <span className="w-1 bg-pink-400/90 rounded-xs animate-pulse h-3 delay-100" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-purple-300/80 tracking-widest uppercase">
              NODE // #8849-MR
            </span>
          </div>
          <p className="text-[9px] sm:text-[10px] font-mono text-gray-500 tracking-wider">
            ENCRYPTED NEURAL TRANSMISSION
          </p>
        </div>

        {/* Left Side Content of Center Hologram */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 flex flex-col items-center pointer-events-none">
          {/* Outer Rotating Cyber Ring */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-purple-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-purple-400/20 border-t-purple-400"
            />

            {/* Glowing Center Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#4c1d95] p-4 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] border border-purple-300/40">
              <img
                src={gamepadIcon}
                alt="Logo"
                className="w-full h-full object-contain filter brightness-200 drop-shadow-[0_0_10px_#fff]"
              />
            </div>
          </div>

          {/* MetaRace Title */}
          <div className="mt-6 text-center">
            <h1 className="font-unbounded font-black tracking-widest text-2xl sm:text-3xl text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              META<span className="text-purple-400">RACE</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest text-purple-300/90 h-5">
              {getStatusText(progress)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ----------------- RIGHT HALF (RIGHT PAGE / DOOR) ----------------- */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={
          isOpening
            ? {
                rotateY: 95,
                x: "100%",
                transition: {
                  duration: 1.15,
                  ease: [0.77, 0, 0.175, 1],
                },
              }
            : {}
        }
        style={{
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#05030a] overflow-hidden"
      >
        {/* Ambient Gradient Glows on Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-700/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Top-Right HUD Info */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-10 z-20 flex items-center gap-3">
          <span className="hidden sm:inline text-[11px] font-mono text-purple-400/60 tracking-wider">
            PING: 24MS
          </span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-pink-300 uppercase">
              PROTOCOL // WEB3
            </span>
          </div>
        </div>

        {/* Right Side Content of Center Hologram */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          {/* Outer Rotating Cyber Ring */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-purple-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-purple-400/20 border-t-purple-400"
            />

            {/* Glowing Center Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#4c1d95] p-4 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] border border-purple-300/40">
              <img
                src={gamepadIcon}
                alt="Logo"
                className="w-full h-full object-contain filter brightness-200 drop-shadow-[0_0_10px_#fff]"
              />
            </div>
          </div>

          {/* MetaRace Title */}
          <div className="mt-6 text-center">
            <h1 className="font-unbounded font-black tracking-widest text-2xl sm:text-3xl text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              META<span className="text-purple-400">RACE</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest text-purple-300/90 h-5">
              {getStatusText(progress)}
            </p>
          </div>
        </div>

        {/* ----------------- BOTTOM-RIGHT COUNTING DISPLAY ----------------- */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 text-right flex flex-col items-end">
          {/* Header Tag */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
              {isDone ? "COMPLETE" : "LOADING..."}
            </span>
          </div>

          {/* Big Cyber Numerical Counter */}
          <div className="flex items-baseline justify-end gap-1">
            <span className="font-unbounded font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
              {progress.toString().padStart(2, "0")}
            </span>
            <span className="font-unbounded font-bold text-xl sm:text-3xl md:text-4xl text-pink-400/90 drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
              %
            </span>
          </div>

          {/* Progress Bar under the Counter */}
          <div className="w-36 sm:w-56 md:w-64 h-1.5 sm:h-2 bg-purple-950/80 rounded-full overflow-hidden border border-purple-500/30 mt-2 relative p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-pink-400 rounded-full shadow-[0_0_12px_rgba(216,70,239,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>

          {/* Tiny Status indicator */}
          <p className="mt-1 text-[9px] sm:text-[10px] font-mono text-purple-400/70 tracking-wider">
            {progress === 100 ? "UNLOCKED // OPENING" : `BUFFERING [${progress}/100]`}
          </p>
        </div>
      </motion.div>

      {/* Burst light flare when 100% hits */}
      {isDone && !isOpening && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-[70px] z-30 pointer-events-none"
        />
      )}
    </div>
  );
};

export default Loader;
