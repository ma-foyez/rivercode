import React from 'react';
import PageBanner from '../components/features/pageBanner';
import ContactUs from '../components/features/contactUs';
import OurTeam from '../components/features/ourTeam';

const CareerPage = () => {
    return (
        <div>
        <PageBanner
        title='Careers'
        content="At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights."
        subTitle='Careers'
        />
        <OurTeam/>
        <ContactUs/>
     </div>
    );
};

export default CareerPage;