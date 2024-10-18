import React, { useState } from 'react';
import SectionTitle from '../sectionTitle';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: './assets/images/icons/Group (1).svg',
    title: "Competitive compensation",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: './assets/images/icons/oppertunity-growth.svg',
    title: "Opportunities for professional growth and development",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: './assets/images/icons/Group (2).svg',
    title: "Flexible work arrangements",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions. (remote options available)"
  },
  {
    icon: './assets/images/icons/Group (3).svg',
    title: "Access to cutting-edge tools and technologies",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: './assets/images/icons/Group (4).svg',
    title: "A supportive and inclusive work environment",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: './assets/images/icons/Group.svg',
    title: "Professional Development",
    description: "Gain access to a wide range of tools and resources for your professional growth."
  }
];

const EmployeeBenefits: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-blue text-white sl-section-space">
      <div className="sl-container">
      <SectionTitle title='What We Offer'/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              group border sm:border-none border-gray rounded-lg p-4 sl-animated
              ${hoveredIndex === index ? 'bg-white text-black' : index === 1 && hoveredIndex === null ? 'bg-white text-black' : 'bg-transparent'}
            `}
          >
            <div className="relative h-10 w-10 my-2">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className={`h-full w-full object-contain transition-opacity duration-300 
                  ${hoveredIndex === index || (hoveredIndex === null && index === 1) ? 'opacity-100 filter invert' : 'opacity-100'}
                `}
              />
            </div>

            <div className="flex items-center my-2 sm:my-3">
              <h3 className={`text-base sm:text-lg lg:text-xl font-semibold ${hoveredIndex === index || (hoveredIndex === null && index === 1) ? 'text-black' : 'text-white'}`}>
                {benefit.title}
              </h3>
            </div>
            <p className={`text-sm ${hoveredIndex === index || (hoveredIndex === null && index === 1) ? 'text-black' : 'text-white'}`}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default EmployeeBenefits;
