import DoctorCard from "../components/DoctorCard"
import downIcon from '../assets/images/icons/down_g.png'

export default function SearchPreview() {
    return(
        <section id='search-preview' className="search-preview">
            <div className="search-preview__inner container">
                <header className="search-preview__header">
                    <h2 className="search-preview__title">Find your doctor</h2>
                    <p className="search-preview__lead">Browse our network of trusted healthcare professionals.</p>
                </header>
                <div className="search search-preview__controls">
                    <div className="search__fields">
                        <div className='search__select-wrap'>
                            <select className="search__select" aria-label="Specialization">
                                <option value="">Select specialization</option>
                                <option value="family-medicine">Family Medicine / GP</option>
                                <option value="internal-medicine">Internal Medicine</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="obgyn">Obstetrics & Gynecology (OB/GYN)</option>
                                <option value="general-surgery">General Surgery</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="ent">ENT (Otolaryngology)</option>
                                <option value="ophthalmology">Ophthalmology</option>
                                <option value="urology">Urology</option>
                                <option value="neurology">Neurology</option>
                                <option value="gastroenterology">Gastroenterology</option>
                                <option value="pulmonology">Pulmonology (Respiratory)</option>
                                <option value="psychiatry">Psychiatry</option>
                            </select>
                            <img className='down__icon' src={downIcon} alt="" />
                        </div>

                        <div className='search__select-wrap'>
                          <select className="search__select" aria-label="date">
                            <option value="Today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                            <option value="week">This week</option>
                          </select>
                          <img className='down__icon' src={downIcon} alt="" />
                        </div>

                        <div className='search__select-wrap'>
                            <select className="search__select" aria-label="Time window">
                                <option value="">Time window</option>
                                <option value="morning">Morning (08:00–12:00)</option>
                                <option value="afternoon">Afternoon (12:00–16:00)</option>
                                <option value="evening">Evening (16:00–20:00)</option>
                            </select>
                            <img className='down__icon' src={downIcon} alt="" />
                        </div>
                        </div>
                    </div>
                    
                <div className="search-preview__grid">
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/><DoctorCard/>
                    <DoctorCard/>
                </div>
            </div>
        </section>
    )
}