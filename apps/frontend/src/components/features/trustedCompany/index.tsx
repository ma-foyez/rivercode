import React, {useEffect, useState} from 'react';
import SectionTitle from '../sectionTitle';
import { fetchTrustedCompany } from '../../../utils/cms/fetchTrustedCompany';

const TrustedCompany: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [data, setData] = useState<any>([])
    const [error, setError] = useState<string | null>(null);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const getData = await fetchTrustedCompany();
  //     setData(getData);
  //   } catch (error) {
  //     console.error('Error fetching trusted company data:', error);
  //     setError('Failed to fetch trusted company data');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  //   useEffect(()=>{
  //       fetchData()
  //   }, [])
    
  const data = [
    {title: "CAE", logo: "./assets/images/company/1.png"},
    {title: "BDEING", logo: "./assets/images/company/2.png"},
    {title: "Luxaviation", logo: "./assets/images/company/3.png"},
    {title: "Aviation", logo: "./assets/images/company/4.png"},
    {title: "Flair Airlines", logo: "./assets/images/company/5.png"},
    {title: "Birmingham", logo: "./assets/images/company/6.png"},
  ]

    return (
        <div className='sl-container py-5 lg:py-8'>
           <h1 className={`text-base md:text-lg xl:text-2xl text-[#7B7F85] text-center py-2 md:py-4 font-bold`}> We are trusted by companies like </h1>
            <div className="grid grid-cols-2 xm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center">
              {
                data.map((company, index) => (
                  <div key={index} className='p-2 text-center'>
                    <img src={company.logo} alt={company.title} className='w-full h-auto object-contain' />
                  </div>
                ))
              }
            </div>
        </div>
    );
};

export default TrustedCompany;