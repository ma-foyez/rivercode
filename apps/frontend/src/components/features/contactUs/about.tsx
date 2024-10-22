import PageBanner from '../components/features/pageBanner';
import TrustedCompany from '../components/features/trustedCompany';
import ContactUs from '../components/features/contactUs';
import CompanyContent from '../components/features/companyContent';

const AboutPage = () => {
    return (
        <div>
           <PageBanner
           title='About Us'
           content="At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights."
           subTitle='About Us'
           />
           <TrustedCompany/>
           <CompanyContent/>
           <ContactUs/>
        </div>
    );
};

export default AboutPage;