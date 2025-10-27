import React from 'react';
import './ProfileStats.css';

function ProfileStats({ followers, posts, likes }) {
  return (
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-number">{followers}</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat">
        <span className="stat-number">{posts}</span>
        <span className="stat-label">Posts</span>
      </div>
      <div className="stat">
        <span className="stat-number">{likes}</span>
        <span className="stat-label">Likes</span>
      </div>
    </div>
  );
}

export default ProfileStats;
