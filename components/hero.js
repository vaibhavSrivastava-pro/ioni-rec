import { memo } from "react";

const Hero = memo(() => {
  return (
    <div className="flex flex-col items-center justify-start py-0 px-[304px] z-[0] text-left text-4xs text-tomato font-inter">
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border max-w-[1312px]">
        <div className="flex flex-row items-center justify-start gap-[80px]">
          <div className="w-[616px] h-[432.03px] flex flex-col items-center justify-start">
          
            <div className="flex flex-row items-start justify-start py-0 pr-[102px] pl-0 gap-[14px]">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5">
              
                <div className="flex flex-col items-start justify-start ">
                  
                  <div className="flex flex-row items-center justify-start cursor-pointer">
                  
                    <div className="flex flex-row items-center justify-center max-w-[250px]">
                      <div className="w-[250px] h-[54px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <div className="relative w-[249px] h-[53px]">

                          <img
                            className="absolute h-[101.89%] w-[100.4%] top-[-0.94%] right-[-0.2%] bottom-[-0.94%] left-[-0.2%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                          <b className="absolute top-[19.81%] left-[21.08%]">
                            PRODUCT HUNT
                          </b>
                          <b className="absolute top-[44.34%] left-[20.68%] text-base">
                            #1 Product of the Day
                          </b>
                          <img
                            className="absolute h-[52.83%] w-[8.43%] top-[23.58%] right-[84.94%] bottom-[23.58%] left-[6.63%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/group.svg"
                          />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
             
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-center max-w-[250px]">
                      <div className="w-[250px] h-[54px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <div className="relative w-[249px] h-[53px]">
                          <img
                            className="absolute h-[101.89%] w-[100.4%] top-[-0.94%] right-[-0.2%] bottom-[-0.94%] left-[-0.2%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector.svg"
                          />
                          <b className="absolute top-[19.81%] left-[21.08%] text-4xs font-inter text-tomato text-left">
                            PRODUCT HUNT
                          </b>
                          <b className="absolute top-[44.34%] left-[20.68%] text-base font-inter text-tomato text-left">
                            #3 Product of the Week
                          </b>
                          <img
                            className="absolute h-[52.42%] w-[7.13%] top-[23.99%] right-[85.39%] bottom-[23.58%] left-[7.48%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/group1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-0 pr-[51px] pl-0 text-[44.63px]">
              <div className="relative font-extrabold">
                <p className="bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text text-[44.62px] font-inter font-extrabold leading-[56px] break-words mt-1 mb-1">
                  Boost your customer
                </p>
                <p className="bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text text-[44.62px] font-inter font-extrabold leading-[56px] break-words relative mt-1 mb-1">
                  support productivity with
                </p>
                <p className="bg-gradient-to-r from-[#17243d] to-red-700 text-transparent bg-clip-text text-[44.62px] font-inter font-extrabold leading-[56px] break-words mt-1">
                  ChatGPT-4
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-10 pr-1.5 pl-0 text-[17.58px] text-gray-100">
              <div className="relative leading-[30px] font-medium">
                <p className="m-0">
                  Smart chatbot based on the latest AI technology, that talks
                  like a human,
                </p>
                <p className="m-0">and creates CTA for your customers.</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start justify-start py-0 pr-[460px] pl-0">
              <button className="cursor-pointer py-[7px] px-[34px] bg-gray-100 rounded-sm flex flex-col items-start justify-start transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-100 hover:scale-105 hover:animate-pulse">
                <b className="relative text-[17.16px] font-inter text-white text-center">
                  <p className="whitespace-nowrap">Free Trial</p>
                </b>
              </button>
            </div>
            
          </div>
          <div className="flex flex-col items-start justify-center py-0 pr-[100.02001953125px] pl-0">
            <img
              className="relative rounded-2xl w-[515.98px] h-[628.98px] object-cover max-w-[616px]"
              alt=""
              src="/64da0c6df0e5df9da7bab9a1-chatpng@2x.png"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
