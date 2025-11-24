import {useState} from "react";
import AppointmentCard from "../../components/AppointmentCard"
import { getPatientAppointments } from '../../data/mockData'

export default function PatientDashboard(){
    //demo
    const patientId = 1;
    const first_name = "Laura";
    
    const appointments = getPatientAppointments(patientId);


    const upcomingAppointments = appointments.filter(
        (appointment) => appointment.appointment_status === "upcoming"
    );

    const historyAppointments = appointments.filter(
        (appointment) => appointment.appointment_status !== "upcoming"
    );

    const [showAllHistory, setShowAllHistory] = useState(false);

    const visibleHistoryAppointments = showAllHistory
        ? historyAppointments
        : historyAppointments.slice(0, 5);


    return(
        <div className="dashboard">
            <div className="dashboard__inner container">
                <main className="dashboard__main">
                    <header className="dashboard__header">
                        <h1 className="head__title">Hi, {first_name}</h1>
                        <p className="head__lead">Manage all your bookings in one place.</p>
                    </header>

                    <section className="dashboard__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Upcoming appointments
                            </h2>
                        </div>
                        <div className="dashboard__list">
                            {upcomingAppointments.map(appointment => (
                                <AppointmentCard 
                                    key={appointment.patient_id}
                                    variant={appointment.appointment_status}  
                                    a_Date={appointment.date} 
                                    a_Time={appointment.time} 
                                    a_Room={appointment.room}
                                    d_id={appointment.doctor.id} 
                                    d_firstName={appointment.doctor.firstName} 
                                    d_lastName={appointment.doctor.lastName} 
                                    d_specialist={appointment.doctor.specialist}
                                />
                            ))}
                        </div>
                    </section>
                    <hr />
                    <section className="dashboard__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Appointment history
                            </h2>
                        </div>
                        <div className="dashboard__list">
                            {visibleHistoryAppointments.map(appointment => (appointment.appointment_status !== "upcoming") && (
                                <AppointmentCard 
                                    variant={appointment.appointment_status}  
                                    a_Date={appointment.date} 
                                    a_Time={appointment.time} 
                                    a_Room={appointment.room} 
                                    d_id={appointment.doctor.id}
                                    d_firstName={appointment.doctor.firstName} 
                                    d_lastName={appointment.doctor.lastName} 
                                    d_specialist={appointment.doctor.specialist}
                                />
                            ))}
                        </div>
                        {historyAppointments.length > 5 && (
                            <button 
                                className="btn btn--ghost btn--see-more"
                                onClick={()=> setShowAllHistory((prev) => !prev)}
                            >{showAllHistory ? "See less" : "See more"}</button>
                        )
                        }
                    </section>
                </main>
            </div>
        </div>
    )
}