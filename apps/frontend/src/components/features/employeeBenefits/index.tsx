import React from 'react';
import { DollarSign, GraduationCap, Clock, Network, Users, BookOpen } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Competitive compensation",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Opportunities for professional growth and development",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Flexible work arrangements",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions. (remote options available)"
  },
  {
    icon: <Network className="w-8 h-8 text-white" />,
    title: "Access to cutting-edge tools and technologies",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "A supportive and inclusive work environment",
    description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Professional Development",
    description: "Gain access to a wide range of tools and resources for your professional growth."
  }
];

const EmployeeBenefits: React.FC = () => {
  return (
    <div className="bg-blue-900 p-8 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-blue-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {benefit.icon}
              <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
            </div>
            <p className="text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeBenefits;