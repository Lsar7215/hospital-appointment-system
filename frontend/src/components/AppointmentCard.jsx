import DoctorImage from "../assets/images/doctor1.png";

export default function AppointmentCard({variant="upcoming"}){
    return(
        <article className="doctor-card card">
            <div className="doctor-card__top">
                <img className="doctor-card__profile"src={DoctorImage} alt="Dr. NAME NAME" width={72} height={72}/>
                <div className="doctor-card__info">
                    <h3 className="doctor-card__name">Dr. NAME NAME                    {variant==="upcoming"?(
                        <span className="apt-card__status apt-card__status--booked">Booked</span>       
                    ): (
                        <span className="apt-card__status apt-card__status--completed">Completed</span>
                    )}</h3>
                    <p className="doctor-card__specialty">SPECIALIST</p>
                    <div className="apt-detail">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                            <span>Tue, Nov 18, 2025 · 09:30</span>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            <span>Debrecen Clinic A, Room 3</span>
                        </p>
                    </div>
                </div>
            </div>
            {variant==="upcoming"?(
            <div className="actions">
                <button className="btn btn--ghost">Reschedule</button>
                <button className="btn btn--cancel">Cancel</button>
            </div>        
            ): (
            <div className="actions">
                <button className="btn btn--ghost">Book again</button>
            </div>
            )}
        </article>
    )
}