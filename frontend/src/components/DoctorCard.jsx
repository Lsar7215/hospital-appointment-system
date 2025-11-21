import {Link, useLocation} from 'react-router-dom'
import DoctorImage from '../assets/images/doctor1.png'
export default function DoctorCard({doctor_id, first_name, last_name, specialization}) {
    const { pathname } = useLocation();
    const base = pathname.startsWith("/patient") ? "/patient/doctor" : "/doctor";
    return (
        <article className='doctor-card card'>
            <div className='doctor-card__top'>
                <img className='profile-image' src={DoctorImage} alt={`Dr. ${first_name} ${last_name}`} />
                <div className='doctor-card__info'>
                    <h3 className='doctor-card__name'>Dr. {first_name} {last_name}</h3>
                    <p className='badge__specialty badge'>{specialization}</p>

                    <div className='doctor-card__actions'>
                        <Link className='btn btn--ghost doctor-card__button' to={`${base}/${doctor_id}`}>View profile</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}