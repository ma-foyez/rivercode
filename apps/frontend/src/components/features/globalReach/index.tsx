import React from 'react';

const GlobalReach: React.FC = () => {
  return (
    <div>
      <div className="relative">
        {/* Get in touch section */}
        <section 
          style={{backgroundImage: "url('./assets/images/get-in-touch.png')"}} 
          className="h-screen flex flex-col items-start justify-center gap-4 px-4 md:px-16 text-white bg-no-repeat bg-cover bg-center"
        >
          <p className="uppercase text-base md:text-xl font-medium">Why Work with Us?</p>
          <h2 className="text-4xl md:text-[48px] font-bold">Remote Work Opportunities</h2>
          <p className="text-base md:text-xl w-full md:w-[550px]">
            Work from anywhere while contributing to exciting and impactful projects
          </p>
          <a href="#contact" className="text-white bg-[#4EC0F9] py-3 px-6 rounded-lg">
            Get In Touch <i className="fa-solid fa-chevron-right"></i>
          </a>
        </section>
        
        {/* Culture section */}
        <section className="text-white bg-[#1A326A] border-2 border-white md:absolute px-8 py-16 flex flex-col gap-4 -bottom-16 md:right-10 w-full md:w-[650px]">
          <h3 className="text-4xl md:text-[48px] font-bold">Collaborative Culture</h3>
          <p className="text-[#DBDCED]">
            Be part of a diverse team that values collaboration, innovation, and continuous learning
          </p>
        </section>
      </div>
      
      {/* Global reach section */}
      <section 
        style={{backgroundImage: "url('./assets/images/global-reach.png')"}} 
        className="h-screen grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 text-white bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl md:text-[48px] font-bold">Global Reach</h2>
          <p className="text-sm md:text-base">
            With clients on every continent, RiverCode understands the unique challenges of the aviation industry. Our global team brings deep local regulatory knowledge and 24/7 support, ensuring you have the resources and expertise to succeed anywhere. We've built lasting relationships with our customers through an unwavering commitment to innovation and top-tier service, making us a trusted partner worldwide.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center w-full mt-8">
            <Statistic number="180,000+" text="Active Users" />
            <Statistic number="450+" text="Satisfied Clients" />
            <Statistic number="100+" text="Countries Served" />
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatisticProps {
  number: string;
  text: string;
}

const Statistic: React.FC<StatisticProps> = ({ number, text }) => (
  <div>
    <p className="font-bold text-lg md:text-[24px] border-l-2 pl-6 border-[#4EC0F9]">{number}</p>
    <p className="pl-7 md:mt-3 text-sm md:text-base">{text}</p>
  </div>
);

export default GlobalReach;