import { memo } from "react";
import Link from "next/link";

const Footer = memo(() => {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-start text-left text-[17.44px] text-white font-inter">
      <div className="flex flex-col items-start justify-start py-0 px-6 box-border max-w-[1328px]">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-[120px] pb-[344.08001708984375px] pr-[41px] pl-0 border-r-[1px] border-solid border-dimgray">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-row items-center justify-start pt-[4.5px] px-0 pb-[1.5px] box-border max-w-[424.45001220703125px]">
                <div className="flex flex-row items-center justify-center max-w-[85px]">
                  <img
                    className="relative w-[85px] h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/649d30b1f8d3068ddb75721e-ioni-lightsvg.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[35.45001220703125px] pl-0">
                <div className="relative leading-[30px] font-medium">
                  <p className="m-0">
                    Boost your customer support productivity with
                  </p>
                  <p className="m-0">ChatGPT-4</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[120px] pr-0 pl-[194.86000061035156px] gap-[186.87px] text-xl-8">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[17.899993896484375px] gap-[39.99px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[113.69999694824219px] pl-0">
                <b className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                  Features
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[18px] text-[17.44px] text-lightgray">
                <div className="flex flex-col items-start justify-start py-0 pr-[104.69999694824219px] pl-0 text-[17.16px]">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    AI Assistant
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[110.69999694824219px] pl-0 text-[17.86px]">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    AI Chatbot
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[122.69999694824219px] pl-0 text-mid-3">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    AI Search
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[57.69999694824219px] pl-0">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    AI Widget Builder
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[0.6999969482421875px] pl-0">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    Conversations Analytics
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[44.69999694824219px] pl-0 text-lg">
                  <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                    Chatbot to Human
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[39.99px] text-[20.28px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[125.1300048828125px] pl-0">
                <b className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                  Resources
                </b>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[68px] pl-0 text-[17.02px] ">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[17.990020751953125px] gap-[18px]">
                  <div className="flex flex-col items-start justify-start py-0 pr-[105.1300048828125px] pl-0">
                  <Link href="/pricing" className="no-underline text-lightgray hover:text-[#9966fe]">
                    {/* <a className="relative leading-[30px] inline-block max-h-[30.010000228881836px]">Pricing</a> */}
                    Pricing
                  </Link>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[93.1300048828125px] pl-0 text-lg">
                    <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                      Contact
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[124.1300048828125px] pl-0 text-[17.72px]">
                    <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                      Blog
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[127.1300048828125px] pl-0 text-lg">
                    <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                      FAQ
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[92.1300048828125px] pl-0 text-[17.44px]">
                    <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                      Security
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-mid-3 hover:text-[#9966fe] duration-600">
                    <div className="relative leading-[20px] font-medium">{`Terms & Conditions`}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[48.1300048828125px] pl-0">
                    <div className="relative leading-[20px] font-medium hover:text-[#9966fe] duration-600">
                      Privacy Policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start pt-[33px] px-[296px] pb-8 mt-[-0.1px] text-[16.88px] text-whitesmoke-100 border-t-[1px] border-solid border-dimgray">
        <div className="flex flex-col items-start justify-start py-0 px-6 box-border max-w-[1328px]">
          <div className="flex flex-row items-center justify-start gap-[293.16px]">
            <div className="flex flex-col items-start justify-start py-0 pr-[708.8400268554688px] pl-0">
              <b className="relative leading-[30px] inline-block max-h-[30px] whitespace-nowrap">
                Copyright © 2023 | ioni
              </b>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <a className="[text-decoration:none] flex flex-row items-center justify-center max-w-[84px]">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hover:filter hover:brightness-0 transition-transform duration-300 transform hover:-translate-y-[2px]"
                    alt=""
                    src="/icon7.svg"
                  />
                </div>
              </a>
              <div className="flex flex-row items-center justify-center max-w-[84px]">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hover:filter hover:brightness-0 transition-transform duration-300 transform hover:-translate-y-[2px]"
                    alt=""
                    src="/icon8.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center max-w-[84px]">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hover:filter hover:brightness-0 transition-transform duration-300 transform hover:-translate-y-[2px]"
                    alt=""
                    src="/icon9.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
