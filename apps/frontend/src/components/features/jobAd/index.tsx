import React from 'react';

const JobAd: React.FC = () => {
  return (
    <div className="sl-section-space">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 pr-4">
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals who are excited about the aviation
            industry and technology!
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Take Off with RiverCode?
          </h2>
          <p className="text-gray-600 mb-4">
            If you're ready to make an impact in the aviation software industry, send
            your resume and a brief cover letter to careers@rivercode.net.
            We look forward to hearing from you!
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
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