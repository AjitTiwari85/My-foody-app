import React, { useState } from "react";
import OtpInput from "react-otp-input";
import arrow from "../images/arrow1-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-[26.975rem] h-[57.75rem] rounded-[3.125rem] p-[2rem] flex flex-col">
      <div>
        <div className="flex h-[3rem] justify-start items-center text-[1rem] gap-[1rem]">
          <div>
            <img src={arrow} className="h-[2rem]"></img>
          </div>
          <div className="font-medium">OTP Verification</div>
          <div className="flex-grow flex justify-end font-medium">Skip</div>
        </div>

        <div className="w-[100%] flex justify-center my-[1.5rem]">
          <p className="w-[75%] text-center ">
            We have sent a Verification code to
            <span className="font-semibold"> +91-98765*****</span>
          </p>
        </div>

        <div>
          <form className="w-[100%] flex flex-col items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                width: "2.5rem",
                height: "2.5rem",
                border: "1px solid black",
              }}
              renderSeparator={<span className="w-[3px]"></span>}
              renderInput={(props) => <input {...props} />}
            />
            <button
              onClick={() => navigate("/menu")}
              type="submit"
              className="mt-[1.5rem] underline underline-offset-4 text-[#BB1D1D] font-semibold"
            >
              Verify
            </button>
          </form>
        </div>

        <div className="my-[1.5rem] flex justify-center text-[.875rem] font-medium">
          <p>
            Didn't get the OTP?
            <span className="text-[.75rem] font-medium text-[#BB1D1D] ">
              Resend SMS
            </span>
          </p>
        </div>

        <div className="flex my-[1.5rem] justify-center text-[.75rem] text-[#BB1D1D]">
          <p>Try More Options</p>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-end items-center text-[#BB1D1D] mb-[2rem]">
        <p>Go back to login methods</p>
      </div>
    </div>
  );
}

export default Otp;
