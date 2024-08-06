import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((global) => global.user);
  console.log(state);
  return <div>hello</div>;
};

export default Home;
