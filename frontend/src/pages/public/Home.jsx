import Hero from '../../sections/Hero';
import Features from '../../sections/Features';
import HowItWorks from '../../sections/HowItWorks';
export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      {/* <DoctorProfileCard variant="lp" doctorId="1"/> */}
      <HowItWorks/>
    </>
  );
}