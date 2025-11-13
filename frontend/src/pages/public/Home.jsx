import Hero from '../../sections/Hero';
import Features from '../../sections/Features';
import SearchPreview from '../../sections/SearchPreview';
import DoctorProfile from '../../sections/DoctorProfile';
import HowItWorks from '../../sections/HowItWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <SearchPreview/>
      <DoctorProfile variant = "lp"/>
      <HowItWorks/>
    </>
  );
}