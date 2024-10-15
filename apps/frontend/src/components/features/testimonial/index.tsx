import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SectionTitle from '../sectionTitle';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The company is called Rivercode. It is a software company that specializes in aviation-related software but is open for business in other industries. I am looking for a modern, bold, attractive web design.",
    author: "Maryam Sicard"
  },
  {
    id: 2,
    rating: 5,
    text: "The company is called Rivercode. It is a software company that specializes in aviation-related software but is open for business in other industries. I am looking for a modern, bold, attractive web design.",
    author: "Maryam Sicard"
  },
  {
    id: 3,
    rating: 5,
    text: "The company is called Rivercode. It is a software company that specializes in aviation-related software but is open for business in other industries. I am looking for a modern, bold, attractive web design.",
    author: "Maryam Sicard"
  },
  {
    id: 4,
    rating: 5,
    text: "The company is called Rivercode. It is a software company that specializes in aviation-related software but is open for business in other industries. I am looking for a modern, bold, attractive web design.",
    author: "Maryam Sicard"
  }
];

const Testimonial: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="sl-section-space">
       <div className='sl-container '>
          <div className="relative">
            <p className='uppercase text-base lg:text-lg text-dark-gray font-semibold absolute left-0 top-2'>project</p>
            <SectionTitle title='Here is what our customers say'/>
          </div>
        </div>
      {domLoaded && (
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="swiper-slide bg-gray p-8 text-[#1A326A] flex flex-col gap-4 my-5">
              <div className="text-[#FFBD32]">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-blue text-lg md:text-[24px]">{testimonial.text}</p>
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
