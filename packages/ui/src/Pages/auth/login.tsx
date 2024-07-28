// src/components/Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post("http://localhost:5000/login", {
  //         email,
  //         password,
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Login error:", error);
  //     }
  //   };

  return (
    <form
      onSubmit={() => {
        console.log("handle login");
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
