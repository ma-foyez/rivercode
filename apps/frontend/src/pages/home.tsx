import GlobalReach from '../components/features/globalReach';
import Hero from '../components/features/hero';
import Project from '../components/features/project';
import TrustedCompany from '../components/features/trustedCompany';

const HomePage = () => {
    return (
        <div>
           <Hero/> 
           <TrustedCompany/>
           <Project/>
           <GlobalReach/>
        </div>
    );
};

export default HomePage;