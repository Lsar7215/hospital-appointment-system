import AppointmentCard from "../../components/AppointmentCard"

export default function PatientDashboard(){
    const user = {firstName: "NAME"}
    return(
        <div className="patient">
            <div className="patient__inner container">
                <main className="patient__main">
                    <header className="patient__header">
                        <h1 className="patient__title">Hi, {user.firstName}</h1>
                        <p className="patient__lead">Manage all your bookings in one place.</p>
                    </header>

                    <section className="patient__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Upcoming appointments
                            </h2>
                        </div>
                        <div className="patient__list">
                            <AppointmentCard variant="upcoming"/>
                        </div>
                    </section>
                    <hr />
                    <section className="patient__section">
                        <div className="section-head">
                            <h2 className="section-head__title">
                                Appointment history
                            </h2>
                        </div>
                        <div className="patient__list">
                            <AppointmentCard variant="past"/>
                            <AppointmentCard variant="past"/>
                            <AppointmentCard variant="past"/>
                        </div>
                    </section>
                    <button className="btn btn--ghost patient__btn">See more</button>
                </main>
            </div>
        </div>
    )
}