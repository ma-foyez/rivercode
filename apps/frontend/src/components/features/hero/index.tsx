import React from 'react';
import banner from '../../../assets/images/banner.png';
import Button from '../../elements/button';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-[420px] sm:h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(./assets/images/hero_bg.svg)`,
      }}
    >
        <div>
            <img src="./assets/images/icons/Elements_Blue-Angle-Bottom-Left 2.png" alt="Rivercode" className='h-20 md:h-32 absolute bottom-0 left-0' />
            <img src="./assets/images/icons/Elements_Blue-Angle-Bottom-Left 2.png" alt="Rivercode" className='h-20 md:h-32 absolute bottom-0 right-0 transform scale-x-[-1]' />
            <div className="hidden lg:block">
            <img 
              src="./assets/images/file (21) 1.svg" 
              alt="Rivercode" 
              className="h-auto w-1/2 max-w-8xl absolute top-1/2 right-0 transform -translate-y-1/2"
            />  
            </div>
        </div>
      <div className="sl-container flex flex-col lg:flex-row md:items-center 2xl:items-center h-screen md:pb-5 2xl:pb-1 relative z-50 *:overflow-hidden">
        <div className="hidden md:block lg:hidden -mr-12">
              <img 
                src="./assets/images/file (21) 1.svg" 
                alt="Rivercode" 
                className="w-full"
              />  
        </div>
        <div className="max-w-2xl 2xl:max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[82px] font-bold leading-tight mb-4 sm:mb-6">
            Innovative <br /> Aviation Software <br /> for Private Jets
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. 
            Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              title={'Explore Our Solutions'} 
              type="button"
              iconPosition="right"
              icon={<i className="fa-solid fa-chevron-right ml-2"></i>}
              customClass='py-3 px-6 w-full sm:w-auto'
            />
            <Button
              title={'Contact Us'} 
              type="button"
              iconPosition="right"
              variant='light'
              icon={<i className="fa-solid fa-chevron-right ml-2"></i>}
              customClass='py-3 px-6 w-full sm:w-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;