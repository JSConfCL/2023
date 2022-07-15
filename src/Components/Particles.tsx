import { lazy, Suspense } from "react";
import { css, Global } from "@emotion/react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import config from "./sections/config";

const ParticleComponent = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <>
      <Global
        styles={[
          css`
            #tsparticles-container {
              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              padding: 0px;
              margin: 0px;
              z-index: 0;
            }
          `,
        ]}
      />
      <Particles
        id="tsparticles-container"
        loaded={async (container) => {}}
        init={particlesInit}
        options={config}
      />
    </>
  );
};

export default ParticleComponent;
