import React from 'react';
import banner from '../../../assets/images/banner.png';
import Button from '../../elements/button';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-[420px] sm:h-screen w-full bg-cover bg-left-bottom lg:bg-center	 bg-no-repeat flex items-center"
      style={{ 
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="sl-container w-full">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
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