import { memo } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

const Stats = memo(() => {
  return (
    <div className="hover:scale-150 transform transition-transform duration-300">
      
        <div className="flex flex-row items-start justify-center py-0 pr-[535.699951171875px] pl-[535.7999877929688px] gap-[135px] text-center text-[107.21px] text-gray-100 font-inter mt-[100px]">
          <div className="w-[171.92px] h-[173.98px] flex flex-col items-center justify-start gap-[4px]">
            <div className="flex flex-row items-baseline justify-start gap-[1.45px]">
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[118.8px] bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text inline-block max-h-[118.80000305175781px]">
                  92
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-17xl">
                <div className="relative leading-[38.88px] bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text inline-block max-h-[38.880001068115234px]">
                  %
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start text-[15.5px]">
              <div className="relative leading-[25.6px] font-medium">
                <p className="m-0">Average response</p>
                <p className="m-0">accuracy</p>
              </div>
            </div>
          </div>
          <div className="w-[227.58px] h-[148.39px] flex flex-col items-center justify-start gap-[4px] text-[96.25px]">
            <div className="flex flex-row items-baseline justify-start gap-[1.29px]">
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[118.8px] bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text inline-block max-h-[118.80000305175781px]">
                  +88
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-17xl">
                <div className="relative leading-[38.88px] bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text inline-block max-h-[38.880001068115234px]">
                  %
                </div>
              </div>
            </div>
            <div className="relative text-[15.5px] leading-[25.6px] font-medium">
              Agent productivity
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[3.8px] text-[106.78px]">
            <div className="relative leading-[118.8px] bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text">
              3x
            </div>
            <div className="flex flex-col items-center justify-start text-[15.5px]">
              <div className="relative leading-[25.6px] font-medium">
                <p className="m-0 w-[200px]">Reduce resolution times for general questions</p>
                <p className="m-0"></p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
});

export default Stats;
