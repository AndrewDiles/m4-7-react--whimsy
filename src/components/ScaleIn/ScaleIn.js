import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useSpring, animated } from 'react-spring';

const ScaleIn = ({ children }) => {

  const style = useSpring({
    transform: 'scale(1.1)',
    from: {
      transform: 'scale(0)',
    },
    config: {
      tension: 250,
      friction: 10,
    },
  });

  return (
    <animated.div
      style={{
        zIndex: 2,
        // background: 'red',
        // width: 50,
        // height: 50,
        ...style,
      }}
    >
      {children}
    </animated.div>
  )
};

// const scale = keyframes`
//   0% {
//     scale: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const Wrapper = styled.div`
//   z-index: 2;
//   @media(prefers-reduced-motion: no-preference) {
//     animation: ${scale} 300ms ease-in,
//   }
//   @media (prefers-reduced-motion: reduce) {
//     display: none;
//   }
// `;

export default ScaleIn;
