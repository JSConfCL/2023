import { transparentize } from "polished";

import { jsconfTheme } from "../../../styles/theme";

// https://vincentgarreau.com/particles.js/#default
// https://codepen.io/fforres/pen/gOvLQpQ

const config = {
  background: {
    color: {
      value: jsconfTheme.colors.jsconfYellow,
    },
    opacity: 0,
  },
  particles: {
    number: {
      value: 92,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: transparentize(0.5, jsconfTheme.colors.jsconfBlack),
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 4,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 400,
        height: 100,
      },
    },
    opacity: {
      value: 0.12626362266116362,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.13805312609122866,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 4.795204795204795,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: jsconfTheme.colors.jsconfBlack,
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 239.76023976023976,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 31.96803196803197,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const config2 = {
  background: {
    color: {
      value: "#000",
    },
    opacity: 1,
  },
  particles: {
    number: {
      value: 92,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#34a853", "#4285f4", "#ea4335", "#f9ab00"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#c8c8c8",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  fullScreen: false,
};

export const makeConfig = ({
  backgroundColor = jsconfTheme.colors.jsconfYellow,
  color = [transparentize(0.5, jsconfTheme.colors.jsconfBlack)],
  shape = "polygon",
  configuration = "jsconf",
}): any => {
  const base =
    {
      jsconf: config,
      sponsors: config2,
    }[configuration] ?? config;
  const configs = { ...base } as any;

  configs.background.color.value = backgroundColor;
  configs.particles.color.value = color;
  configs.particles.shape.type = shape;
  configs.fullScreen = false;
  return configs;
};
