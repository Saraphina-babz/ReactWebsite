import Hero from '../components/Hero';
import HomeCards from '../components/Job_listings'
import JobListings from '../components/Job_listings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
     <Hero/>
     <HomeCards/>
     <JobListings/>
     <ViewAllJobs/>
    </>
  );
};

export default HomePage;