import React from "react";
import dp from "../images/dp.png";
import "../css/Menu.css";
import sweets from "../images/sweets-removebg-preview.png";
import biryani from "../images/biryani-removebg-preview.png";
import pizza from "../images/pizza-removebg-preview.png";
import burger from "../images/burger-removebg-preview.png";
import coke from "../images/cola-removebg-preview.png";
import Mutton from "../images/muton2-removebg-preview.png";
import home from "../images/h-removebg-preview.png";
import serch from "../images/p2-removebg-preview.png";
import cart from "../images/c2-removebg-preview.png";
import profile from "../images/p22-removebg-preview.png";
import icon from "../images/icons8-add-50.png";

function Menu() {
  return (
    <div className="w-[24.275] h-[52.75rem] px-[1.96rem] py-[1.5rem]">
      <div className="flex justify-between h-[3.125rem] items-center text-[2.25rem] font-semibold">
        <div>Menu</div>
        <div className="w-[3.25rem] h-[100%] rounded-full">
          <img src={dp} className="w-[100%] h-[100%] rounded-[50%]"></img>
        </div>
      </div>
      <div className="h-[2.625rem] my-[2rem] parent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 50 50"
          className="child"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input
          placeholder="Search"
          type="text"
          className="bg-[#D9D9D9] w-[100%] h-[100%] rounded-[1.875rem] pl-[10%]"
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="w-[5rem] bg-[#D9D9D9] h-[5rem] flex justify-center items-center rounded-[1.25rem]">
          <img src={biryani} className="w-[100%] h-[90%]"></img>
        </div>
        <div className="w-[5rem] bg-[#D9D9D9]  h-[5rem] flex justify-center items-center rounded-[1.25rem]">
          <img src={sweets} className="w-[100%] h-[90%]"></img>
        </div>
        <div className="w-[5rem] bg-[#D9D9D9]  h-[5rem] flex justify-center items-center rounded-[1.25rem]">
          <img src={burger} className="w-[100%] h-[90%]"></img>
        </div>
        <div className="w-[5rem] bg-[#D9D9D9]  h-[5rem] flex justify-center items-center rounded-[1.25rem]">
          <img src={pizza} className="w-[100%] h-[90%]"></img>
        </div>
      </div>
      <div className="flex mt-[1rem] justify-between h-[0.975rem] font-semibold">
        <div className="w-[5rem] text-center">Biryani</div>
        <div className="w-[5rem] text-center">Sweets</div>
        <div className="w-[5rem] text-center">Burger</div>
        <div className="w-[5rem] text-center">Pizza</div>
      </div>
      <div className="text-[1.5625rem] font-semibold my-[1rem] text-[#4c4242]">
        Promotions
      </div>
      <div className=" h-[8.5rem] menu rounded-[1.25rem] p-[1rem] text-[white] relative">
        <div className="mb-[0.5rem] text-[1.375rem] font-semibold">
          Today's Offer
        </div>
        <div className="text-[1.56rem] font-semibold">Coca Cola bottle</div>
        <span>free on orders above 199*</span>
        <div>
          <img src={coke} className="coke"></img>
        </div>
      </div>
      <div className="font-semibold text-[1.5625rem] my-[1rem] text-[#4c4242]">
        Favourites
      </div>
      <div className="flex justify-between">
        <div className="w-[9.375rem] h-[10.375rem] bg-[#D9D9D9] rounded-[1.25rem] p-[1rem]">
          <div className="h-[50%]">
            <img src={Mutton}></img>
          </div>
          <div className="h-[50%] flex flex-col pt-[.75rem] font-semibold justify-between">
            <div>Chicken Biryani</div>
            <div className="flex justify-between">
              <div>₹299</div>
              <div className="flex items-center">
                <img src={icon} className="h-[1.625rem] mt-[0.1rem]"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[9.375rem] h-[10.375rem] bg-[#D9D9D9] rounded-[1.25rem] p-[1rem]">
          <div className="h-[50%]">
            <img src={Mutton}></img>
          </div>
          <div className="h-[50%] flex flex-col pt-[.75rem] font-semibold justify-between">
            <div>Mutton Biryani</div>
            <div className="flex justify-between">
              <div>₹399</div>
              <div className="flex items-center">
                <img src={icon} className="h-[1.625rem] mt-[0.1rem]"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-[4rem] items-center">
        <div>
          <img src={home} className="h-[2.5rem] "></img>
        </div>
        <div>
          <img src={serch} className="h-[2.5rem] "></img>
        </div>
        <div>
          <img src={cart} className="h-[2.5rem] "></img>
        </div>
        <div>
          <img src={profile} className="h-[2.5rem] "></img>
        </div>
      </div>
    </div>
  );
}

export default Menu;
