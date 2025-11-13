import AppointmentCard from "../../components/AppointmentCard"

export default function PatientDashboard(){

    const patient = {
        patient_id: "P001ABC",
        firstName: "Liam",
        last_name: "Kovacs",
        phone: "+36 70 123 4567",
        email: "liam.kovacs@example.com",
        };

    const appointments = [
    {
        aptDetails: {
        date: "Tue, Nov 18, 2025",
        time: "09:30",
        room: "Debrecen Clinic A, Room 3",
        status: "upcoming",
        },
        doctor: {
        firstName: "Eszter",
        lastName: "Farkas",
        specialist: "Dermatologist",
        },
    },
    {
        aptDetails: {
        date: "Wed, Nov 19, 2025",
        time: "11:15",
        room: "Budapest Clinic B, Room 12",
        status: "completed",
        },
        doctor: {
        firstName: "Balint",
        lastName: "Toth",
        specialist: "Cardiologist",
        },
    },
    {
        aptDetails: {
        date: "Fri, Nov 21, 2025",
        time: "08:00",
        room: "Szeged Health Center, Room 5",
        status: "completed",
        },
        doctor: {
        firstName: "Katalin",
        lastName: "Barta",
        specialist: "Neurologist",
        },
    },
    {
        aptDetails: {
        date: "Mon, Nov 24, 2025",
        time: "16:45",
        room: "Győr Medical Center, Room 9",
        status: "completed",
        },
        doctor: {
        firstName: "Andras",
        lastName: "Kiss",
        specialist: "Orthopedic Surgeon",
        },
    },
    ];




    return(
        <div className="dashboard">
            <div className="dashboard__inner container">
                <main className="dashboard__main">
                    <header className="dashboard__header">
                        <h1 className="dashboard__title">Hi, {patient.firstName}</h1>
                        <p className="dashboard__lead">Manage all your bookings in one place.</p>
                    </header>

                    <section className="dashboard__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Upcoming appointments
                            </h2>
                        </div>
                        <div className="dashboard__list">
                            {appointments.map(appointment => (appointment.aptDetails.status === "upcoming") && (
                                <AppointmentCard 
                                    variant={appointment.aptDetails.status}  
                                    a_Date={appointment.aptDetails.date} 
                                    a_Time={appointment.aptDetails.time} 
                                    a_Room={appointment.aptDetails.room} 
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
                            {appointments.map(appointment => (appointment.aptDetails.status !== "upcoming") && (
                                <AppointmentCard 
                                    variant={appointment.aptDetails.status}  
                                    a_Date={appointment.aptDetails.date} 
                                    a_Time={appointment.aptDetails.time} 
                                    a_Room={appointment.aptDetails.room} 
                                    d_firstName={appointment.doctor.firstName} 
                                    d_lastName={appointment.doctor.lastName} 
                                    d_specialist={appointment.doctor.specialist}
                                />
                            ))}
                        </div>
                    </section>
                    <button className="btn btn--ghost dashboard__btn">See more</button>
                </main>
            </div>
        </div>
    )
}