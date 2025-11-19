import { Link } from 'react-router-dom'
import lockIcon from '../../assets/images/icons/lock_b.png'
import downIcon from '../../assets/images/icons/down_g.png'

export default function Signup(){
    const SIGNUP_API_URL = "http://localhost/doctor-appointment-system/signup.php";
    return(
        <div className='auth'>
            <section className='auth__section'>
                <div className='auth__inner container'>
                    <header className='auth__header'>
                        <img className='auth__icon' src={lockIcon} alt="" />
                        <div className='auth__headings'>
                            <h1 className='auth__title'>Create your account</h1>
                            <p className='auth__lead'>Book securely and manage your appointments.</p>
                        </div>
                    </header>
                    <div className='auth__card'>
                        <form className='form form--auth' action={SIGNUP_API_URL} method="POST">
                            <div className='form--auth__inner form__inner'>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="firstName">First name</label>
                                    <input className='form__input' id="firstName" name="firstName" type="text" placeholder="First name" required/>
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="lastName">Last name</label>
                                    <input className='form__input' id="lastName" name="lastName" type="text" placeholder="Last name" required/>
                                </div>

                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="phone">Phone number</label>
                                    <input className='form__input' id="phone" name="phone" type="tel" placeholder="+36 70 123 456" required/>
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="email">Email</label>
                                    <input className='form__input' id="email" name="email" type="email" placeholder="name@example.com" required/>
                                </div>
                                
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="dob">Date of birth</label>
                                    <input className='form__input' id="dob" name="dob" type="date"  required/>
                                </div>

                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="gender">Gender</label>
                                    <div className='search__select-wrap'>
                                        <select className='form__select' id="gender" name="gender" defaultValue="" required>
                                            <option value="">Select gender</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                        <img className='down__icon' src={downIcon} alt="" />
                                    </div>
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="medicalCard">Medical card Number</label>
                                    <input className='form__input' id="medicalCard" name="medicalCard" type="text" placeholder='000000' required/>
                                </div>
                                <div className='form__field'>
                                    <label className='form__label' htmlFor="insuranceNum">Insurance number (optional)</label>
                                    <input className='form__input' id="insuranceNum" name="insuranceNum" type="text" placeholder='000000'/>
                                </div>

                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="password">Password</label>
                                    <input className='form__input' id="password" name="password" type="password" placeholder="••••••••" required/>
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="confirmPassword">Confirm password</label>
                                    <input className='form__input' id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" required/>
                                </div>
                            </div>

                            <div className='form__group'>
                                <legend className='form__legend'>Address</legend>
                                <div className='form__group-inner'>
                                    <div className='form__field is-required'>
                                        <label className='form__label' htmlFor="line1">Address line 1</label>
                                        <input className='form__input' id="line1" name="line1" type="text" placeholder="Street and number" required/>
                                    </div>
                                    <div className='form__field'>
                                        <label className='form__label' htmlFor="line2">Address line 2 (optional)</label>
                                        <input className='form__input' id="line2" name="line2" type="text" placeholder="Apartment, suite, etc."/>
                                    </div>

                                    <div className='form__field is-required'>
                                        <label className='form__label' htmlFor="city">City</label>
                                        <input className='form__input' id="city" name="city" type="text" placeholder='Debrecen' required/>
                                    </div>
                                    <div className='form__field is-required'>
                                        <label className='form__label' htmlFor="state">State/Province</label>
                                        <input className='form__input' id="state" name="state" type="text" placeholder='Hajdú-Bihar' required/>
                                    </div>
                                    <div className='form__field is-required'>
                                        <label className='form__label' htmlFor="postalCode">Postal code</label>
                                        <input className='form__input'  id="postalCode" name="postalCode" type="text" placeholder='4032' required/>
                                    </div>
                                    <div className='form__field is-required'>
                                        <label className='form__label' htmlFor="country">Country</label>
                                        <div className='search__select-wrap'>
                                            <select className='form__select' id="country" name="country" type="text" defaultValue="HU" required>
                                                <option value="Austria">Austria</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sweden">Sweden</option>

                                            </select>
                                            <img className='down__icon' src={downIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <div className="form__checks is-required">
                                <input className="form__checkbox" id="terms" name="terms" type="checkbox" required/>
                                <label className='form__label' htmlFor="terms">I agree to the <a href="">Terms of Service</a></label>
                            </div>
                            <div className="form__checks is-required">
                                <input className="form__checkbox" id="privacy" name="privacy" type="checkbox" required />
                                <label className='form__label' htmlFor="privacy">I have read the <a href="">Privacy Policy</a></label>
                            </div> 
                            <button className="btn btn--primary form__submit" type="submit">Create account</button>               
                        </form>
                    </div>
                    <div className='auth__alt'>
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </section>
        </div>
    )
}