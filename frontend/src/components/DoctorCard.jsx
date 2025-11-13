import {Link} from 'react-router-dom'
import DoctorImage from '../assets/images/doctor1.png'
export default function DoctorCard({variant}) {
    const isPatient = variant === "patient";

    const doctor = {
        firstName: "FirstName",
        lastName: "LastName",
        specialist: "SPECIALIST",
        aboutText: "Dr. Novak specializes in preventive cardiology and heart disease management. She is committed to providing personalized care and treatment plans for each patient."
    }


    return (
        <article className='doctor-card card'>
            <div className='doctor-card__top'>
                <img className='doctor-card__profile' src={DoctorImage} alt={`Dr. ${doctor.firstName} ${doctor.lastName}`} />
                <div className='doctor-card__info'>
                    <h3 className='doctor-card__name'>Dr. {doctor.firstName} {doctor.lastName}</h3>
                    <p className='doctor-card__specialty'>{doctor.specialist}</p>

                    <div className='doctor-card__actions'>
                        {isPatient?
                        (<Link className='btn btn--ghost doctor-card__button' to="/patient/doctor">View profile</Link>)
                        :
                        (<Link className='btn btn--ghost doctor-card__button' to="/doctor">View profile</Link>)}
                    </div>
                </div>
            </div>
        </article>
    )
}