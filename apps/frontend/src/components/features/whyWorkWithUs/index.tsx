import React from 'react';
import ContentDetails from '../contentDetails';

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Industry Impact",
    description: "At RiverCode, your work will directly influence the aviation industry. From developing real-time monitoring tools to creating advanced flight management software, you'll have the opportunity to work on projects that matter."
  },
  {
    title: "Remote Flexibility",
    description: "We believe in flexibility. RiverCode offers remote work options, allowing you to work from anywhere while contributing to our mission. Our developers have access to Microsoft Dev Boxes, MSDN licenses, Office 365, and Azure DevOps to ensure they have the tools they need, wherever they are."
  },
  {
    title: "Collaborative Culture",
    description: "Our team thrives on collaboration. You'll work alongside aviation experts and developers who are as passionate about innovation as you are. Together, we solve real-world challenges and create impactful solutions."
  }
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <div className="sl-section-space">
      <div className="sl-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
            <div className='order-2 lg:order-1'>
              <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight text-[#232834] mt-5 lg:mt-0 mb-4"> Why Work with Us? </h2>
            {
                benefits.map((benefit, index) => (
                <div key={index} className='flex gap-4 items-start mt-2 sm:mt-5'>
                    <p><i className="text-xl fa-solid fa-circle-check text-sky mt-1"></i></p>
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#232834]">{benefit.title}</h3>
                        <ContentDetails content={benefit.description}/>
                    </div>
                </div>
                ))
            
            }

            </div>

            <div className='relative  sm:h-screen xl:h-auto order-1 lg:order-2'>
                <img src="./assets/images/Mask group.png" alt="Rivercode" className='w-full object-fit h-[320px] sm:h-screen xl:h-[550px]' />
                 <img src="./assets/images/icons/Elements_Blue-Angle-Bottom-Left 2.png" alt="Rivercode" className='absolute bottom-0 right-0 transform scale-x-[-1]' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;