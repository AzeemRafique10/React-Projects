import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className=" text-center mt-10 ">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 rounded border-amber-200"
      />{" "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 rounded border-amber-200"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-amber-500 m-1 rounded p-1"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
