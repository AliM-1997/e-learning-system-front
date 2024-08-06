import { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { authRemote } from "../../data_source/remote/auth_remote";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (name === "" || username === "" || email === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }
    const data = await authRemote.signup(name, username, email, password);
    if (data) {
      navigate("/login");
    }
  };
  return (
    <div className="page flex column center">
      <div className="flex column center white-bg rounded auth-box">
        <h3>Signup</h3>
        <Input
          name="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="username"
          type="text"
          placeholder="@username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="Email"
          type="email"
          placeholder="Example@email.com"
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
        <Button text={"Signup"} onMouseClick={handleSignup}></Button>
      </div>
    </div>
  );
};

export default Signup;
