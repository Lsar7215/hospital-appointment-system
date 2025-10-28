import { Link } from 'react-router-dom'
import lockIcon from '../assets/images/icons/lock_b.png'
import downIcon from '../assets/images/icons/down_g.png'
export default function Signup(){
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
                        <form className='form form--auth' action="" method="post">
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
                                                <option value="AT">Austria</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="EE">Estonia</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                                <option value="GR">Greece</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IT">Italy</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MT">Malta</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="RO">Romania</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="ES">Spain</option>
                                                <option value="SE">Sweden</option>
                                            </select>
                                            <img className='down__icon' src={downIcon} alt="" />
                                        </div>
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

                                <div className="form__checks is-required">
                                    <input className="form__checkbox" id="terms" name="terms" type="checkbox" required/>
                                    <label className='form__label' htmlFor="terms">I agree to the <a href="">Terms of Service</a></label>
                                </div>
                                <div className="form__checks is-required">
                                    <input className="form__checkbox" id="privacy" name="privacy" type="checkbox" required />
                                    <label className='form__label' htmlFor="privacy">I have read the <a href="">Privacy Policy</a></label>
                                </div>

                                
                                <button className="btn btn--primary form__submit" type="submit">Create account</button>
                                
                                
                            </div>                    
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