import Footer from '../../components/footer';
import Dropdown from '../../components/Dropdown';
import Link from 'next/link';


const MainSection = () => {
    return (
    <div className='bg-[#f4f8fb] pt-0'>
        <div className="flex flex-row items-center justify-between text-left text-[17.02px] text-gray-300 font-inter pt-[30px] ml-[80px] mr-[80px]">
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
      <div className="flex flex-row items-center justify-end py-0 pr-0 pl-8 z-10">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start mix-blend-color-dodge hover:h-auto ml-[220px]">
          <div className="rounded-sm bg-gray-100 flex flex-row items-start justify-start py-[17px] px-[25px] border-[1px] border-solid border-mediumslateblue-100 transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-600">
            <b className="relative text-[15.38px] leading-[18px] font-inter text-white text-center flex flex-auto">
              <p className="m-0 whitespace-nowrap">Contact Sales</p>
            </b>
          </div>
        </button>
      </div>
    </div>
      <div className="overflow-hidden flex flex-col items-center justify-start pt-[100px] px-[296px] pb-[120px] text-center text-[49.99px] text-gray-100 font-inter">
        <div className="flex flex-col items-center justify-start py-0 px-6 box-border gap-[60px] max-w-[1328px]">
          <div className="flex flex-col items-start justify-start gap-[16.02px] max-w-[552px]">
            <div className="flex flex-col items-center justify-start py-0 pr-[114.39999389648438px] pl-[114.60000610351562px]">
              <div className="relative leading-[63px] font-extrabold inline-block max-h-[63.02000045776367px]">
                Pricing plans
              </div>
            </div>
            <div className="flex flex-col items-center justify-start py-0 pr-[28.410003662109375px] pl-[28.589996337890625px] text-mid-3">
              <div className="relative leading-[30px] font-medium">
                <p className="m-0">
                  Use ioni for free with your whole team. Upgrade to enable
                </p>
                <p className="m-0">
                  unlimited issues, enhanced security controls, and additional
                </p>
                <p className="m-0">features.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[28px] text-left text-[22.13px] text-gray-300">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[153.89996337890625px] text-[22.31px]">
              <div className="rounded-3xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-col items-start justify-start p-px border-[1px] border-solid border-whitesmoke-200">
                <div className="flex flex-col items-start justify-start py-16 px-[30px] gap-[40px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[265px] pl-0">
                      <div className="flex flex-col items-start justify-start gap-[8px] max-w-[258px]">
                        <div className="flex flex-col items-start justify-start py-0 pr-[19.669998168945312px] pl-0">
                          <div className="relative leading-[34px] font-extrabold inline-block max-h-[34.0099983215332px]">
                            Basic
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start text-[17.44px] text-gray-100">
                          <b className="relative leading-[30px] inline-block max-h-[30.010000228881836px]">
                            Free Beta
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-[174.8699951171875px] pl-0 gap-[9.13px] text-[31.21px] text-gray-100">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[44px] font-extrabold whitespace-nowrap">
                          $ 29.00<b className='font-normal'>/mo</b>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="self-stretch relative bg-lightgray h-px min-h-[1px]" />
                  <div className="w-[346px] h-[172.16px] flex flex-col items-center justify-start gap-[15px] text-[17.58px] text-gray-100">
                    <div className="flex flex-col items-start justify-start py-0 pr-[182px] pl-0 text-xl-8 text-gray-300">
                      <b className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                        What's included
                      </b>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[3.8599853515625px] pl-0 gap-[16px] text-[17.44px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[1.1400146484375px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          Up to 1000 AI-generated responses
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
                        <div className="relative leading-[20px] font-medium">
                          <p className="m-0">0.20 USD per each additional auto</p>
                          <p className="m-0">response</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[54.08000183105469px] pl-0 gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[0.9199981689453125px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          Up to 100 Guide AI responses
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-[27px] pr-[134.89500427246094px] pl-[135.10499572753906px] bg-gray-100 rounded-sm flex flex-row items-start justify-start transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-100 hover:scale-105 hover:animate-pulse">
                    <b className="relative text-[17.58px] leading-[20px] font-inter text-white text-center">
                      Free trial
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[69.89996337890625px]">
              <div className="rounded-3xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-col items-start justify-start p-px border-[1px] border-solid border-whitesmoke-200">
                <div className="flex flex-col items-start justify-start py-16 px-[30px] gap-[40px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[234.55999755859375px] pl-0">
                      <div className="flex flex-col items-start justify-start gap-[8px] max-w-[258px]">
                        <div className="flex flex-col items-start justify-start py-0 pr-[0.44000244140625px] pl-0">
                          <div className="relative leading-[34px] font-extrabold inline-block max-h-[34.0099983215332px]">
                            Advanced
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[30.44000244140625px] pl-0 text-[17.44px] text-gray-100">
                          <b className="relative leading-[30px] inline-block max-h-[30.010000228881836px]">
                            Free Beta
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-[98.1199951171875px] pl-0 gap-[9.88px] text-[31.61px] text-gray-100">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[44px] font-extrabold whitespace-nowrap">
                          $ 69.00 USD<b className='font-normal'>/mo</b>
                        </div>
                      </div>
                      {/* <div className="flex flex-col items-start justify-start text-3xl text-gray-300">
                        <div className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                          /mo
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="self-stretch relative bg-lightgray h-px min-h-[1px]" />
                  <div className="w-[346px] h-[256.16px] flex flex-col items-center justify-start gap-[16px] text-[17.58px] text-gray-100">
                    <div className="flex flex-col items-start justify-start py-0 pr-[182px] pl-0 text-xl-8 text-gray-300">
                      <b className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                        What's included
                      </b>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[3.5px] pl-0 gap-[16px] text-mid-3">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/purple-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[1.5px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          Up to 5000 AI-generated responses
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[16px] text-[17.86px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/purple-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
                        <div className="relative leading-[20px] font-medium">
                          <p className="m-0">0.15 USD per each additional auto</p>
                          <p className="m-0">response</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[54px] pl-0 gap-[16px] text-[17.44px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/purple-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          Up to 500 Guide AI responses
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[66px] pl-0 gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/purple-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          General Ticket Management
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[184.4199981689453px] pl-0 gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/purple-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[0.5800018310546875px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          Multilanguage
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-[27px] pr-[134.89500427246094px] pl-[135.10499572753906px] bg-gray-100 rounded-sm flex flex-col items-center justify-start transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-100 hover:scale-105 hover:animate-pulse">
                    <b className="relative text-[17.58px] leading-[20px] font-inter text-white text-center">
                      Free trial
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-3xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-col items-start justify-start p-px border-[1px] border-solid border-whitesmoke-200">
                <div className="flex flex-col items-start justify-start py-16 px-[30px] gap-[40px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[207.9199981689453px] pl-0">
                      <div className="flex flex-col items-start justify-start gap-[8px] max-w-[258px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[34px] font-extrabold inline-block max-h-[34.0099983215332px]">
                            Professional
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[72.08000183105469px] pl-0 text-[17.16px] text-gray-100">
                          <b className="relative leading-[30px] inline-block max-h-[30.010000228881836px]">
                            Custom
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[346px] h-[43.98px] text-[31.74px] text-gray-100">
                      <div className="absolute top-[calc(50%_-_22.99px)] left-[0px] flex flex-col items-start justify-start">
                        <div className="relative leading-[44px] font-extrabold whitespace-nowrap">
                          Custom <b className='font-normal'>/mo</b>
                        </div>
                      </div>
                      {/* <div className="absolute top-[-1px] left-[133.91px] w-[41px] h-[35.09px] overflow-hidden flex flex-col items-center justify-end text-3xl text-gray-300">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                            /mo
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="self-stretch relative bg-lightgray h-px min-h-[1px]" />
                  <div className="w-[346px] h-[326.09px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.000030517578125px] box-border gap-[15px] text-[17.58px] text-gray-100">
                    <div className="flex flex-col items-start justify-start py-0 pr-[182px] pl-0 text-xl-8 text-gray-300">
                      <b className="relative leading-[24.2px] inline-block max-h-[24.200000762939453px]">
                        What's included
                      </b>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[31px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          <p className="m-0">Сustom number of AI-generated</p>
                          <p className="m-0">responses</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[16px] text-[17.72px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          <p className="m-0">Сustom price per each additional</p>
                          <p className="m-0">auto response</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[74px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          <p className="m-0">Сustom number of guide AI</p>
                          <p className="m-0">responses</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[66px] pl-0 gap-[16px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          General Ticket Management
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[14.94000244140625px] pl-0 gap-[16px] text-mid-3">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-0">
                        <div className="relative leading-[20px] font-medium">
                          Multilanguage + Personal Manager
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[201px] pl-0 gap-[16px] text-[17.44px]">
                      <div className="flex flex-col items-center justify-center max-w-[346px]">
                        <img
                          className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                          alt=""
                          src="/blue-tick.svg.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          Feature new
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-[27px] pr-[134.89500427246094px] pl-[135.10499572753906px] bg-gray-100 rounded-sm flex flex-row items-start justify-start transition-transform transform hover:-translate-y-[2px] hover:bg-[#9966fe] duration-100 hover:scale-105 hover:animate-pulse">
                    <b className="relative text-[17.58px] leading-[20px] font-inter text-white text-center whitespace-nowrap">
                      Free trial
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    );
  };
  
  export default MainSection;
  