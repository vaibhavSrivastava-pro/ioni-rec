import { memo } from "react";

const Benefits = memo(() => {
  return (
    <div className="bg-whitesmoke-100 flex flex-col items-center justify-start py-[100px] px-[296px] text-left text-[41.59px] text-gray-100 font-inter">
      <div className="flex flex-col items-start justify-start py-0 px-6 box-border gap-[24px] max-w-[1328px]">
        <div className="flex flex-col items-start justify-start max-w-[448px]">
          <div className="flex flex-col items-start justify-start pt-0 pb-4 pr-[278px] pl-0">
            <b className="relative leading-[56px]">Benefits</b>
          </div>
          <div className="flex flex-col items-start justify-start pt-0 pb-10 pr-[174px] pl-0 text-[17.44px]">
            <div className="relative leading-[30px] font-medium">
              Streamline your workflow with AI
            </div>
          </div>
        </div>
        <div className="relative w-[1280px] h-[582px] text-[22.13px]">
          <div className="absolute h-[calc(100%_-_344px)] w-[calc(100%_-_654px)] top-[0px] right-[654px] bottom-[344px] left-[0px] rounded-xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-row items-start justify-start pt-[45px] px-[50px] pb-[75px] box-border text-3xl-5">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[285px] pl-0">
                <div className="relative leading-[34px] font-extrabold inline-block max-h-[34px]">
                  Immediate responses
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[39px] pl-0 text-mid-3">
                <div className="relative leading-[30px] font-medium">
                  <p className="m-0">
                    Bring your CSAT Scores to a new level,  resolving customer
                  </p>
                  <p className="m-0">issues in the shortest possible time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_654px)] top-[0px] right-[0px] left-[654px] rounded-xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-row items-start justify-start py-[45px] px-[50px] box-border text-[21.75px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[315px] pl-0">
                <div className="relative leading-[34px] font-extrabold inline-block max-h-[34px]">
                  Human-in-the-loop
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-10 pl-0 text-[17.58px]">
                <div className="relative leading-[30px] font-medium">
                  <p className="m-0">
                    To ensure the quality of using AI generated text, you can
                  </p>
                  <p className="m-0">
                    always keep a human in the workflow to verify all answers
                  </p>
                  <p className="m-0">before sending them.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_654px)] top-[266px] right-[654px] left-[0px] rounded-xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-row items-start justify-start py-[45px] px-[50px] box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[382px] pl-0">
                <div className="relative leading-[34px] font-extrabold inline-block max-h-[34px]">
                  Self-learning
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 text-[17.58px]">
                <div className="relative leading-[30px] font-medium">
                  <p className="m-0">
                    The AI system is constantly learning and self-improving with
                  </p>
                  <p className="m-0">
                    each interaction. When an agent rejects the draft and
                    provides
                  </p>
                  <p className="m-0">
                    feedback, the AI algorithm adapts and fine-tunes its search
                  </p>
                  <p className="m-0">and suggestion capabilities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_654px)] top-[266px] right-[0px] left-[654px] rounded-xl bg-white shadow-[0px_2px_6px_rgba(14,_14,_14,_0.06)] flex flex-row items-start justify-start py-[45px] px-[50px] box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[254px] pl-0">
                <div className="relative leading-[34px] font-extrabold inline-block max-h-[34px]">
                  Human-level recognition
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 text-[17.44px]">
                <div className="relative leading-[30px] font-medium">
                  <p className="m-0">
                    AI recognizes customer inquiries at a human-level by
                    analyzing
                  </p>
                  <p className="m-0">
                    the intent and meaning behind them. Accurate interpretation
                  </p>
                  <p className="m-0">
                    enables the AI system to provide the most pertinent
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Benefits;
