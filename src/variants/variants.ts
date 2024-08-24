import { Variants } from "framer-motion";

export const activeLeft: Variants = {
  onScreen: {
    transform: "translate(0px)",
    opacity: 1,
  },

  offScreen: {
    transform: "translate(-300px)",
    opacity: 0,
  },
};

export const activeRight: Variants = {
  onScreen: {
    transform: "translate(0px)",
    opacity: 1,
  },

  offScreen: {
    transform: "translate(300px)",
    opacity: 0,
  },
};

export const variantPicture: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translate(200px)",
  },
  onscreen: {
    transform: "translate(00px)",

    opacity: 1,
  },
};

export const variantTextTitle: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translate(-200px)",
  },
  onscreen: {
    transform: "translate(00px)",

    opacity: 1,

    transition: {
      delay: 0.2,
    },
  },
};

export const variantText: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translate(-200px)",
  },
  onscreen: {
    transform: "translate(00px)",

    opacity: 1,

    transition: {
      delay: 0.4,
    },
  },
};
