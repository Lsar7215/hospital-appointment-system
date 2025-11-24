import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, AlertTitle } from '@mui/material';
import { getAvailabilityForDoctor } from '../data/mockData';

export default function BookingModal({ 
  open, 
  onClose, 
  doctor,
  mode = "book", // book or reschedule
  currentAppointment = null // Only for reschedule
}) {
  const today = new Date().toISOString().split('T')[0];
  
  // If rescheduling => pre-fill with current date, otherwise use today
  const [selectedDate, setSelectedDate] = useState(
    mode === "reschedule" && currentAppointment?.rawDate 
      ? currentAppointment.rawDate 
      : today
  );
  const [selectedSlot, setSelectedSlot] = useState(null);

  const dateSlots = getAvailabilityForDoctor(doctor.id);

  const handleConfirm = () => {
    if (mode === "reschedule") {
      console.log('Rescheduling:', {
        oldAppointment: currentAppointment,
        newDate: selectedDate,
        newTime: selectedSlot,
        doctorId: doctor.id
      });
    } else {
      console.log('Booking:', {
        doctorId: doctor.id,
        date: selectedDate,
        time: selectedSlot
      });
    }
    onClose();
  };

  const isReschedule = mode === "reschedule";
  const title = isReschedule 
    ? `Reschedule Appointment` 
    : `Book Appointment`;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="booking-modal-title" sx={{ fontSize:'1.9rem' }}>
        {title} with Dr. {doctor.firstName} {doctor.lastName}
      </DialogTitle>
      <DialogContent>
        <div className="booking-modal">
          {isReschedule && currentAppointment && (
            <Alert severity="info" sx={{ mb: 3, fontSize:'1.9rem' }}>
              <AlertTitle>Current Appointment</AlertTitle>
              <strong>{currentAppointment.date}</strong> at <strong>{currentAppointment.time}</strong>
              <br />
              <small>Select a new date and time below</small>
            </Alert>
          )}

          <div className="booking-modal__date-picker">
            <label htmlFor="appointment-date">Select Date:</label>
            <input
              id="appointment-date"
              type="date"
              value={selectedDate}
              min={today}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedSlot(null);
              }}
              className="booking-modal__date-input"
            />
          </div>

          <div className="availability">
            <h4 className="availability__title">Select a slot</h4>
            <div className="availability__grid">
              {dateSlots.map((s, idx) => (
                <button
                  key={idx}
                  className={[
                    "availability__slot",
                    s.available ? "availability__slot--available" : "availability__slot--unavailable",
                    s.available && s.time === selectedSlot ? "availability__slot--selected" : "",
                  ].join(" ")}
                  type="button"
                  disabled={!s.available}
                  onClick={() => s.available && setSelectedSlot(s.time)}
                >
                  {s.time}
                </button>
              ))}
            </div>

            <div className="availability__legend">
              <div className="availability__legend-item-wrap">
                <div className="availability__legend-item availability__legend-item--available"></div>
                <span>Available</span>
              </div>
              <div className="availability__legend-item-wrap">
                <div className="availability__legend-item availability__legend-item--unavailable"></div>
                <span>Unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ fontSize:'1.5rem' }}>Cancel</Button>
        <Button 
          onClick={handleConfirm}
          disabled={!selectedSlot}
          variant="contained"
          sx={{ fontSize:'1.5rem' }}
        >
          {isReschedule ? 'Confirm Reschedule' : 'Confirm Booking'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}