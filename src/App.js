import "./styles.css";
import React, { useState } from "react";

import AddUser from "./AddUser";
import DisplayUsers from "./DisplayUsers";

export default function App() {
  const [UserDetails, setUserDetails] = useState([
    {
      id: 1,
      username: "Safeeda",
      age: "22",
      gender: "female",
    },
  ]);

  return (
    <div>
      <h1>My Friends Directory</h1>

      <AddUser setUserDetails={setUserDetails} />

      <DisplayUsers userData={UserDetails} />
    </div>
  );
}
