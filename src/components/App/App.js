import React, { useReducer} from 'react';
import styled from 'styled-components';
import {format} from 'date-fns';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

function reducer(state, action) {
  switch(action.type) {
    case 'toggle-like': {
      const liked = state.isLiked;
      return {
        ...state,
        isLiked: !liked,
        numberOfLikes: liked ? state.numberOfLikes - 1 : state.numberOfLikes + 1,
      };
    }
    case 'toggle-reTweet': {
      const tweeted = state.isRetweeted;
      return {
        ...state,
        isRetweeted: !tweeted,
        numberOfRetweets: tweeted ? state.numberOfRetweets - 1 : state.numberOfRetweets + 1,
      }
    }
    default:
      throw new Error(`Action ${action.type} unknown`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    numberOfLikes: 666,
    numberOfRetweets: 2,
    isLiked: false,
    isRetweeted: false,
  });

  const toggleLike = () => dispatch({ type: 'toggle-like' });
  const toggleReTweet = () => dispatch({ type: 'toggle-reTweet' });


  const date = format(new Date(), "h:mm a · MMM Io, Y");
  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={date}
        numOfRetweets = {state.numberOfRetweets}
        numOfLikes = {state.numberOfLikes}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleReTweet}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
