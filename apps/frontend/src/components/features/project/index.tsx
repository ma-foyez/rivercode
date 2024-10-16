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
                        <p className='uppercase text-base lg:text-lg text-dark-gray font-semibold absolute left-0 top-2'>project</p>
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
                        <div className="w-full h-full my-10 overflow-hidden pb-20 relative">
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
                                        <h3 className="font-bold text-[30px] mt-6">{project.title}</h3>
                                        <p className="text-[#5E646B]">{project.description}</p>
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