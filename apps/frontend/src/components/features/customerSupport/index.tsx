import React from 'react';

const CustomerSupport:React.FC = () => {
    return (
        <div className='sl-section-space -mt-10 sm:mt-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className='relative'>
                    <img src="./assets/images/customer_support.png" alt="Rivercode" className='w-full h-auto' />
                    <img src="./assets/images/icons/Elements_Blue-Angle-Bottom-Left 2.png" alt="Rivercode" className='absolute bottom-0 left-0' />
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-right z-0" style={{backgroundImage: `url(./assets/images/global-reach.png)`}}>
                        <div className="absolute inset-0 bg-[#030529] opacity-90"></div>
                    </div>
                    <div className='h-screen flex flex-col content-center justify-center items-center relative z-50 px-3 sm:px-0'>
                         <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold leading-tight text-white">  Application Support  </h1>
                         <p className="text-sm md:text-base text-white my-3 sm:my-2 text-center sm:text-left"> We provide full lifecycle support for your applications, including: </p>
                         <div className="flex gap-4 items-start my-2 sm:my-5">
                            <img src="./assets/images/icons/tickets.svg" alt="Rivercode" className='h-5 sm:h-7 mt-1' />
                            <h6 className='text-sm sm:text-base md:text-lg text-white'>Ticket management, troubleshooting, <br /> and issue resolution.</h6>
                         </div>
                         <div className="flex gap-4 items-start my-2 sm:my-5">
                            <img src="./assets/images/icons/enhancecments.svg" alt="Rivercode" className='h-5 sm:h-7 mt-1' />
                            <h6 className='text-sm sm:text-base md:text-lg text-white'>Ongoing maintenance, updates, and <br /> feature enhancements.</h6>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSupport;