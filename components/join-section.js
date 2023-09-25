import { memo } from "react";

const JoinSection = memo(() => {
  return (
    <div className="flex flex-col items-center justify-start py-[60px] px-[610px] text-center text-[28.24px] text-gray-300 font-inter">
      <div className="flex flex-col items-start justify-start max-w-[700px]">
        <div className="relative w-[700px] h-[176.64px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-center justify-start py-0 pr-[49.90000915527344px] pl-[50.09999084472656px] box-border">
            <div className="relative leading-[36.66px] font-extrabold inline-block max-h-[36.65999984741211px]">
              Join now and elevate your business with AI
            </div>
          </div>
          <div className="absolute w-full top-[52.66px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-0 pb-5 pr-[162.39500427246094px] pl-[162.60499572753906px] box-border text-mid-3 text-gray-100">
            <div className="relative leading-[30px] font-medium">
              Unlock Unlimited Potential with Our Free Trial
            </div>
          </div>
          <button className="cursor-pointer py-[27px] px-[39px] bg-gray-100 absolute top-[102.66px] left-[calc(50%_-_91.87px)] rounded-sm flex flex-row items-start justify-center transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-100 hover:scale-105 hover:animate-pulse">
            <b className="relative text-[17.16px] leading-[20px] font-inter text-white text-center">
              Free Trial
            </b>
          </button>
        </div>
      </div>
    </div>
  );
});

export default JoinSection;
