import { css, Global } from '@emotion/react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import config from './sections/config';

interface ParticleProps {
	id?: string;
	backgroundColor?: string;
}

const ParticleComponent = ({
	id = 'tsparticles-container',
	backgroundColor = '#f0e040d4',
}: ParticleProps) => {
	const particlesInit = async (main: Engine) => {
		await loadFull(main);
	};
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
