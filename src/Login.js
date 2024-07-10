import React from "react";

const Login = () => {
    const handleLogin = () => {
      // Redirect to the Python OAuth endpoint
      window.location.href = 'https://famous-crossing-420503.wl.r.appspot.com/login'; // Update with your actual URL
    };

    return (
      <button onClick={handleLogin}>Login with Google</button>
    );
  };
export default Login;