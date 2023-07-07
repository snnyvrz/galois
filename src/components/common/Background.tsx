import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { isMobile } from 'react-device-detect';

export default () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000000',
          },
          opacity: 0.2,
        },
        fullScreen: { zIndex: -1 },
        particles: {
          color: {
            value: '#fff',
          },
          opacity: {
            value: 0.5,
          },
          number: {
            max: isMobile ? 20 : 100,
          },
          links: {
            color: {
              value: '#fff',
            },
            opacity: 0.2,
          },
        },
        fpsLimit: 120,
        preset: 'links',
        detectRetina: true,
      }}
    />
  );
};
