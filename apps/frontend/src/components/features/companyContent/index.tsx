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

                  {/* Second Card Item  */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center py-12 overflow-hidden">
                    <div className='px-8 lg:pl-20 order-2 lg:order-1'>
                        <div className="relative">
                            <SectionTitle title='Tailored Solutions' customClass='text-start'/>
                            <ContentDetails 
                              content="We customize our software to fit your operations perfectly, ensuring every feature and integration is designed with your needs in mind."
                            />
                        </div>
                    </div>

                    <div className='relative order-1 lg:order-2'>
                        <img src="./assets/images/Tailored Solutions.png" alt="Avitation expertise" className='w-full h-auto lg:translate-x-1' />
                    </div>
                </div>

                {/* Third Card Item  */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center overflow-hidden">

                     <div className='relative left-0 2xl:py-10'>
                        <img src="./assets/images/Mask group.svg" alt="Avitation expertise" className='w-[90%] h-auto relative z-30' />
                        <img src="./assets/images/Rectangle 5916.png" alt="Avitation expertise" className='w-full h-auto absolute -left-5 top-16 2xl:top-36' />
                    </div>
                    
                    <div className='px-8 lg:pl-1 mt-24 2xl:-mt-12'>
                        <div className="relative">
                            <SectionTitle title='Commitment to Excellence' customClass='text-start'/>
                            <ContentDetails 
                              content="We don’t just build software; we create reliable, user-friendly solutions that stand the test of time."
                            />
                        </div>

                       <div className='grid grid-cols-1 md:grid-cols-2 relative justify-start'>
                        <div className='hidden md:block 2xl:hidden'>
                            <img src="./assets/images/Group 2085663227.svg" alt="Avitation expertise" className='w-full h-full lg:absolute z-40 -left-72 -bottom-8 xl:-left-80 xl:-bottom-16' />
                       </div>
                         <div className='hidden 2xl:block'>
                            <img src="./assets/images/Group 2085663227.svg" alt="Avitation expertise" className='w-full h-full' />
                       </div>

                        <div className="float-end mt-1 md:mt-16">
                          <div className="bg-white shadow-md rounded-md p-4 flex justify-between">
                             <div>
                                <h2 className="text-base md:text-lg text-black mb-2 text-center sm:text-left">EUR  Balance</h2>
                                 <h2 className="text-xl md:text-2xl text-black font-bold mb-2 text-center sm:text-left">€ 4,130.99 </h2>
                                  <p className="text-sm lg:text-base text-[#5E646B]"> Estimated future payouts </p>
                             </div>
                          </div>
                           <div className="bg-white shadow-md rounded-md p-4 flex justify-between my-3">
                             <div>
                                <h2 className="text-base md:text-lg text-black mb-2 text-center sm:text-left">EUR  Balance</h2>
                                 <h2 className="text-xl md:text-2xl text-black font-bold mb-2 text-center sm:text-left">€ 4,130.99 </h2>
                                  <p className="text-sm lg:text-base text-[#5E646B]"> Estimated future payouts </p>
                             </div>
                          </div>
                        </div>
                       </div>

                    </div>

                   
                </div>

        </div>
    );
};

export default CompanyContent;