import {Link} from 'react-router-dom'

import SearchBar from '../components/SearchBar';
import heroImg from '../assets/images/hero-image.jpg'
export default function Hero() {
  return (
  <section id='top' className="hero">
  <div className="hero__inner container">
    {/* left */}
    <div className="hero__left">
      <h1 className="hero__title">Book trusted doctors in minutes</h1>
      <p className="hero__lead">
        Search by specialization, see real-time availability, and confirm in a few clicks.
      </p>

      {/* mini search */}
      <SearchBar/>

      {/* CTAs */}
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/doctors">Doctors</Link>
        <Link className="btn btn--ghost" to="/signup">Sign up free</Link>
      </div>
    </div>

    {/* right */}
    <div className="hero__right">
      <div className="hero__media">
        <img src={heroImg} alt="Clinic staff" />
      </div>
    </div>
  </div>
</section>

  );
}