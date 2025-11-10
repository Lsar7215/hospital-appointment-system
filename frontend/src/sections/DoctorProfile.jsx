import DoctorProfileCard from '../components/DoctorProfileCard'
export default function DoctorProfile() {
  return (
    <section id="book" className="doctor-profile">
      <div className="doctor-profile__inner container">
        <header className="doctor-profile__header">
          <h2 className="doctor-profile__title">Book an appointment</h2>
          <p className="doctor-profile__lead">
            Select a time that works for you. Available slots are updated in real-time.
          </p>
        </header>
        <DoctorProfileCard/>
      </div>
    </section>
  );
}
