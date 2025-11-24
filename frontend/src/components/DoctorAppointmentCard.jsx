import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import patientImage from "../assets/images/patient.png";

export default function DoctorAppointmentCard({
  appointmentId,
  patientState, 
  variant,
  appointmentDate, 
  appointmentTime, 
  appointmentLocation, 
  p_fname, 
  p_lname,
  p_email, 
  p_phone,
  note = "",
  onSaveNote,
}){  
    //React -dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    //Note
    const [openNote, setOpenNote] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [draft, setDraft] = React.useState(note);

    const openEditor = () => {
      // if a note exists → start in view mode; otherwise start editing
      setIsEditing(!note); 
      setDraft(note || "");
      setOpenNote(true);
    };
    const closeEditor = () => setOpenNote(false);

    const startEdit = () => {
      setDraft(note || "");
      setIsEditing(true);
    };

    const cancelEdit = () => {
      if (note) {
        // revert to view mode if there was a note
        setIsEditing(false);
        setDraft(note);
      } else {
        // no existing note → just close
        setOpenNote(false);
      }
    };

    const saveNote = () => {
      const text = draft.trim();
      onSaveNote?.(appointmentId, text);
      // after save, go to view mode
      setIsEditing(false);
    };

    return(
        <article className="doctor-card card">
            <div className="doctor-card__top">
                <img className="profile-image" src={patientImage} alt="patient-image" width={72} height={72}/>
                <div className="doctor-card__info">
                    <h3 className="doctor-card__name">{p_fname} {p_lname}

                    <span className={`badge ${variant==='upcoming' ? 'badge--booked' :
                                                          variant==='cancelled' ?'badge--cancelled':
                                                          variant==='completed' ?'badge--completed':
                                                          ''}`}>{variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </span>
                    </h3>
                    {patientState === "first visit"?(
                        <span className="badge badge--first-visit">{patientState}</span>
                    ):(
                        <span className="badge badge--follow-up">{patientState}</span>
                    )}

                    <div className="apt-detail">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                            <span>{appointmentDate} | {appointmentTime}</span>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            <span>{appointmentLocation}</span>
                        </p>
                    </div>
                    <div className="actions">
                        <a href= {`mailto:${p_email}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(29,78,216)"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg></a>
                        <a href={`tel:+${p_phone}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(29,78,216)"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg></a>

                        <div className="apt-note">
                          <Button size="small" variant="outlined" onClick={openEditor}>
                            {note ? "See note" : "Add note"}
                          </Button>
                        </div>

                        <Dialog open={openNote} onClose={closeEditor} fullWidth maxWidth="sm">
                          <DialogTitle>
                            {isEditing
                              ? (note ? "Edit consultation note" : "Add consultation note")
                              : "Consultation note"}
                          </DialogTitle>

                          <DialogContent>
                            {isEditing ? (
                              <textarea
                                className="form__input"
                                rows={8}
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                                placeholder="Ex: Symptoms, findings, diagnosis, plan, meds…"
                                style={{ width: "100%", resize: "vertical" }}
                              />
                            ) : (
                              <div style={{ whiteSpace: "pre-wrap" }}>
                                {note}
                              </div>
                            )}
                          </DialogContent>

                          <DialogActions>
                            {isEditing ? (
                              <>
                                <Button onClick={cancelEdit}>Cancel</Button>
                                <Button variant="contained" onClick={saveNote} disabled={!draft.trim()}>
                                  Save
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button onClick={closeEditor}>Close</Button>
                                <Button variant="outlined" onClick={startEdit}>Edit</Button>
                              </>
                            )}
                          </DialogActions>
                        </Dialog>

                        {variant==="upcoming" && (
                            <React.Fragment>
                              <Button variant="outlined" onClick={handleClickOpen} className="btn btn--cancel" >
                                Cancel
                              </Button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                              >
                                <DialogTitle id="alert-dialog-title">
                                  {"Confirm cancellation"}
                                </DialogTitle>
                                <DialogContent>
                                  <DialogContentText id="alert-dialog-description">
                                    This action will cancel the appointment.
                                  </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={handleClose}>Back</Button>
                                  <Button onClick={handleClose} autoFocus>
                                    Cancel
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </React.Fragment>       
                        )}

                    </div>
                </div>
            </div>
        </article>
    )
}