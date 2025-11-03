import {Link} from 'react-router-dom'

import DoctorImage from "../assets/images/doctor1.png";
export default function DoctorProfileCard(){
    return (
                <div className="doctor-profile__content">
                  <article className="doctor-profile__card">
                    <div className="doctor-card__top">
                      <img
                        className="doctor-card__profile"
                        src={DoctorImage}
                        alt="Dr. NAME NAME"
                        width={72}
                        height={72}
                      />
                      <div className="doctor-card__info">
                        <h3 className="doctor-card__name">Dr. NAME NAME</h3>
                        <p className="doctor-card__specialty">SPECIALIST</p>
                      </div>
                    </div>
        
                    <div className="doctor-card__about">
                      <h3 className="doctor-card__about-title">About</h3>
                      <p className="doctor-card__about-text">
                        Dr. Novak specializes in preventive cardiology and heart disease management. She is
                        committed to providing personalized care and treatment plans for each patient.
                      </p>
                    </div>
                  </article>
        
                  <div className="availability doctor-profile__availability">
                    <h3 className="availability__title">Available times</h3>
                    <p className="availability__date">Tuesday, October 15, 2025</p>
        
                    <div className="availability__grid">
                      <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                                   <button
                        className="availability__slot availability__slot--available"
                        type="button"
                      >
                        09:00
                      </button>
                      <button
                        className="availability__slot availability__slot--unavailable"
                        type="button"
                        disabled
                        aria-disabled="true"
                      >
                        10:30
                      </button>
                    </div>
        
                    <div className="availability__legend">
                      <div className="availability__legend-item-wrap">
                        <div className="availability__legend-item availability__legend-item--available"></div>
                        <span>Available</span>
                      </div>
                      <div className="availability__legend-item-wrap">
                        <div className="availability__legend-item availability__legend-item--unavailable"></div>
                        <span>Unavailable</span>
                      </div>
                    </div>
        
                    <div className="availability__gate-wrap">
                      <p className="availability__gate">Please log in to book an appointment</p>
                    </div>
                    
                    <Link className="btn btn--primary availability__cta" to="/login">Log in to Book</Link>
                  </div>
                </div>
    )
}