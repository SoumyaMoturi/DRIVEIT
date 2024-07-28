// src/components/Signup.js
import React, { useState } from "react";
import GoogleAuth from "./googleAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSignup = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post("http://localhost:5000/signup", {
  //         email,
  //         password,
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Signup error:", error);
  //     }
  //   };

  return (
    <div>
      <form
        onSubmit={() => {
          console.log("sign up");
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
        <button type="submit">Sign Up</button>
      </form>
      <GoogleAuth />
    </div>
  );
};

export default Signup;
