import React from 'react';
import SectionTitle from '../sectionTitle';
import ContentDetails from '../contentDetails';

const CompanyContent:React.FC = () => {
    return (
        <div className='sl-section-space'>
           
            {/* First Card Item  */}
            <div className="sl-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <img src="./assets/images/image.png" alt="Avitation expertise" className='w-full h-auto' />
                    </div>
                    <div className='p-5'>
                        <div className="relative">
                            <p className='text-base lg:text-lg text-dark-gray font-semibold'>Why Choose Us?</p>
                            <SectionTitle title='Aviation Expertise' customClass='text-start'/>
                            <ContentDetails 
                              content="Rivercode was founded by pilots with extensive backgrounds in creating applications and services in the aircraft connectivity space. Our team knows aviation because we live it."
                            />
                            <ContentDetails 
                              content="Most of our developers are also pilots or have significant experience building for aviation, giving us a unique perspective on the challenges you face."
                            />
                        </div>
                    </div>
                 </div>
                </div>

                  {/* First Card Item  */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center py-12">
                 
                    <div className='px-8 lg:pl-20 order-2 lg:order-1'>
                        <div className="relative">
                            <p className='text-base lg:text-lg text-dark-gray font-semibold'>Why Choose Us?</p>
                            <SectionTitle title='Aviation Expertise' customClass='text-start'/>
                            <ContentDetails 
                              content="Rivercode was founded by pilots with extensive backgrounds in creating applications and services in the aircraft connectivity space. Our team knows aviation because we live it."
                            />
                            <ContentDetails 
                              content="Most of our developers are also pilots or have significant experience building for aviation, giving us a unique perspective on the challenges you face."
                            />
                        </div>
                    </div>

                    <div className='relative order-1 lg:order-2'>
                        <img src="./assets/images/Tailored Solutions.png" alt="Avitation expertise" className='w-full h-auto lg:translate-x-1' />
                    </div>
                </div>


        </div>
    );
};

export default CompanyContent;