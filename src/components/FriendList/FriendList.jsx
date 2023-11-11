import React from 'react';
import './FriendList.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />
      })}
    </ul>
  )
};
