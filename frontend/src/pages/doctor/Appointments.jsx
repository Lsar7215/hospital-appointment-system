import { useState, useEffect } from "react";
import DoctorAppointmentCard from "../../components/DoctorAppointmentCard"

import { getAppointmentsWithPatients } from "../../data/mockData";

export default function Appointments(){
    //demo data
  const doctor ={
      doctor_id: 1,
      first_name: "Emily",
      last_name: "Horvath",
      specialization: "Cardiologist",
  }

  const appointments = getAppointmentsWithPatients(doctor.doctor_id);
  const [notesByApt, setNotesByApt] = useState(()=>{
    try{
      return JSON.parse(localStorage.getItem("notesByApt")||"{}");
    } catch{
      return {};
    }
  });

  useEffect(()=>{
    localStorage.setItem("notesByApt", JSON.stringify(notesByApt));
  }, [notesByApt]);

  const handleSaveNote = (appointmentId, text) => {
    setNotesByApt(prev => ({ ...prev, [appointmentId]: text }));
  };

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
                        <h1 className="head__title">Hi, {doctor.first_name}</h1>
                        <p className="head__lead">Manage all your bookings in one place.</p>
                    </header>

                    <section className="dashboard__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Upcoming appointments
                            </h2>
                        </div>
                        <div className="dashboard__list">
                            {upcomingAppointments.map(a =>
                            <DoctorAppointmentCard
                                key={a.a_id}
                                appointmentId={a.a_id}
                                patientState={a.patient_state}  
                                variant={a.appointment_status}
                                appointmentDate={a.appointment_date}
                                appointmentTime={a.appointment_time}
                                appointmentLocation={a.room}
                                p_fname={a.patient.first_name}
                                p_lname={a.patient.last_name}
                                p_email={a.patient.email}
                                p_phone={a.patient.phone}
                                note ={notesByApt[a.a_id] ?? a.description ?? ""} 
                                onSaveNote={handleSaveNote} 
                            />
                            )}
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
                            {visibleHistoryAppointments.map(a =>
                            <DoctorAppointmentCard
                                key={a.a_id}
                                appointmentId={a.a_id}
                                patientState={a.patient_state}  
                                variant={a.appointment_status}
                                appointmentDate={a.appointment_date}
                                appointmentTime={a.appointment_time}
                                appointmentLocation={a.room}
                                p_fname={a.patient.first_name}
                                p_lname={a.patient.last_name}
                                p_email={a.patient.email}
                                p_phone={a.patient.phone}
                                note ={notesByApt[a.a_id] ?? a.description ?? ""} 
                                onSaveNote={handleSaveNote} 
                            />
                            )}
                        </div>
                    </section>
                        {historyAppointments.length > 5 && (
                            <button 
                                className="btn btn--ghost btn--see-more"
                                onClick={()=> setShowAllHistory((prev) => !prev)}
                            >{showAllHistory ? "See less" : "See more"}</button>
                        )
                        }
                </main>
            </div>
        </div>
    )
}