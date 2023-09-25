// import { memo } from "react";

// const Testimonial = memo(() => {
//   return (
//     <div className="bg-white overflow-hidden flex flex-col items-center justify-start py-[100px] px-[296px] text-left text-[41.77px] text-gray-100 font-inter">
//       <div className="flex flex-col items-start justify-start pt-6 px-6 pb-0 box-border max-w-[1328px]">
//         <div className="flex flex-row items-start justify-start pt-0 px-0 pb-12 gap-[40px]">
//           <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 z-[1]">
//             <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
//               <div className="relative leading-[56px] font-extrabold">
//                 <p className="m-0 whitespace-nowrap">See why people choose</p>
//                 <p className="m-0">ioni</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-start justify-start z-[0] text-[26.36px]">
//             <div className="flex flex-col items-start justify-start py-0 pr-56 pl-0 relative">
//               <div className="flex flex-row items-start justify-center gap-[40px] max-w-[520px] z-[0]">
//                 <div className="flex flex-row items-start justify-start">
//                   <div className="rounded-3xl bg-whitesmoke-100 shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] w-[520px] h-[420px] flex flex-col items-start justify-start pt-[45px] px-[42px] pb-0 box-border max-h-[420px]">
//                     <div className="flex flex-col items-start justify-center pt-[5.829999923706055px] px-0 pb-[26.84000015258789px]">
//                       <div className="flex flex-row items-center justify-center max-w-[30px]">
//                         <img
//                           className="relative w-[30px] h-[21.33px] overflow-hidden shrink-0"
//                           alt=""
//                           src="/649d2e2bdb88e10d9224a575-quotessvg.svg"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center pt-0 px-0 pb-[9px]">
//                       <div className="flex flex-col items-start justify-start py-0 pr-[39px] pl-0">
//                         <div className="relative leading-[40px] font-extrabold">
//                           <p className="m-0">
//                             “ioni is an exceptional solution
//                           </p>
//                           <p className="m-0">for customer support</p>
//                           <p className="m-0">automation!.”</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center pt-0 px-0 pb-6 text-mid-3">
//                       <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
//                         <div className="relative leading-[30px] font-medium">
//                           <p className="m-0">
//                             The AI ticket assistant is truly impressive,
//                             efficiently
//                           </p>
//                           <p className="m-0">resolving  our customer queries</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-row items-center justify-start gap-[16px] text-[16.88px]">
//                       <div className="rounded-13xl w-16 h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center pt-0 pb-1 pr-1 pl-0 box-border max-w-[64px] max-h-[64px]">
//                         <img
//                           className="relative w-[60px] h-[60px] object-cover max-w-[64px]"
//                           alt=""
//                           src="/64a7e7ffb8691fe80e0f8ccf-vpng@2x.png"
//                         />
//                       </div>
//                       <div className="flex flex-col items-start justify-start gap-[7.98px]">
//                         <div className="flex flex-col items-start justify-start py-0 pr-[0.410003662109375px] pl-0">
//                           <b className="relative leading-[20px]">
//                             Vitaly Romanchenko
//                           </b>
//                         </div>
//                         <div className="flex flex-col items-start justify-start py-0 pr-[59.410003662109375px] pl-0 text-[17.58px]">
//                           <div className="relative leading-[20px] font-medium">
//                             CEO in elai.io
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-row items-start justify-start text-[27.02px]">
//                   <div className="rounded-3xl bg-whitesmoke-100 shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-col items-start justify-center py-14 px-[42px] box-border max-h-[420px]">
//                     <div className="flex flex-col items-start justify-center pt-[5.829999923706055px] px-0 pb-[26.84000015258789px]">
//                       <div className="flex flex-row items-center justify-center max-w-[30px]">
//                         <img
//                           className="relative w-[30px] h-[21.33px] overflow-hidden shrink-0"
//                           alt=""
//                           src="/649d2e2bdb88e10d9224a575-quotessvg1.svg"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center pt-0 px-0 pb-2">
//                       <div className="flex flex-col items-start justify-start">
//                         <div className="relative leading-[40px] font-extrabold inline-block max-h-[40.0099983215332px]">
//                           “The #1 AI assistant”
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center pt-0 px-0 pb-6 text-[17.58px]">
//                       <div className="flex flex-col items-start justify-start py-0 pr-[34px] pl-0">
//                         <div className="relative leading-[30px] font-medium">
//                           <p className="m-0">
//                             “I have tried various tools to assist my customer
//                           </p>
//                           <p className="m-0">
//                             support team, but nothing worked the way it
//                           </p>
//                           <p className="m-0">
//                             should. However, using ChatGPT for message
//                           </p>
//                           <p className="m-0">
//                             generation took Ioni to a whole new level!”
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-row items-center justify-start gap-[16px] text-[16.88px]">
//                       <div className="rounded-13xl w-16 h-16 overflow-hidden shrink-0 flex flex-col items-start justify-center pt-0 pb-1 pr-1 pl-0 box-border max-w-[64px] max-h-[64px]">
//                         <img
//                           className="relative w-[60px] h-[60px] object-cover max-w-[64px]"
//                           alt=""
//                           src="/64b7caa5a9b24259d101ce06-moddojpg@2x.png"
//                         />
//                       </div>
//                       <div className="flex flex-col items-start justify-start gap-[7.98px]">
//                         <div className="flex flex-col items-start justify-start py-0 pr-[45.05999755859375px] pl-0">
//                           <b className="relative leading-[20px]">Alex Shwarz</b>
//                         </div>
//                         <div className="flex flex-col items-start justify-start text-[17.58px]">
//                           <div className="relative leading-[20px] font-medium">
//                             COO in Moddo.ua
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute my-0 mx-[!important] h-[calc(100%_+_200px)] w-[258.06%] top-[-100px] right-[100%] bottom-[-100px] left-[-258.06%] bg-white z-[1]" />
//               <div className="my-0 mx-[!important] absolute top-[178px] left-[-40px] rounded-13xl bg-mediumslateblue-100 box-border w-16 h-16 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[17px] pr-[19.510000228881836px] pl-[19.520000457763672px] min-w-[64px] min-h-[64px] z-[2] border-[1px] border-solid border-mediumslateblue-100">
//                 <div className="flex flex-col items-start justify-start py-0.5 px-0">
//                   <img
//                     className="relative w-[24.97px] h-[26px] overflow-hidden shrink-0"
//                     alt=""
//                     src="/icon5.svg"
//                   />
//                 </div>
//               </div>
//               <div className="my-0 mx-[!important] absolute top-[178px] right-[-40px] rounded-13xl bg-mediumslateblue-100 box-border w-16 h-16 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[17px] pr-[19.510000228881836px] pl-[19.520000457763672px] min-w-[64px] min-h-[64px] z-[3] border-[1px] border-solid border-mediumslateblue-100">
//                 <div className="flex flex-col items-start justify-start py-0.5 px-0">
//                   <img
//                     className="relative w-[24.97px] h-[26px] overflow-hidden shrink-0"
//                     alt=""
//                     src="/icon6.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Testimonial;


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Testimonial = () => {
  const images = ['/div.card2.png', '/div.card2.png', '/div.card2.png', '/div.card2.png', '/div.card2.png', '/div.card2.png'];
  return (
    <div className="">
      <p className="text-black font-inter text-[50px] text-justify font-bold">See why people chose ioni</p>
      <div className="h-[600px] w-[600px]">
      <Carousel
        className="crsl"
        autoPlay
        infiniteLoop
        centerMode
        interval={1500}
      >
        
        {images.map((image, index) => (
          <img key={index} src={image} alt='' />
        ))}
      </Carousel>
    </div>
    </div>
  )
}

export default Testimonial;
