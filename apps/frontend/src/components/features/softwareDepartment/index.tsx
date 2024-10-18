import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '../../elements/button';
import 'swiper/css';
import 'swiper/css/navigation';
interface SoftwareData {
    id: number;
    image: string;
    title: string;
    description: string;
}

const dummyData: SoftwareData[] = [
    {
        id: 1,
        image: "./assets/images/software/software (1).png",
        title: "Aviation Operations Platforms",
        description: "Machine Learning (ML) for predictive insights and process automation."
    },
    {
        id: 2,
        image: "./assets/images/software/software (2).png",
        title: "Aviation Operations Platforms",
        description: "API Development & Integration to securely connect your systems with third-party applications."
    },
    {
        id: 3,
        image: "./assets/images/software/software (3).png",
        title: "Aviation Operations Platforms",
        description: "Database Creation & Support to design, maintain, and optimize your data infrastructure."
    },
    {
        id: 3,
        image: "./assets/images/software/software (3).png",
        title: "Aviation Operations Platforms",
        description: "Database Creation & Support to design, maintain, and optimize your data infrastructure."
    }
];

const SoftwareDepartment: React.FC = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <section className="sl-section-space">
            <div className="sl-container">
                <div className="text-center mb-8 sm:mb-12">
                    <SectionTitle title="Software Development" />
                    <p className="text-sm lg:text-base text-[#5E646B] mt-4">
                        We create custom, scalable software solutions designed to optimize aviation and other industry operations.
                    </p>
                </div>

                <div className="mb-20 sm:mb-8">
                    <h2 className="text-xl md:text-2xl text-blue font-bold mb-2 text-center sm:text-left">Data Management</h2>
                    <p className="text-sm lg:text-base text-[#5E646B]">
                        Our data management services ensure your operations run smoothly with:
                    </p>
                </div>

                {domLoaded && (
                    <div className="w-full h-full pb-1 sm:pb-20 relative">
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
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className=""
                        >
                            {dummyData.map((project) => (
                                <SwiperSlide key={project.id} className="">
                                    <div className="bg-gray-100 aspect-w-16 aspect-h-9 mb-4">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="object-cover w-full h-full max-h-80"
                                        />
                                    </div>
                                    <p className="text-[#5E646B] mb-4 flex-grow">{project.description}</p>
                                    <Button
                                        title="View More"
                                        type="button"
                                        iconPosition="right"
                                        variant="light"
                                        icon={<i className="fa-solid fa-location-arrow"></i>}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
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
                        
                    </div>
                )}
            </div>
        </section>
    );
};

export default SoftwareDepartment;