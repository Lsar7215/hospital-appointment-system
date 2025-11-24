import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import downIcon from '../../assets/images/icons/down_g.png'
import {  getPatientAccount, savePatientAccount, EU_COUNTRIES  } from '../../data/mockData'
export default function Account(){

    //demo 
    const currentPatientId = "PT001"; 
    const [data, setData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadPatientData = async () => {
        setLoading(true);
            try {
                // demo
                const patientData = getPatientAccount(currentPatientId);
                
                setData(patientData);
                setForm(patientData);
            } catch (error) {
                console.error('Error loading patient data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPatientData();
    }, []);


    const onEdit = () => {
        setForm(data);    
        setEditing(true);   
    };

    const onCancel = () => {
        setForm(data);
        setEditing(false);  
    };

    const onSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            // demo
            await savePatientAccount(currentPatientId, form);
            setData(form);
            setEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error saving patient data:', error);
            alert('Failed to save changes. Please try again.');
        } finally {
            setSaving(false);
        }
    };

  const onChange = (path) => (e) => {
    const value = e.target.value;
    if (path.startsWith("address.")) {
      const key = path.split(".")[1];
      setForm((prev) => ({ ...prev, address: { ...prev.address, [key]: value } }));
    } else {
      setForm((prev) => ({ ...prev, [path]: value }));
    }
  };

    // Loading state
    if (loading) {
        return (
        <section className="profile">
            <div className="profile__inner container card">
            <p>Loading profile...</p>
            </div>
        </section>
        );
    }

    // No data found
    if (!data) {
        return (
        <section className="profile">
            <div className="profile__inner container card">
            <p>Patient profile not found.</p>
            </div>
        </section>
        );
    }

    return(
        <section className="profile">
            <div className="profile__inner container card">
                <div className='profile-head'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="4.5rem" viewBox="0 -960 960 960" width="4.5rem" fill="#5985E1"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                    <h3>{data.firstName} {data.lastName}</h3>
                </div>

                {!editing &&(
                    <>
                        <div className='profile-card__info'>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Phone number</label>
                                <p className='profile-card__value'>{data.phone}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Email</label>
                                <p className='profile-card__value'>{data.email}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Date of birth</label>
                                <p className='profile-card__value'>{data.dob}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Medical card Number</label>
                                <p className='profile-card__value'>{data.medicalCard}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Insurance number</label>
                                <p className='profile-card__value'>{data.insurance}</p>
                            </div>
                            <hr />
                            <h4>Address</h4>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Address line 1</label>
                                <p className='profile-card__value'>{data.address.line1}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Address line 2</label>
                                <p className='profile-card__value'>{data.address.line2}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>City</label>
                                <p className='profile-card__value'>{data.address.city}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>State/Province</label>
                                <p className='profile-card__value'>{data.address.state}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Postal code</label>
                                <p className='profile-card__value'>{data.address.postal}</p>
                            </div>
                            <div className='profile-card__field'>
                                <label className='profile-card__label'>Country</label>
                                <p className='profile-card__value'>{data.address.country}</p>
                            </div>
                        </div>

                        <div className='profile__actions'>
                            <button className='btn btn--primary' onClick={onEdit}>Edit profile</button>
                            <Link className="btn btn--ghost btn--sign-out" to="/login"><svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" width="1.5rem" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>Sign out</Link>
                        </div>
                    </>
                )}
                {editing &&(
                    <>
                    <form className="profile-form" onSubmit={onSave}>
                        <div className='profile-card__info'>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="firstName">First name</label>
                                <input className="form__input" id="firstName" value={form.firstName} onChange={onChange("firstName")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="lastName">Last name</label>
                                <input className="form__input" id="lastName" value={form.lastName} onChange={onChange("lastName")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="phone">Phone</label>
                                <input className="form__input" id="phone" value={form.phone} onChange={onChange("phone")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="email">Email</label>
                                <input className="form__input" id="email" type="email" value={form.email} onChange={onChange("email")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="dob">Date of birth</label>
                                <input className="form__input" id="dob" type="date" value={form.dob} onChange={onChange("dob")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="medicalCard">Medical card number</label>
                                <input className="form__input" id="medicalCard" value={form.medicalCard} onChange={onChange("medicalCard")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="insurance">Insurance number</label>
                                <input className="form__input" id="insurance" value={form.insurance} onChange={onChange("insurance")} />
                            </div>
                            <hr />
                            <h4>Address</h4>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="line1">Address line 1</label>
                                <input className="form__input" id="line1" value={form.address.line1} onChange={onChange("address.line1")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="line2">Address line 2</label>
                                <input className="form__input" id="line2" value={form.address.line2} onChange={onChange("address.line2")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="city">City</label>
                                <input className="form__input" id="city" value={form.address.city} onChange={onChange("address.city")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="state">State/Province</label>
                                <input className="form__input" id="state" value={form.address.state} onChange={onChange("address.state")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="postal">Postal code</label>
                                <input className="form__input" id="postal" value={form.address.postal} onChange={onChange("address.postal")} />
                            </div>
                            <div className='profile-card__field'>
                                <label className="profile-card__label" htmlFor="country">Country</label>
                                <div className='search__select-wrap'>
                                    <select className='form__select' id="country" name="country" value={form.address.country} onChange={onChange("address.country")} required>
                                        {EU_COUNTRIES.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                    <img className='down__icon' src={downIcon} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='profile__actions'>
                            <button className='btn btn--cancel' type="button" onClick={onCancel} disabled={saving}>Cancel</button>
                            <button className='btn btn--primary' type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save changes'}</button>
                        </div>
                    </form>
                    </>
                )}
            </div>
        </section>
    )
}