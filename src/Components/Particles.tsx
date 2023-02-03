import { css, Global } from "@emotion/react";
import { transparentize } from "polished";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

import { jsconfTheme } from "../../styles/theme";

import { makeConfig } from "./sections/config";

interface ParticleProps {
  id?: string;
  backgroundColor?: string;
  color?: string | string[];
  shape?: string;
  configuration?: string;
  fullScreen?: boolean;
}

const ParticleComponent = ({
  id = "tsparticles-container",
  backgroundColor = jsconfTheme.colors.jsconfYellow,
  color = [transparentize(0.5, jsconfTheme.colors.jsconfBlack)],
  shape = "polygon",
  configuration = "jsconf",
  fullScreen = false,
}: ParticleProps) => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  const finalColor = typeof color === "string" ? [color] : color;

  const config = makeConfig({
    configuration,
    backgroundColor,
    color: finalColor,
    shape,
    fullScreen,
  });

  return (
    <>
      <Global
        styles={[
          css`
            #${id} {
              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              padding: 0px;
              margin: 0px;
              z-index: 0;
              background-color: ${backgroundColor};
            }
            #${id} canvas {
              background-color: ${backgroundColor} !important;
            }
          `,
        ]}
      />
      <Particles
        id={id}
        loaded={async (_) => {}}
        init={particlesInit}
        options={config}
      />
    </>
  );
};

export default ParticleComponent;
