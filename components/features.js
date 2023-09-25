import { memo } from "react";
import Card from "./card";

const Features = memo(() => {
  return (
    <div className="flex flex-col items-center justify-start py-[101px] px-[296px] text-center text-[41.25px] text-gray-100 font-inter border-[1px] border-solid border-white">
      <div className="flex flex-col items-start justify-start max-w-[640px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-center justify-start py-px pr-[230.40499877929688px] pl-[230.59500122070312px] border-[1px] border-solid border-white">
            <div className="relative leading-[56px] font-extrabold">
              Features
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-0 pb-10 pr-[45.40998840332031px] pl-[45.59001159667969px] text-[17.58px]">
            <div className="relative leading-[30px] font-medium">
              Automate customer service and bring its efficiency to a new level
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-6 px-6 pb-0 box-border max-w-[1328px] text-left text-[22.13px]">
        <div className="relative w-[1280px] h-[1065px]">
          <Card />
        </div>
      </div>
    </div>
  );
});

export default Features;
