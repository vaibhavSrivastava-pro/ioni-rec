import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import DesFirst from "../components/des-first";
import JoinSection from "../components/join-section";
import DesSecond from "../components/des-second";
import Stats from "../components/stats";
import Features from "../components/features";
import JoinSectionSecond from "../components/join-section-second";
import DesThird from "../components/des-third";
import Benefits from "../components/benefits";
import UseCases from "../components/use-cases";
import Testimonial from "../components/Testimonial";
import Footer from "../components/footer";



const IoniaiByHtmltodesignF = () => {
  return (
  <div>
      <Head>
        <title>Test</title>
        <meta name="description" content="first one" />
      </Head>
      <div className="relative bg-white w-full h-[9720.19px] text-left text-[41.59px] text-gray-100 font-inter">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-white h-[9720.19px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.00006103515625px] box-border">
          <div className="flex flex-col items-start justify-start bg-[url('/divhomepositionrelativezindex1copy@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <Header />
            <Hero />
          </div>
          <DesFirst />
          <div className="flex flex-col items-start justify-start bg-[url('/divdivblock4@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <JoinSection />
          </div>
          <DesSecond />
          <Stats />
          <Features />
          <div className="bg-mediumslateblue-100 w-[1920px] overflow-hidden flex flex-col items-center justify-start pt-[100px] px-0 pb-[99.98001098632812px] box-border relative">
            <JoinSectionSecond />
          </div>
          <DesThird />
          <Benefits />
          <UseCases />
          <Testimonial />
          <Footer />
        </div>
        <div className="absolute top-[1015px] left-[1855px] rounded-[33px] bg-mediumslateblue-200 shadow-[0px_5px_8px_rgba(0,_0,_0,_0.15)] w-[50px] h-[50px] flex flex-row items-center justify-center p-3 box-border">
          <img
            className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default IoniaiByHtmltodesignF;
