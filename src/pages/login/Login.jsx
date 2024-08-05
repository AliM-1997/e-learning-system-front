import React, { useState } from "react";
import Input from "../../components/input/input";
import "./Login.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleLogin = () => {
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (email === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }
  };

  return (
    <div className="inner">
      <h3>Login</h3>
      <Input
        name="Email"
        type="email"
        placeholder="Example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="Password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text={"Login"} onClick={handleLogin}></Button>
    </div>
  );
};

export default Login;
