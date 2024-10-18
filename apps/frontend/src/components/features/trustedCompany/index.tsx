/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, {useEffect, useState} from 'react';
import { fetchTrustedCompany } from '../../../utils/cms/fetchTrustedCompany';
import { ICompany } from '../../../utils/interface';
import { urlForThumbnail } from '../../../utils/cms/_helper/imageProcess';
import LoadingSkeleton from '../loadingSkeleton';

const TrustedCompany: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const getData = await fetchTrustedCompany();
      setData(getData);
    } catch (error) {
      console.error('Error fetching trusted company data:', error);
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(()=>{
        fetchData()
    }, [])
    

    return (
        <div className='sl-container py-5 lg:py-8'>
           <h1 className={`text-base md:text-lg xl:text-2xl text-[#7B7F85] text-center py-2 md:py-4 font-bold`}> We are trusted by companies like </h1>
           {isLoading && <LoadingSkeleton count={4} /> }
           {
            !isLoading && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center py-2 sm:py-5">
              {
               data && data.length > 0 && data.map((company:ICompany, index: number) => (
                  <div key={index} className='p-4 text-center'>
                    <img src={urlForThumbnail(company.logo)} alt={company.title} className='w-full h-auto object-contain' />
                  </div>
                ))
              }
            </div>
            )
           }
            
        </div>
    );
};

export default TrustedCompany;