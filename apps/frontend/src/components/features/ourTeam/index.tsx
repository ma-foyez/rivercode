import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '../../elements/button';
import 'swiper/css';
import 'swiper/css/navigation';



interface TeamMemberData {
    id: number;
    image: string;
    department: string;
    description: string;
}

const teamData: TeamMemberData[] = [
    {
        id: 1,
        image: "./assets/images/team/team (1).png",
        department: "Software Department",
        description: "Flight Operations, Enhance Safety, And Improve Efficiency"
    },
    {
        id: 2,
        image: "./assets/images/team/team (2).png",
        department: "Software Department",
        description: "Flight Operations, Enhance Safety, And Improve Efficiency"
    },
    {
        id: 3,
        image: "./assets/images/team/team (3).png",
        department: "Software Department",
        description: "Flight Operations, Enhance Safety, And Improve Efficiency"
    },
    {
        id: 4,
        image: "./assets/images/team/team (1).png",
        department: "Software Department",
        description: "Flight Operations, Enhance Safety, And Improve Efficiency"
    }
];


const OurTeam: React.FC = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <section className="sl-section-space">
            <div className="sl-container mx-auto px-4">

                <div className="mb-12 lg:w-4/5">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#14213D] font-bold mb-4">Join Our Team Of Aviation Innovators</h2>
                    <p className="text-sm lg:text-base text-[#5E646B]">
                        Are you passionate about software development and aviation? At RiverCode, we combine these two worlds to build cutting-edge solutions that transform flight operations, enhance safety, and improve efficiency. Our team is made up of developers, pilots, and technology enthusiasts who share a common goal: to innovate and lead the future of aviation technology.
                    </p>
                </div>

                {domLoaded && (
                    <div className="relative">
                            <div className="absolute -top-20 right-10 transform -translate-x-1/2 z-10">
                                <div className="inline-flex items-center">
                                    <button className="swiper-button-prev after:content-[''] bg-sky text-white px-5 py-4">
                                        <i className="fa-solid fa-right-long absolute text-white z-40 "></i>
                                    </button>
                                    <button className="swiper-button-next bg-blue text-white px-5 py-4">
                                        <i className="fa-solid fa-left-long absolute text-white z-40 "></i>
                                    </button>
                                </div>
                            </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-8"
                        >
                            {teamData.map((member) => (
                                <SwiperSlide key={member.id} className="relative">
                                    <div className="relative aspect-w-3 aspect-h-2 mb-4">
                                        <img 
                                            src={member.image} 
                                            alt={member.department}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className=" bg-white p-4 absolute w-[90%] bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                                            <h3 className="text-sm font-semibold text-[#5E646B]">{member.department}</h3>
                                         <div className="flex gap-2 mt-2">
                                         <p className="text-xs text-[#14213D]">{member.description} </p>
                                         <p><i className="fa-solid fa-location-arrow text-[#14213D]"></i></p>
                                         </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
               
            </div>
        </section>
    );
};

export default OurTeam;