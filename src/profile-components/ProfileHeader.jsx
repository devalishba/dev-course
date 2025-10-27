import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({ image, name }) {
  return (
    <div className="profile-header">
      <img src={image} alt="User" className="profile-image" />
      <h2 className="profile-name">{name}</h2>
    </div>
  );
}

export default ProfileHeader;
