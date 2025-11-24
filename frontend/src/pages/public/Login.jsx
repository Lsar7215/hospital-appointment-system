import { Link } from 'react-router-dom';
// We no longer need 'useNavigate' or 'useState' for this component

// Login Components
// This component now submits a traditional HTML form
export default function Login(){

    // The API_URL is now the 'action' for the form
    const API_URL = "http://localhost/doctor-appointment-system/login.php"; 

    const LoginIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth__icon text-blue-600 mx-auto mb-2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 17l-4 4-2-2"/><path d="M16 17h6"/>
        </svg>
    );

    return(
        <div className='login'>
            <section className='login__section'>
                <div className='card card--shadow auth__inner container '>
                    <header className='auth__header'>
                        <img className='auth__icon' src={LoginIcon} alt="" />
                        <div className='auth__headings'>
                            <h1 className='auth__title text-2xl font-bold text-gray-800'>Log in to your account</h1>
                            <p className='auth__lead text-sm text-gray-500'>Access your bookings and manage your appointments.</p>
                        </div>
                    </header>
                    <div className='auth__card'>
                        <form className='form form--auth' action={API_URL} method="POST">
                            <div className='form--auth__inner form__inner space-y-4'>
                                <div className='form__field is-required'>
                                    <label className='form__label block text-sm font-medium text-gray-700' htmlFor="email">Email</label>
                                    <input 
                                        className='form__input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' 
                                        id="email" 
                                        name="email" // This is the key $_POST['email']
                                        type="email" 
                                        placeholder="name@example.com" 
                                        required
                                    />
                                </div>
                                <div className='form__field is-required'>
                                    <label className='form__label block text-sm font-medium text-gray-700' htmlFor="password">Password</label>
                                    <input 
                                        className='form__input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' 
                                        id="password" 
                                        name="password" // This is the key $_POST['password']
                                        type="password" 
                                        placeholder="••••••••" 
                                        required 
                                    />
                                </div>
                                
                                <button className="btn btn--primary form__submit w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
                                    Login account
                                </button>
                            </div>
                        </form>
                    </div>
                    
                     <div className='auth__alt text-center mt-6 text-sm text-gray-600'> 
                        <p>Don’t have an account?  <Link to="/signup" className='text-blue-600 hover:text-blue-500'>Sign up</Link> or <Link to="/forgot-password" className='text-blue-600 hover:text-blue-500'>Forgot password?</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}