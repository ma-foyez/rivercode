import React from 'react';
import banner from '../../../assets/images/banner.png';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen w-full bg-cover bg-right-bottom bg-no-repeat py-7 2xl:p-0"
      style={{ 
        backgroundImage: `url(${banner})`,
       }}
    >
    <div className="sl-container min-h-screen grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="w-full flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl 2xl:text-[92px] font-bold leading-tight">
            Innovative <br /> Aviation Software <br /> for Private Jets
          </h1>
          <p className="text-base md:text-lg">
            At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. 
            Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights.
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="text-white bg-[#4EC0F9] py-3 px-6 rounded-lg hover:bg-[#3BA0D9] transition-colors duration-300">
              Explore Our Solutions 
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </button>
            <a 
              href="#contact" 
              className="bg-white py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us 
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;