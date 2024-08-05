import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<Layout />} /> */}
    //     <Route element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    <Login />
  );
}

export default App;
