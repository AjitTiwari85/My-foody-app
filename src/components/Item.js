import React from "react";
import "../css/Item.css";
import muton from "../images/biryani-removebg-preview.png";
import sub from "../images/min-removebg-preview.png";
import add from "../images/add-removebg-preview.png";
import ryta from "../images/ry-removebg-preview.png";
import pner from "../images/pner-removebg-preview.png";
import salad from "../images/salad-removebg-preview.png";

function Item() {
  return (
    <div className="w-[24.275] h-[58.2rem] item rounded-[3.125rem]">
      <div className="h-[45%]  flex justify-center items-center">
        <img src={muton} className="w-[70%]"></img>
      </div>
      <div className="h-[55%] bg-[white] rounded-tl-[3.125rem] p-[2rem] ">
        <div className="flex justify-between items-center">
          <div className="bg-[#5e4a9a] rounded-[1.25rem] w-[4rem] h-[1.75rem flex justify-center items-center] text-[white]">
            ✨4.8
          </div>
          <div className="flex items-center text-[#1d2c28] text-[1.5625rem] font-semibold">
            ₹299
          </div>
        </div>

        <div className="flex justify-between my-[1rem] items-center">
          <div className="text-[1.5625rem] font-semibold text-[#585252]">
            chicken Biryani
          </div>
          <div className="flex justify-between w-[25%] items-center">
            <div>
              <img src={sub} className="h-[1.4rem]"></img>
            </div>
            <span className="font-semibold">1</span>
            <div>
              <img src={add} className="h-[1.4rem]"></img>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#a78686] text-[1rem]">
            Chicken biryani is the epitome of Indian cuisine, with layers of
            beautifully spiced chicken and tender grains of rice topped with
            coriander and fried onions.
          </p>
        </div>

        <div className="text-[1.5625rem] font-semibold text-[black] my-[1rem]">
          Add ons
        </div>

        <div className="flex justify-between">
          <div className="w-[6rem] h-[5rem] bg-[#D9D9D9] rounded-[1.25rem] flex justify-center items-center">
            <img src={ryta}></img>
          </div>

          <div className="w-[6rem] h-[5rem] bg-[#D9D9D9] rounded-[1.25rem] flex justify-center items-center">
            <img src={pner}></img>
          </div>

          <div className="w-[6rem] h-[5rem] bg-[#D9D9D9] rounded-[1.25rem] flex justify-center items-center">
            <img src={salad}></img>
          </div>
        </div>

        <div className="flex justify-center my-[1rem]">
          <button className="w-[16rem] bg-[#5F45AD] text-[white] font-semibold text-[1.75rem]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
