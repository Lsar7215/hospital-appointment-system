import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useState } from 'react';
import {Link} from 'react-router-dom'
import DoctorImage from "../assets/images/doctor1.png";
import { DOCTORS, getAvailabilityForDoctor } from '../data/mockData'

export default function DoctorProfileCard({variant, doctorId}){
  const doctor = DOCTORS.find((d)=> String(d.doctor_id) === String(doctorId));
  const dateSlots = getAvailabilityForDoctor(doctorId);

  //demo
  const dataLabel = "Tuesday, October 15, 2025";

  //React -dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedSlot, setSelectedSlot] = useState(null);


    if(!doctor){
      return(
        <div className="card">
          Not found
        </div>
      )
    }
    return (
            <div className="doctor-profile__content card">
              <article className="doctor-profile__card">
                <div className="doctor-card__top">
                  <img
                    className="profile-image"
                    src={DoctorImage}
                    alt={`Dr. ${doctor.first_name} ${doctor.last_name}`}
                    width={72}
                    height={72}
                  />
                  <div className="doctor-profile__info">
                    <h3 className="doctor-profile__name">Dr. {doctor.first_name} {doctor.last_name}</h3>
                    <p className="doctor-profile__specialty">{doctor.specialization}</p>
                    
                  </div>
                </div>
    
                <div className="doctor-profile__about">
                  <h3 className="doctor-profile__about-title">About</h3>
                  <p className="doctor-profile__about-text">
                    {doctor.about}
                  </p>
                </div>
              </article>
    
              <div className="availability doctor-profile__availability">
                <h3 className="availability__title">Available times</h3>
                <p className="availability__date">{dataLabel}</p>
    
                <div className="availability__grid">
                  {dateSlots.map((s)=>{
                    const isSelected = s.available && s.time === selectedSlot;
                    return(
                    <button
                    className={[    
                      "availability__slot",
                      s.available ? "availability__slot--available" : "availability__slot--unavailable",
                      s.available && s.time === selectedSlot ? "availability__slot--selected" : "",
                    ].join(" ")}
                    type="button"
                    disabled={!s.available}
                    aria-disabled={!s.available}
                    onClick={() => s.available && setSelectedSlot(s.time)}
                    >
                    {s.time}
                    </button>
                    )
                  })}
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
                {variant === "patient" ?(
                    <React.Fragment>
                      <Button variant="outlined" disabled={!selectedSlot} onClick={handleClickOpen} className='btn btn--primary availability__cta'>
                        Book
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Confirm appointment"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            You’re booking an appointment with <strong>{`Dr. ${doctor.first_name} ${doctor.last_name}`}</strong> on{" "} <strong>{dataLabel}</strong> at <strong>{selectedSlot}</strong>. Do you want to continue?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Back</Button>
                          <Button onClick={handleClose} autoFocus>
                            Confirm booking
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>    
                ):(
                  <>
                    <div className="availability__gate-wrap">
                      <p className="availability__gate">Please log in to book an appointment</p>
                    </div>
                    
                    <Link className="btn btn--primary availability__cta" to="/login">Log in to Book</Link>
                  </>
                )}
             
              </div>
            </div>
    )
}