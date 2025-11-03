import { Link } from 'react-router-dom'
import LoginIcon from '../../assets/images/icons/login_b.png'
export default function Login(){
    return(
        <div className='login'>
            <section className='login__section'>
                <div className='auth__inner container '>
                    <header className='auth__header'>
                        <img className='auth__icon' src={LoginIcon} alt="" />
                        <div className='auth__headings'>
                            <h1 className='auth__title'>Log in to your account</h1>
                            <p className='auth__lead'>Access your bookings and manage your appointments.</p>
                        </div>
                    </header>
                    <div className='auth__card'>
                        <form className='form form--auth' action="" method="post">
                            <div className='form--auth__inner form__inner'>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="email">Email</label>
                                    <input className='form__input' id="email" name="email" type="email" placeholder="name@example.com" required/>
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label' htmlFor="password">Password</label>
                                    <input className='form__input' id="password" name="password" type="password" placeholder="••••••••" required/>
                                </div>
                                <button className="btn btn--primary form__submit" type="submit">Login account</button>
                            </div>
                        </form>
                    </div>
                     <div className='auth__alt'>
                        <p>Don’t have an account?  <Link to="/signup">Sign up</Link> or <a href="">Forgot password?</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}