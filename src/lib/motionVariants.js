// Reusable motion variants for the portfolio

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren, delayChildren }
  }
});

export const slideIn = (direction = 'left', delay = 0) => ({
  hidden:  {
    opacity: 0,
    x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
  },
  visible: {
    opacity: 1, x: 0, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
  }
});

export const hoverLift = {
  rest:  { y: 0,   boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 60px rgba(0,212,170,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0,212,170,0.1)',
      '0 0 40px rgba(0,212,170,0.25)',
      '0 0 20px rgba(0,212,170,0.1)',
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
  }
};
