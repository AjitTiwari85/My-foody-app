import React, { useState } from "react";
import baneer from "../images/bn.png";
import google from "../images/go-removebg-preview.png";
import dots from "../images/do-removebg-preview.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-[26.975rem] h-[57.75rem] rounded-[3.125rem]">
      <div>
        <img src={baneer} className="rounded-t-[3.125rem]"></img>
      </div>
      <div className="px-[2.5rem] py-[1rem] tracking-wide">
        <div className="flex flex-col items-center justify-center text-[1.6rem] font-semibold">
          <p>India's #1 Food Delivery</p>
          <p>and dining App</p>
        </div>
        <div className="my-[1.5rem] flex justify-between text-[.9rem]">
          <div className="border-t-[2px] w-[25%] mt-[12px]"></div>
          <div className="w-[40%] flex justify-center text-[1rem] font-semibold">
            Login or Signup
          </div>
          <div className="border-t-[2px] w-[25%] mt-[12px]"></div>
        </div>

        <div className="flex justify-center w-[100%]">
          <form className="w-[100%]">
            <PhoneInput
              inputStyle={{ width: "100%" }}
              country="in"
              onChange={(e) => {
                setPhoneNumber(e);
                console.log(e);
              }}
            ></PhoneInput>
            <button
              onClick={() => navigate("/otp")}
              className="w-[100%] bg-[#E25757] mt-[1.5rem] h-[2.5rem] text-[white] font-semibold rounded-[.5rem]"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="my-[1.5rem] flex justify-between text-[.9rem]">
          <div className="border-t-[2px] w-[40%] mt-[12px]"></div>
          <div className="w-[20%] flex justify-center text-[1rem] font-semibold">
            Or
          </div>
          <div className="border-t-[2px] w-[40%] mt-[12px]"></div>
        </div>

        <div className="flex my-[2.5rem] justify-center gap-[1rem]">
          <div className="w-[3.5rem] h-[3.5rem] rounded-full border-[1px] flex justify-center items-center">
            <img src={google} className="w-[2.5rem] h-[2.5rem]"></img>
          </div>
          <div className="w-[3.5rem] h-[3.5rem] rounded-full border-[1px] flex justify-center items-center">
            <img src={dots} className="w-[1rem] h-[1rem]"></img>
          </div>
        </div>

        <div className="flex flex-col text-[.85rem] items-center w-[100%]">
          <p>By Continuing you agree to our</p>
          <p className="flex justify-around w-[100%]">
            <span className="underline underline-offset-4">
              Terms of Services
            </span>
            <span className="underline underline-offset-4">Privacy Policy</span>
            <span className="underline underline-offset-4">Content Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
