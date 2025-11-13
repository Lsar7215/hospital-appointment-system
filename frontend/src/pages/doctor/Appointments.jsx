import { useState, useEffect } from "react";
import DoctorAppointmentCard from "../../components/DoctorAppointmentCard"

export default function Appointments(){
  const doctor ={
    doctor_id:"123",
    first_name:"FIRST_NAME",
    last_name:"LAST_NAME",
  }

  const [appts, setAppts] = useState([
    { id: 111, 
      status: "Upcoming",
      patientState:"first visit", 
      date:"Tue, Nov 18, 2025", 
      time:"09:30", 
      description:"", 
      location:"Debrecen Clinic A, Room 3", 
      patient:{
        patient_id: "1234ABC",
        firstName: "FirstName",
        last_name: "last_name",
        phone: "+36 70 000 0000",
        email: "example@mail.com",
      }
    },
    { id: 112, 
      status: "Upcoming",
      patientState:"follow-up", 
      date:"Tue, Nov 18, 2025", 
      time:"09:30", 
      description:"text", 
      location:"Debrecen Clinic A, Room 3", 
      patient:{
        patient_id: "1234ABC",
        firstName: "FirstName",
        last_name: "last_name",
        phone: "+36 70 000 0000",
        email: "example@mail.com",
      }
    },
    { id: 113, 
      status: "Completed",
      patientState:"first visit", 
      date:"Tue, Nov 18, 2025", 
      time:"09:30", 
      description:"text", 
      location:"Debrecen Clinic A, Room 3", 
      patient:{
        patient_id: "1234ABC",
        firstName: "FirstName",
        last_name: "last_name",
        phone: "+36 70 000 0000",
        email: "example@mail.com",
      }
    },
    { id: 114, 
      status: "Cancelled",
      patientState:"follow-up", 
      date:"Tue, Nov 18, 2025", 
      time:"09:30", 
      description:"", 
      location:"Debrecen Clinic A, Room 3", 
      patient:{
        patient_id: "1234ABC",
        firstName: "FirstName",
        last_name: "last_name",
        phone: "+36 70 000 0000",
        email: "example@mail.com",
      }
    },
  ]);
  
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

    return(
        <div className="dashboard">
            <div className="dashboard__inner container">
                <main className="dashboard__main">
                    <header className="dashboard__header">
                        <h1 className="dashboard__title">Hi, {doctor.first_name}</h1>
                        <p className="dashboard__lead">Manage all your bookings in one place.</p>
                    </header>

                    <section className="dashboard__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Upcoming appointments
                            </h2>
                        </div>
                        <div className="dashboard__list">
                            {appts.map(a =>
                                a.status === "Upcoming" && (
                                    <DoctorAppointmentCard
                                        key={a.id}
                                        patientState={a.patientState}  
                                        appointmentId={a.id} 
                                        appointmentDate={a.date}
                                        appointmentTime={a.time}
                                        appointmentLocation={a.location}
                                        variant={a.status}
                                        p_email={a.patient.email}
                                        p_phone={a.patient.phone}
                                        p_fname={a.patient.firstName}
                                        p_lname={a.patient.last_name}
                                        note={notesByApt[a.id] ?? a.description ?? ""} 
                                        onSaveNote={handleSaveNote} 
                                    />
                                )
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
                            {appts.map(a =>
                                a.status !== "Upcoming" && (
                                    <DoctorAppointmentCard
                                        key={a.id}
                                        patientState={a.patientState}  
                                        appointmentId={a.id} 
                                        appointmentDate={a.date}
                                        appointmentTime={a.time}
                                        appointmentLocation={a.location}
                                        variant={a.status}
                                        p_email={a.patient.email}
                                        p_phone={a.patient.phone}
                                        p_fname={a.patient.firstName}
                                        p_lname={a.patient.last_name}
                                        note={notesByApt[a.id] ?? a.description ?? ""} 
                                        onSaveNote={handleSaveNote} 
                                    />
                                )
                            )}
                        </div>
                    </section>
                    <button className="btn btn--ghost dashboard__btn">See more</button>
                </main>
            </div>
        </div>
    )
}