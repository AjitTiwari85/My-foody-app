import React from "react";
import "../css/Home.css";
import imgr from "../images/fst-removebg-preview.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home ]">
      <div className="w-[100%]">
        <div className="w-[16.125rem] h-[16.125rem] mx-[auto] bg-[white] rounded-full flex justify-center items-center mt-20">
          <img src={imgr}></img>
        </div>
      </div>
      <div className="text-[2.625rem] font-semibold  w-[55rem] mx-20 my-20">
        <h1 className="w-[31%] my-5 text-center text-[white]">
          Enjoy Your Food
        </h1>
      </div>
      <div className="my-20 flex justify-center">
        <button
          onClick={() => navigate("/menu")}
          className="w-[14rem] h-[5rem] bg-[white] text-[#492895] font-semibold rounded-2xl text-[1.75rem] boder-[0]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
