export const fadeIn = (direction = 'up', delay = 0) => {
    const variants = {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    };
    return variants;
  };
  