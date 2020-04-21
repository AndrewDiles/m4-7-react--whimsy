import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import ConfettiPiece from '../ConfettiPiece';
import PoppingCircle from '../PoppingCircle';
import ScaleIn from '../ScaleIn';



const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;
  let numArray = []; // range() method not working, so I make my own
  for (let i = 0; i<15; i++) {
    numArray.push(i);
  }
  return (
    // <Wrapper style={{ width: size, height: size }}>
    //   {isLiked && <PoppingCircle size={size} color="#E790F7" />}
    //   <Heart width={heartSize} isToggled={isLiked} />
    // </Wrapper>

    <Wrapper>
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      {isLiked &&
        numArray.map(i => (
          <ConfettiPiece 
            key = {i} 
            // angle={360 * (i / 12)}
            angle = {360*Math.random()}
            // distance = {20}
            distance = {(15 * Math.random())+ 15}
            color = {PARTICLE_COLORS[Math.floor(i/3)]}
          />
        ))
      }
      {isLiked ? (
        <>
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        </>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
    </Wrapper>
  );
};



const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
