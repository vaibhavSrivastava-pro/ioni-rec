// import { memo } from "react";

// const DesThird = memo(() => {
//   return (
//     <div className="flex flex-col items-center justify-start pt-[100px] px-[50px] pb-0 text-center text-[41.08px] text-gray-100 font-inter">
//       <div className="flex flex-col items-center justify-start py-0 px-6 box-border max-w-[1328px]">
//         <div className="flex flex-col items-start justify-start max-w-[640px]">
//           <div className="flex flex-col items-start justify-start gap-[16px]">
//             <div className="flex flex-col items-center justify-start py-px pr-[110.40499877929688px] pl-[110.59500122070312px] border-[1px] border-solid border-white">
//               <div className="relative leading-[56px] font-extrabold whitespace-nowrap">
//                 How does ioni work?
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-start pt-0 pb-10 pr-[128.90499877929688px] pl-[129.09500122070312px] text-[17.58px]">
//               <div className="relative leading-[30px] font-medium">
//                 Three easy steps to get started exploring Ioni
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-start pt-5 px-0 pb-0 gap-[60px] text-left text-9xl text-gray-300">
//           <div className="flex flex-col items-start justify-start max-w-[580px]">
//             <div className="box-border flex flex-col items-start justify-start pt-10 px-0 pb-[41px] max-w-[554.530029296875px] border-b-[1px] border-solid border-lightgray">
//               <div className="bg-white flex flex-row items-start justify-start gap-[24px]">
//                 <div className="flex flex-col items-center justify-center max-w-[64px]">
//                   <img
//                     className="relative w-16 h-14 overflow-hidden shrink-0"
//                     alt=""
//                     src="/64da57e2d7ae871abf9494cf-dynamic-ai-knowledge-basesvg.svg"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center pt-3 px-0 pb-0 box-border max-w-[730px]">
//                   <div className="flex flex-col items-start justify-center max-w-[730px]">
//                     <div className="flex flex-row items-center justify-start py-0 pr-[248.27999877929688px] pl-0">
//                       <div className="flex flex-col items-start justify-start py-0 pr-[1.25px] pl-0">
//                         <div className="relative leading-[40px] font-extrabold inline-block max-h-[40px] whitespace-nowrap">
//                           1. Add data
//                         </div>
//                       </div>
//                     </div>
//                     <div className="overflow-hidden flex flex-col items-start justify-start text-mid-3 text-gray-100">
//                       <div className="flex flex-col items-start justify-start py-0 pr-[14.529998779296875px] pl-0">
//                         <b className="relative leading-[30px]">
//                           <p className="m-0 whitespace-nowrap">
//                             Add HTML and text pages to your AI database
//                           </p>
//                           <p className="m-0">and start testing the chat.</p>
//                         </b>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-start justify-start py-0 pr-0 pl-1">
//                   {/* <div className="w-[38px] flex flex-col items-start justify-end py-[18px] pr-0 pl-[5px] box-border min-w-[38px] min-h-[38px]">
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 mt-[-28px]" />
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div className="box-border flex flex-col items-start justify-start pt-10 px-0 pb-[41px] max-w-[554.530029296875px] text-[27.02px] border-b-[1px] border-solid border-lightgray">
//               <div className="bg-white flex flex-row items-start justify-start gap-[24px]">
//                 <div className="flex flex-col items-center justify-center max-w-[64px]">
//                   <img
//                     className="relative w-[53px] h-[54px] overflow-hidden shrink-0"
//                     alt=""
//                     src="/64da57f4d7ae871abf94a441-widget-buildersvg.svg"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center pt-3 px-0 pb-0 box-border max-w-[730px]">
//                   <div className="flex flex-col items-start justify-center max-w-[730px]">
//                     <div className="flex flex-row items-center justify-start py-0 pr-[126.52999877929688px] pl-0">
//                       <div className="flex flex-col items-start justify-start">
//                         <div className="relative leading-[40px] font-extrabold inline-block max-h-[40px] whitespace-nowrap">
//                           2. Create AI assistant
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-start justify-start py-0 pr-0 pl-1">
//                   {/* <div className="w-[38px] h-[38px] flex flex-col items-center justify-center pt-[5px] pb-[31px] pr-0 pl-5 box-border min-w-[38px] min-h-[38px]">
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 mt-[-15px]" />
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div className="box-border flex flex-col items-start justify-start pt-10 px-0 pb-[41px] max-w-[554.530029296875px] text-[25.92px] border-b-[1px] border-solid border-lightgray">
//               <div className="bg-white flex flex-row items-start justify-start gap-[24px]">
//                 <div className="flex flex-col items-center justify-center max-w-[64px]">
//                   <img
//                     className="relative w-14 h-[54px] overflow-hidden shrink-0"
//                     alt=""
//                     src="/64da58130dfa1e2472b8fad5-create-ai-chatsvg.svg"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center pt-3 px-0 pb-0 box-border max-w-[730px]">
//                   <div className="flex flex-col items-start justify-center max-w-[730px]">
//                     <div className="flex flex-row items-center justify-start py-0 pr-[84.52999877929688px] pl-0">
//                       <div className="flex flex-col items-start justify-start">
//                         <div className="relative leading-[40px] font-extrabold inline-block max-h-[40px] whitespace-nowrap">
//                           3. Analyze conversations
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-start justify-start py-0 pr-0 pl-1">
//                   {/* <div className="w-[38px] h-[38px] flex flex-col items-center justify-center pt-[5px] pb-[31px] pr-0 pl-5 box-border min-w-[38px] min-h-[38px]">
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
//                     <div className="relative rounded-xl bg-gray-300 w-7 h-0.5 mt-[-15px]" />
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="overflow-hidden flex flex-col items-start justify-start">
//             <div className="self-stretch flex-1 flex flex-col items-start justify-start">
//               <img
//                 className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
//                 alt=""
//                 src="/divtabimagewrapper@2x.png"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default DesThird;

// import { memo } from "react";
// import { Divider, Tabs } from "antd"

// const DesThird = memo(() => {
//    return (
//     <div className="pt-[20px] pb-[20px] flex justify-start ">
//       <Tabs className="h-[500px] flex-shrink-0" defaultActiveKey="Add Data" tabPosition="left">
//         <Tabs.TabPane 
//         tab="Add Data" 
//         key="tab1">
//           <div className="absolute w-[10px] h-[10px]">
//           <img src="caraousal-first.png" alt="" />
//           </div>
//         </Tabs.TabPane>
//         <Tabs.TabPane tab="Create AI assistant" key="tab2">
          
//         </Tabs.TabPane>
//         <Tabs.TabPane tab="Analyze conversations" key="tab3">
          
//         </Tabs.TabPane>
//       </Tabs>
//     </div>
//    )})

// export default DesThird

import { memo } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DesThird = memo(() => {
  return(
  <div className="pl-[100px] pr-[100px] pt-[20px]">
    <div className="flex justify-center relative leading-[56px] font-extrabold whitespace-nowrap pb-5 pt-10">
                How does ioni work?
              </div>
              <div className="flex justify-center text-[18px] pb-[100px] ">
               Three easy steps to get started exploring Ioni
               </div>
  <Tabs className="">
    <TabList>
      <Tab>
        <div className="flex flex-row justify-start p-[31px]">
          <img src="/64da57e2d7ae871abf9494cf-dynamic-ai-knowledge-basesvg.svg" 
                alt=""  
                className="w-[50px] pr-[20px]"
          />
          <b className="font-inter font-bold text-[30px]">Add data</b>
        </div>
      </Tab>
      <Tab>
      <div className="flex flex-row justify-start p-[24px]">
          <img src="/64da57f4d7ae871abf94a441-widget-buildersvg.svg"
                alt=""  
                className="w-[50px] pr-[20px]"
          />
          <b className="font-inter font-bold text-[30px]">Create AI assistant</b>
        </div>
      </Tab>
      <Tab>
      <div className="flex flex-row justify-start p-[27px]">
          <img src="/64da58130dfa1e2472b8fad5-create-ai-chatsvg.svg" 
                alt=""  
                className="w-[50px] pr-[20px]"
          />
          <b className="font-inter font-bold text-[30px]">Analyze conversations</b>
        </div>
      </Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col items-center">
        <b className="text-center ml-[150px] mr-[150px] mt-[30px] mb-[50px] font-inter font-normal text-[30px]">Add HTML and text pages to your AI database and start testing the chat.</b>
        <div className="">
          <img className='w-[650px] h-[500px] pb-10' src="caraousal-first.png" alt="" />
        </div>
      </div>

    </TabPanel>
    <TabPanel>
    <div className="flex flex-col items-center">
        <b className="text-center ml-[150px] mr-[150px] mt-[30px] mb-[50px] font-inter font-normal text-[30px]">Create and customize a personal chatbot that perfectly matches the brand voice nd your business visual style.</b>
        <div className="">
          <img className='w-[650px] h-[500px] pb-10' src="caraousal-second.png" alt="" />
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="flex flex-col items-center">
        <b className="text-center ml-[150px] mr-[150px] mt-[30px] mb-[50px] font-inter font-normal text-[30px]">Check answers and adjust your AI bot. 
        Add questions from your support requests, check the answer and edit it if needed. Ioni will self-learn and autmatically 
        improve auto-responses</b>
        <div className="">
          <img className='w-[650px] h-[500px] pb-10' src="caraousal-third.png" alt="" />
        </div>
      </div>
    </TabPanel>
  </Tabs>
  </div>
)});

export default DesThird