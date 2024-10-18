import React from 'react';
import banner from '../../../assets/images/banner.png';
import Button from '../../elements/button';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-[420px] sm:h-screen w-full bg-cover sm:bg-none lg:bg-cover sm:bg-right-bottom bg-no-repeat py-7"
      style={{ 
        backgroundImage: `url(${banner})`,
       }}
    >
    <div className="sl-container min-h-screen grid grid-cols-1 sm:grid-cols-2 xm:items-center mt-10">
      <div className="w-full flex flex-col gap-4 sm:gap-10">
          <h1 className="text-2xl sm:text-3xl md:text-6xl 2xl:text-[92px] font-bold leading-tight">
            Innovative <br /> Aviation Software <br /> for Private Jets
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. 
            Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights.
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <Button
              title={'Explore Our Solutions'} 
              type="button"
              iconPosition="right"
              icon={<i className="fa-solid fa-chevron-right ml-2"></i>}
              customClass='py-3 px-6'
            />
            <Button
              title={'Contact Us'} 
              type="button"
              iconPosition="right"
              variant='light'
              icon={<i className="fa-solid fa-chevron-right ml-2"></i>}
              customClass='py-3 px-6'
            />
            {/* <button className="text-white bg-[#4EC0F9] py-3 px-6 rounded-lg hover:bg-[#3BA0D9] transition-colors duration-300">
              Explore Our Solutions 
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </button>
            <a 
              href="#contact" 
              className="bg-white py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us 
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;