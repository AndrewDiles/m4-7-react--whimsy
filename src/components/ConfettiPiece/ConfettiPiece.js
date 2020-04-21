import React from 'react';
import styled, { keyframes } from 'styled-components';

import ParticleMovement from '../ParticleMovement';

const ConfettiPiece = ({ angle, distance, color }) => {

  return (
    <CenteredWithinParent>
      <ParticleMovement
        angle={angle}
        distance={distance}
      >
        <Confetti
        color = {color}
          // style={{
            
          //   backgroundColor: {color},

          // }}
        >
        </Confetti>
      </ParticleMovement>
    </CenteredWithinParent>
  )
};

export default ConfettiPiece;

const CenteredWithinParent = styled.div`
  z-index: 4;
  position: absolute;
  /* left: 20px;
  top: 20px; */
`
const Confetti = styled.div`
  z-index: 4;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color}
`
