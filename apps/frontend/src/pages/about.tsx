import React from 'react';
import PageBanner from '../components/features/pageBanner';

const AboutPage = () => {
    return (
        <div>
           <PageBanner
           title='About Us'
           content="At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights."
           subTitle='About Us'
           />
        </div>
    );
};

export default AboutPage;