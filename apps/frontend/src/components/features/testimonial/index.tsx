/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SectionTitle from '../sectionTitle';
import { fetchTestimonials } from '../../../utils/cms/fetchTestimonials';
import { ITestimonial } from '../../../utils/interface';
import LoadingSkeleton from '../loadingSkeleton';

const Testimonial: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([])

const fetchData = async () => {
  setIsLoading(true);
  try {
    const getData = await fetchTestimonials();
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
            <p className='uppercase text-sm md:text-base xl:text-lg text-dark-gray font-semibold absolute -top-3 sm:top-2 left-1/2 transform -translate-x-1/2  md:left-0 md:-translate-x-0 '>Testimonial</p>
            <SectionTitle title='Here is what our customers say'/>
          </div>
          {isLoading && <LoadingSkeleton count={4} /> }
        </div>
      {domLoaded && data && data.length > 0 && (
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((testimonial: ITestimonial, index: number) => (
            <SwiperSlide key={index} className="swiper-slide bg-gray p-8 text-[#1A326A] flex flex-col gap-4 my-5">
              <div className="text-[#FFBD32]">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-[#5E646B]">{testimonial.message}</p>
              <p className="uppercase text-base md:text-xl text-blue font-semibold">{testimonial.author}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="inline-flex items-center">
          <button className="swiper-button-prev bg-sky text-white px-5 py-4">
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button className="swiper-button-next bg-sky text-white px-5 py-4">
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
