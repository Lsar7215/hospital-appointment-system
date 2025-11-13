import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useState, useMemo } from 'react';
import {Link} from 'react-router-dom'
import DoctorImage from "../assets/images/doctor1.png";

export default function DoctorProfileCard({variant = "patient"}){
  //React -dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isPatient = variant === "patient";

  const [slectedSlot, setSlectedSlot] = useState(null);

  const doctor ={
    doctor_id:"123",
    first_name:"FIRST_NAME",
    last_name:"LAST_NAME",
    specialization:"SPCIALIZATION",
    aboutText: "Dr. Novak specializes in preventive cardiology and heart disease management. She is committed to providing personalized care and treatment plans for each patient.",
    schedule:{
        day:"Monday",
        date:{
            mm:10,
            dd:13,
            yyyy:2025
        },
        available_slots:["09:00", "09:30", "10:00"]
    }
  }

  const dataLabel = "Tuesday, October 15, 2025";
  const dateSlots = useMemo(
    ()=>[
      { time: "09:00", available: true },
      { time: "10:00", available: true },
      { time: "11:00", available: false },
      { time: "12:00", available: true },
      { time: "12:30", available: false },
      { time: "13:00", available: true },
      { time: "14:00", available: false },
      { time: "15:00", available: true },
      { time: "16:00", available: true },
    ]
  )


    return (
                <div className="doctor-profile__content card">
                  <article className="doctor-profile__card">
                    <div className="doctor-card__top">
                      <img
                        className="doctor-card__profile"
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
                        {doctor.aboutText}
                      </p>
                    </div>
                  </article>
        
                  <div className="availability doctor-profile__availability">
                    <h3 className="availability__title">Available times</h3>
                    <p className="availability__date">{dataLabel}</p>
        
                    <div className="availability__grid">
                      {dateSlots.map((s)=>{
                        const isSelected = s.available && s.time === slectedSlot;
                        return(
                        <button
                        // className="availability__slot availability__slot--available"
                        className={["availability__slot", 
                                    s.available ? "availability__slot--available" : "availability__slot--unavailable",
                                    isSelected ? "availability__slot--selected" :"",
                        ].join(" ")}
                        type="button"
                        disable={!s.available}
                        aria-disabled={!s.available}
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

                      {isPatient? (
                          <React.Fragment>
                            <Button variant="outlined" onClick={handleClickOpen} className='btn btn--primary availability__cta'>
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
                                  You’re booking an appointment with <strong>{`Dr. ${doctor.first_name} ${doctor.last_name}`}</strong> on{" "} <strong>{dataLabel}</strong> at <strong>{slectedSlot}</strong>. Do you want to continue?
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
                      ) :(
                        <>
                          <div className="availability__gate-wrap">
                            <p className="availability__gate">Please log in to book an appointment</p>
                          </div>
                          
                          <Link className="btn btn--primary availability__cta" to="/login">Log in to Book</Link>
                          </>
                      )

                      }
                  </div>
                </div>
    )
}