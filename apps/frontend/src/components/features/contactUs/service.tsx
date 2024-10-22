import PageBanner from '../components/features/pageBanner';
import TrustedCompany from '../components/features/trustedCompany';
import ContactUs from '../components/features/contactUs';
import SoftwareDepartment from '../components/features/softwareDepartment';
import CustomerSupport from '../components/features/customerSupport';

const ServicePage = () => {
    return (
        <div>
        <PageBanner
        title='Services'
        content="At RiverCode, we create innovative software tailored to the unique needs of private jet operators and beyond. Our solutions drive efficiency, streamline operations, and empower businesses to soar to new heights."
        subTitle='Services'
        />
        <TrustedCompany/>
        <SoftwareDepartment/>
        <CustomerSupport/>
        <ContactUs/>
     </div>
    );
};

export default ServicePage;