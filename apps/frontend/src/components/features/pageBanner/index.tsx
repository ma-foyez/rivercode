import React from 'react';
import { NavLink } from 'react-router-dom';

interface IPageBannerProps {
     title: string;
     subTitle: string;
     content: string;
}
const PageBanner: React.FC<IPageBannerProps> = ({title, content, subTitle}) => {
  return (
    <section 
      className="h-screen lg:py-7 relative" >
        <div className="absolute inset-0 xl:bg-cover bg-center z-0" style={{backgroundImage: `url(./assets/images/global-reach.png)`}}>
         <div className="absolute inset-0 bg-blue opacity-60"></div>
      </div>
    <div className="sl-container min-h-screen grid grid-cols-1 md:grid-cols-2 items-center relative z-50">
      <div className="w-full flex flex-col gap-4 sm:gap-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-[92px] font-bold leading-tight text-white">  {title}  </h1>
          <p className="text-sm sm:text-base md:text-lg text-white"> {content} </p>
          <div className="flex gap-4 text-white font-semibold tracking-wide mt-4 sm:mt-0">
            <NavLink to="/">
                <span className="text-white">HOME</span>
            </NavLink>
            <span> | </span> <span>{subTitle}</span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;