import React from 'react';
import ContentDetails from '../contentDetails';

const JobAd: React.FC = () => {
  return (
    <div className="sl-section-space">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 px-10 lg:px-20 order-2 lg:order-1">
           <ContentDetails content="We're always looking for talented individuals who are excited about the aviation
            industry and technology!"/>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Take Off with RiverCode?
          </h2>
          <ContentDetails content="If you're ready to make an impact in the aviation software industry, send
            your resume and a brief cover letter to careers@rivercode.net.
            We look forward to hearing from you!"/>
        </div>
        <div className="md:w-1/3 flex justify-center order-1 lg:order-2 pl-5 lg:pl-0">
          <img
            src="/assets/images/plan.png"
            alt="Private jet"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default JobAd;