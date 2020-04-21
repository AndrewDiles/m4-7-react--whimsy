import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({ size, color }) => {
return (
  <Wrapper
  style={{ width: size, height: size, background: color }}
  >
  </Wrapper>
)

}
const growCircle = keyframes`
  from {
    transform: scale(0.3);
  }
  to {
    transform: scale(1);
  }
`;
const fade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity:  1;
  }
  90% {
    opacity:  1;
  }
  100% {
    opacity: 0;
  }
`;
const Wrapper = styled.div`
  opacity: 0;
  display: block;
  position: absolute;
  border-radius: 50%;
  @media(prefers-reduced-motion: no-preference) {
    animation: ${growCircle} 300ms ease-in,
    ${fade} 400ms ease-in;
  }
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

export default PoppingCircle;
