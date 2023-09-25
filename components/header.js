import { memo } from "react";
import Nav from "./nav";

const Header = memo(() => {
  return (
    <div className="flex flex-col items-center justify-start py-8 px-[296px] z-[1] text-left text-[17.02px] text-gray-300 font-inter">
      <div className="flex flex-col items-start justify-start py-0 pr-[447.41998291015625px] pl-6 box-border max-w-[1328px]">
        <Nav />
      </div>
    </div>
  );
});

export default Header;
