import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      console.log(userInfo.data);
      // Here, you can send the userInfo to your backend for further processing.
    },
    onFailure: (error) => {
      console.log("Login Failed:", error);
    },
  });

  return <button onClick={() => login()}>Login with Google</button>;
};

export default GoogleAuth;
