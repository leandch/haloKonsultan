import React from 'react';
import IsMe from './isMe';
import Other from './Other';

const ChatItem = ({isMe, text, date, image}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={image} />;
};

export default ChatItem;
