import {Link} from 'react-router-dom'
import DoctorImage from '../assets/images/doctor1.png'
export default function DoctorCard() {
    return (
        <article className='doctor-card card'>
            <div className='doctor-card__top'>
                <img className='doctor-card__profile' src={DoctorImage} alt="" />
                <div className='doctor-card__info'>
                    <h3 className='doctor-card__name'>Dr. NAME NAME</h3>
                    <p className='doctor-card__specialty'>SPECIALIST</p>
                </div>
            </div>
            <div className='doctor-card__actions'>
                <Link className='btn btn--ghost doctor-card__button' to="/doctor">View profile</Link>
            </div>
        </article>
    )
}