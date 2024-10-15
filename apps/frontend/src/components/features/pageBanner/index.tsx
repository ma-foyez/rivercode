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
      className="h-screen w-full bg-cover bg-center bg-no-repeat lg:py-7"
      style={{ 
        backgroundImage: `url(./assets/images/global-reach.png)`,
       }}
    >
    <div className="sl-container min-h-screen grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="w-full flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl 2xl:text-[92px] font-bold leading-tight text-white">  {title}  </h1>
          <p className="text-base md:text-lg text-white"> {content} </p>
          <div className="flex gap-4 text-white font-semibold tracking-wide">
            <NavLink to="/">
                <span className="text-white">HOME</span>
            </NavLink>
            <span> | </span> <span>SERVICE PAGE</span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;