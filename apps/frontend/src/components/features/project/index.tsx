/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IProject } from '../../../utils/interface';
import { fetchProject } from '../../../utils/cms/fetchProjects';
import { urlForThumbnail } from '../../../utils/cms/_helper/imageProcess';
import LoadingSkeleton from '../loadingSkeleton';

const Project: React.FC = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>([])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const getData = await fetchProject();
      setData(getData);
    } catch (error) {
      console.error('Error fetching trusted company data:', error);
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(() => {
        setDomLoaded(true);
        fetchData()
    }, []);

    return (
        <div className="sl-section-space">
            <div className='sl-container '>
              <div className="relative">
                    <p className="uppercase text-sm md:text-base xl:text-lg text-dark-gray font-semibold absolute -top-3 sm:-top-3 left-1/2 sm:left-3 transform -translate-x-1/2 md:-translate-x-0 "> project </p>
                    <SectionTitle title='Previous Projects'/>
               </div>
            </div>
            { isLoading && (
                <div className="sl-container">
                     <LoadingSkeleton cardType='card' count={4} /> 
                </div>
            )
            }
            {domLoaded && data && data.length > 0 && (
                        <div className="w-full h-full my-4 sm:my-8 overflow-hidden pb-20 relative px-2 sm:px-0">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {data.map((project: IProject, index : number) => (
                                    <SwiperSlide key={index}>
                                        <img src={urlForThumbnail(project.banner)} alt={`Project ${project.title}`} className="w-full h-auto object-cover" />
                                       <div className="px-2">
                                        <h3 className="font-bold text-lg sm:text-[30px] mt-6 mb-2">{project.title}</h3>
                                        <p className="text-sm sm:text-base lg:text-lg text-[#5E646B]">{project.description}</p>
                                       </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="inline-flex items-center">
                                    <button className="swiper-button-prev after:content-[''] bg-sky text-white px-5 py-4">
                                        <i className="fa-solid fa-right-long absolute text-white z-40 "></i>
                                    </button>
                                    <button className="swiper-button-next bg-blue text-white px-5 py-4">
                                        <i className="fa-solid fa-left-long absolute text-white z-40 "></i>
                                    </button>
                                </div>
                            </div>


                        </div>
                    )}
        </div>
        
    );
};

export default Project;