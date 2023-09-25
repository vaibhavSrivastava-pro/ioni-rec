import { memo } from "react";

const JoinSectionSecond = memo(() => {
  return (
    <>
    <img
      className="absolute my-0 mx-[!important] h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-[1920px] overflow-hidden max-h-full object-cover z-[0] mb-[100]"
      alt=""
      src="/649d8427f88aae1c04b14e52-ioni-bg202png@2x.png"
    />
    <div className="flex flex-col items-start justify-start mb-[500px] px-6 box-border max-w-[1328px] z-[1]">
              <div className="flex flex-row items-start justify-start pr-0 pl-[46px] gap-[438px]">
                <div className="flex flex-col items-start justify-start pb-[500px] px-0">
                  <b className="relative leading-[56px] whitespace-nowrap">
                    Start your AI journey with us!
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pr-[28.25px] pl-0">
                  <button className="cursor-pointer py-[23px] px-[39px] bg-gray-100 rounded-sm flex flex-row items-start justify-start transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-600">
                    <b className="relative text-[17.58px] font-inter text-white text-center whitespace-nowrap">
                      Get started
                    </b>
                  </button>
                </div>
              </div>
            </div>
    </>
  );
});

export default JoinSectionSecond;
