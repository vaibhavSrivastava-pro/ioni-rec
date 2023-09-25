import React from 'react'
import { useState } from 'react'


const Dropdown = ({title, img, list}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [isHovered, setIsHovered] = useState(false);
  const [delayedEffect, setDelayedEffect] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  


  return (
    <div
    onMouseEnter={toggleDropdown}
    >
    <div className="group flex flex-col items-center justify-start py-0 px-4 text-[16.59px]">
        <div className="flex flex-row items-center justify-start gap-[7.91px]">
          
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[30px] inline-block max-h-[30px]">
              {title}
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-1.5 px-0">
            <img
              className="relative w-[17.28px] h-[18px] overflow-hidden shrink-0 group-hover:-rotate-180 transform transition-transform"
              alt=""
              src={img}
            />
          </div>
        </div>
        
      </div>
      <div className='border-spacing-5'>
      {isOpen && (
        <div className='absolute dropdown-menu z-10 bg-[#feffff] text-black w-[300px] h-[250px] leading-10 pt-2 pb-6 delay-700 border-[5px] border-yellow-500  rounded-sm bg-opacity-90'>
          <ul>
            {list.map((option, index) => (
              <div key={index} 
              onClick={toggleDropdown}
              >
                  <b className='font-normal  hover:text-[#9966fe] duration-600'>{option}</b>
              </div>
            ))}
            
          </ul>
        </div>
        )}
        <div
          
        >

        </div>
      </div>
      
      </div>
  )
}

export default Dropdown