import { memo } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";



const Nav = memo(() => {
  return (
    <div className="flex flex-row items-center justify-between text-left text-[17.02px] text-gray-300 font-inter mt-[5px]">
      <div className="flex flex-col items-start justify-center pt-[4.5px] pb-[1.5px] pr-[420px] pl-0 box-border max-w-[240px]">
        <div className="flex flex-row items-center justify-center max-w-[240px]">
          <img
            className="relative w-[85px] h-6 overflow-hidden shrink-0"
            alt=""
            src="/649bfdd506749d638440267e-ioni-logosvg.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex md:hidden sm:hidden">
        <div className="flex flex-row items-center justify-end">
          <Dropdown 
            title="Features"
            img="/icon.svg"
            list={['AI Assistant', 'AI Chatbot', 'AI Search', 'AI Widget Builder', 'Conversations Analytics', 'Chatbot to Human']}
          />
          <Dropdown 
            title="Resources"
            img="/icon1.svg"
            list={['Blog',
              'Security',
              'Terms & Conditions',
              'Privacy Policy']}
          />
          <div className="flex flex-col items-center justify-start py-0 px-4 text-[16.45px]">
            <div className="flex flex-row items-start justify-start max-w-[1328px]">
              <Link href="/pricing" className="no-underline font-bold text-black hover:text-[#9966fe]">
                {/* <a className="relative leading-[30px] inline-block max-h-[30.010000228881836px]">Pricing</a> */}
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start py-0 px-4 text-lg">
            <div className="flex flex-row items-start justify-start max-w-[1328px]">
              <b className="relative leading-[30px] inline-block max-h-[30px] hover:text-[#9966fe]">
                FAQ
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end py-0 pr-0 pl-8">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start mix-blend-color-dodge hover:h-auto ml-[220px]">
          <div className="rounded-sm bg-gray-100 flex flex-row items-start justify-start py-[17px] px-[25px] border-[1px] border-solid border-mediumslateblue-100 transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-600">
            <b className="relative text-[15.38px] leading-[18px] font-inter text-white text-center flex flex-auto">
              <p className="m-0 whitespace-nowrap">Contact Sales</p>
            </b>
          </div>
        </button>
      </div>
    </div>
  );
});

export default Nav;
