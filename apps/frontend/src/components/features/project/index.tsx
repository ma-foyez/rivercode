import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProjectData {
    id: number;
    image: string;
    title: string;
    description: string;
}

const dummyData: ProjectData[] = [
    {
        id: 1,
        image: "./assets/images/project-1.png",
        title: "Aviation Operations Platforms",
        description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
    },
    {
        id: 2,
        image: "./assets/images/project-2.png",
        title: "Aviation Operations Platforms",
        description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
    },
    {
        id: 3,
        image: "./assets/images/project-3.png",
        title: "Aviation Operations Platforms",
        description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
    },
    {
        id: 4,
        image: "./assets/images/project-3.png",
        title: "Aviation Operations Platforms",
        description: "Designed and developed SD Pro, centralizing critical flight information for more data-driven decisions."
    }
];


const Project: React.FC = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="sl-section-space">
            <div className='sl-container '>
                <div className="relative">
                        <p className='uppercase text-base lg:text-lg text-dark-gray font-semibold absolute left-0 top-2'>project</p>
                        <SectionTitle title='Previous Projects'/>
                </div>
            </div>
            {domLoaded && (
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
                                {dummyData.map((project) => (
                                    <SwiperSlide key={project.id}>
                                        <img src={project.image} alt={`Project ${project.id}`} className="w-full h-auto object-cover" />
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