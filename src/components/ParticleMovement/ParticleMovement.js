import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useSpring, animated } from 'react-spring';

const ParticleMovement = ({ children, distance, angle }) => {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;
  const angleInRads = convertDegreesToRadians(angle);
  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const style1 = useSpring({
    // transform: `translate(${x}px, ${y}px)`,
    from: {
      transform: `translate(0px, 0px) scale(0)`,
      opacity: 10,
    },
    to: {
      transform: `translate(${x}px, ${y}px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 10,
      friction: 5,
    }
  });

  return (
    <animated.div
      style={{
        height: '10px',
        width: '10px',
        zIndex: 4,
        ...style1,
      }}
    >
      {children}
    </animated.div>
  )
};

export default ParticleMovement;