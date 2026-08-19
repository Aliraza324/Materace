// Animation variants and presets using motion

export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => {
  return {
    hidden: {
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay,
        duration,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const heroTextVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

export const badgeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      delay: 0.1,
    },
  },
};

export const cardVariant = (index = 0) => ({
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 110,
      delay: index * 0.12,
    },
  },
});

export const navVariant = {
  hidden: { opacity: 0, y: -25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

export const btnHover = {
  scale: 1.04,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

export const btnTap = {
  scale: 0.96,
};
