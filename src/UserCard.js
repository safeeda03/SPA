import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      {/* Avatar */}
      <div
        className={
          user.gender === "male" ? "avatar avatar-male" : "avatar avatar-female"
        }
      >
        <div className="avatar-head"></div>
        <div className="avatar-body"></div>
      </div>

      {/* User information */}
      <div className="user-details">
        <h3>{user.username}</h3>

        <h6>
          {user.age} <span>({user.gender})</span>
        </h6>
      </div>
    </div>
  );
};

export default UserCard;
