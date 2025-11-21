import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DoctorImage from "../assets/images/doctor1.png";
import BookingModal from "./BookingModal"

export default function AppointmentCard({
  variant,
  a_Date, 
  a_Time, 
  a_Room, 
  d_id, 
  d_firstName, 
  d_lastName, 
  d_specialist
}){


    const [cancelOpen, setCancelOpen] = useState(false);
    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    const [bookingMode, setBookingMode] = useState("book");

    const getRawDate = (dateStr) => {
      try {
        const date = new Date(dateStr);
        return date.toISOString().split('T')[0];
      } catch {
        return new Date().toISOString().split('T')[0];
      }
    };

    const handleRescheduleClick = () => {
      setBookingMode("reschedule");
      setBookingModalOpen(true);
    };

    const handleBookAgainClick = () => {
      setBookingMode("book");
      setBookingModalOpen(true);
    };

    const currentAppointment = {
      date: a_Date,
      time: a_Time,
      rawDate: getRawDate(a_Date), // For date picker
      room: a_Room
    };

    return(
      <>
        <article className="doctor-card card">
            <div className="doctor-card__top">
                <img className="profile-image"src={DoctorImage} alt={`Dr. ${d_firstName} ${d_lastName}`} width={72} height={72}/>
                <div className="doctor-card__info">
                    <h3 className="doctor-card__name">{`Dr. ${d_firstName} ${d_lastName}`}                   
                    {variant==="upcoming"?(
                        <span className="badge badge--booked">Upcoming</span>       
                    ): (
                        <span className="badge badge--completed">Completed</span>
                    )}
                    </h3>
                    <p className="badge__specialty badge">{d_specialist}</p>
                    <div className="apt-detail">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                            <span>{a_Date} · {a_Time}</span>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            <span>{a_Room}</span>
                        </p>
                    </div>
                </div>
            </div>
            {variant==="upcoming"?(
            <div className="actions">
                <button className="btn btn--ghost" onClick={handleRescheduleClick}>Reschedule</button>
                  <Button variant="outlined" onClick={() => setCancelOpen(true)} className="btn btn--cancel">
                    Cancel
                  </Button>
                  <Dialog
                    open={cancelOpen}
                    onClose={() => setCancelOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Cancel your appointment?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description" style={{ color: '#000' }}>
                        You’re about to cancel your appointment with Dr.{d_firstName} {d_lastName} on {a_Date} at {a_Time}.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setCancelOpen(false)}>Back</Button>
                      <Button onClick={() => setCancelOpen(false)} autoFocus>
                        Cancel appointment
                      </Button>
                    </DialogActions>
                  </Dialog>
            </div>        
            ): (
            <div className="actions">
              <button
                className="btn btn--ghost"
                onClick={handleBookAgainClick}
              >Book again</button>
            </div>
            )}
        </article>

      <BookingModal
        open={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        doctor={{
          id: d_id,
          firstName: d_firstName,
          lastName: d_lastName,
          specialist: d_specialist
        }}
        mode={bookingMode}
        currentAppointment={bookingMode === "reschedule" ? currentAppointment : null}
      />
    </>
        
    )
}