import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/login/Login";
import store from "./redux/store";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
