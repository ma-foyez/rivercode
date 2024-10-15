import HomeContact from '../components/features/homeContact';
import GlobalReach from '../components/features/globalReach';
import Hero from '../components/features/hero';
import Project from '../components/features/project';
import Testimonial from '../components/features/testimonial';
import TrustedCompany from '../components/features/trustedCompany';

const HomePage = () => {
    return (
        <div>
           <Hero/> 
           <TrustedCompany/>
           <Project/>
           <GlobalReach/>
           <Testimonial/>
           <HomeContact/>
        </div>
    );
};

export default HomePage;