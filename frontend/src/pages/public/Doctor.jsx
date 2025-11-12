
import DoctorProfileCard from '../../components/DoctorProfileCard'
export default function Doctor(){
    return(
        <div className="doctor">
            <div className='container'>
                <div className='doctor__header'>
                    <h1 className='doctor__title'>Book an Appointment</h1>
                    <p className='doctor__lead'>Choose a time that works for you. Availability updates in real time.</p>
                </div>
                <DoctorProfileCard/>
            </div>
        </div>
    )
}