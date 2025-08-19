// Centralized framer-motion animation helpers
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const stagger = { show: { transition: { staggerChildren: 0.08 } } };


