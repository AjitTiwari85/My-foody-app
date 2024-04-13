import React from "react";
import dp from "../images/dp.png";
import biryani from "../images/biryani-removebg-preview.png";
import sub from "../images/min-removebg-preview.png";
import add from "../images/add-removebg-preview.png";
import close from "../images/close-removebg-preview.png";
import burger from "../images/burger-removebg-preview.png";
import home from "../images/h-removebg-preview.png";
import serch from "../images/p2-removebg-preview.png";
import cart from "../images/c2-removebg-preview.png";
import profile from "../images/p22-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="w-[24.275] h-[52.75rem] px-[1.96rem] py-[1.5rem]">
      <div className="flex justify-between items-center text-[1.25rem] h-[3.25rem] font-semibold">
        <div>2 items in cart</div>
        <div className="w-[3.25rem] h-[100%] rounded-full">
          <img src={dp} className="w-[100%] h-[100%] rounded-[50%]"></img>
        </div>
      </div>
      <div className="my-[2rem] flex flex-col gap-[1.5rem]">
        <div className="flex justify-between h-[6.625rem] gap-[0.5rem]">
          <div className="w-[40%] bg-[#D9D9D9] rounded-[1.25rem] flex items-center">
            <img src={biryani}></img>
          </div>
          <div className="flex flex-col justify-between w-[40%]">
            <div className="text-[1rem] font-semibold">Chicken biryani</div>
            <div className=" font-semibold">₹299</div>
            <div className="flex justify-between w-[55%] items-center">
              <div>
                <img src={sub} className="h-[1.4rem]"></img>
              </div>
              <span className="font-semibold">1</span>
              <div>
                <img src={add} className="h-[1.4rem]"></img>
              </div>
            </div>
          </div>
          <div className="grow flex justify-end">
            <img src={close} className="h-[1.4rem]"></img>
          </div>
        </div>

        <div className="flex justify-between h-[6.625rem] gap-[0.5rem]">
          <div className="w-[40%] bg-[#D9D9D9] rounded-[1.25rem] flex items-center">
            <img src={burger}></img>
          </div>
          <div className="flex flex-col justify-between w-[40%]">
            <div className="text-[1rem] font-semibold">Burger</div>
            <div className=" font-semibold">₹299</div>
            <div className="flex justify-between w-[55%] items-center">
              <div>
                <img src={sub} className="h-[1.4rem]"></img>
              </div>
              <span className="font-semibold">1</span>
              <div>
                <img src={add} className="h-[1.4rem]"></img>
              </div>
            </div>
          </div>
          <div className="grow flex justify-end">
            <img src={close} className="h-[1.4rem]"></img>
          </div>
        </div>
      </div>
      <div className="text-[1.5625rem] text-[#585252] font-semibold">
        Order Instructions
      </div>
      <div className="my-[0.5rem]">
        <input
          type="text"
          className="w-[100%] bg-[#D9D9D9] min-h-[6rem] rounded-[1.125rem]"
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="text-[1.5625rem] font-semibold">Total:</div>
        <div className="flex">
          <div className="text-[1.5625rem] font-semibold"> ₹</div>
          <div className="text-[1.5625rem] font-semibold text-[#8F00FF]">
            599
          </div>
        </div>
      </div>
      <div className="my-[1rem]">
        <button className="w-[100%] bg-[#5f45AD] text-[white] text-[1.75rem] rounded-[0.625rem]">
          Check Out
        </button>
      </div>

      <div className="flex justify-center my-[3rem]">
        <p className="text-[#908181] font-semibold text-[1.25rem] underline decoration-solid underline-offset-4">
          All rights @ MYfoody
        </p>
      </div>

      <div className="flex justify-around my-[6rem] items-center">
        <div onClick={() => navigate("/home")}>
          <img src={home} className="h-[2.5rem] "></img>
        </div>
        <div onClick={() => navigate("/menu")}>
          <img src={serch} className="h-[2.5rem] "></img>
        </div>
        <div onClick={() => navigate("/cart")}>
          <img src={cart} className="h-[2.5rem] "></img>
        </div>
        <div
        // onClick={() => navigate("/menu")}
        >
          <img src={profile} className="h-[2.5rem] "></img>
        </div>
      </div>
    </div>
  );
}

export default Cart;
