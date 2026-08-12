import React from "react";
import UserCard from "./UserCard";

const DisplayUsers = ({ userData }) => {
  return (
    <div className="user-list-box">
      <h2>Number Of Users : {userData.length}</h2>

      {userData.map((user) => (
        <div className="user-card" key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
