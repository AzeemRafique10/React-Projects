import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-center"> Please Login </div>;

  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl">
        Welcome:{" "}
        <span className="capitalize text-amber-200">{user.username}</span>
      </h1>
    </div>
  );
}

export default Profile;
