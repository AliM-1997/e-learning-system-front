import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((global) => global.course);
  console.log("tessting from home", state);
  return <div>hello</div>;
};

export default Home;
