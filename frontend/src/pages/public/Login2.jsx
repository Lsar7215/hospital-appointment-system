import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

// --- Placeholder Dashboard Components ---
// These simple components will be rendered when you successfully log in.
// In your real project, you will replace these with your actual dashboard components.

function PatientDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
                <h1 className="text-3xl font-bold text-blue-600">Patient Dashboard</h1>
                <p className="mt-2 text-gray-700">You are successfully logged in as a patient.</p>
                <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">Logout (Back to Login)</Link>
            </div>
        </div>
    );
}

function DoctorDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
                <h1 className="text-3xl font-bold text-green-600">Doctor Dashboard</h1>
                <p className="mt-2 text-gray-700">You are successfully logged in as a doctor.</p>
                <Link to="/" className="mt-4 inline-block text-green-500 hover:underline">Logout (Back to Login)</Link>
            </div>
        </div>
    );
}

function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
                <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
                <p className="mt-2 text-gray-700">You are successfully logged in as an admin.</p>
                <Link to="/" className="mt-4 inline-block text-red-500 hover:underline">Logout (Back to Login)</Link>
            </div>
        </div>
    );
}


// --- Login Component ---
function Login(){
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // *** IMPORTANT: Updated this URL based on your correction ***
    const API_URL = "http://localhost/doctor-appointment-system/login.php"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Logging in...');
        
        // *** MODIFICATION HERE ***
        // Get the form data
        const formData = new FormData(e.target);
        // Convert it to URLSearchParams. This sends data as
        // 'application/x-www-form-urlencoded' which PHP's $_POST
        // variable understands perfectly.
        const urlEncodedData = new URLSearchParams(formData);
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                // Send the URL-encoded data instead of FormData
                body: urlEncodedData 
            });

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                console.error("Received non-JSON response from PHP:", await response.text());
                setMessage("Server error: Did not receive a valid JSON response.");
                return;
            }

            const data = await response.json();
                setMessage(data.message);

            if (data.success) {
                // *** MODIFICATION HERE ***
                // Instead of using React's navigate(), we force a
                // full browser redirect to the PHP dashboard.
                
                // Base URL for your PHP application
                const phpAppBaseUrl = "http://localhost/doctor-appointment-system";

                switch (data.role) {
                    case 'p':
                        // Redirect to the patient PHP dashboard
                        window.location.href = `${phpAppBaseUrl}/patient/index.php`;
                        break;
                    case 'd':
                        // Redirect to the doctor PHP dashboard
                        window.location.href = `${phpAppBaseUrl}/doctor/index.php`;
                        break;
                    case 'a':
                        // Redirect to the admin PHP dashboard
                        window.location.href = `${phpAppBaseUrl}/admin/index.php`;
                        break;
                    default:
                        // Fallback in case of an unknown role
                        setMessage("Login successful, but role is unknown.");
                }
                
                // We are redirecting away, so no need to call navigate()
                
            } else {
                e.target.password.value = ''; 
            }
        } catch (error) {
            console.error("Login Fetch/Parse Error:", error);
            setMessage("A connection error occurred. Check server URL.");
        }
    };

    const LoginIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth__icon text-blue-600 mx-auto mb-2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 17l-4 4-2-2"/><path d="M16 17h6"/>
        </svg>
    );

    return(
        <div className='login min-h-screen bg-gray-100 flex items-center justify-center p-4'>
            <section className='login__section w-full max-w-md'>
                {/* This is the complete, valid JSX content for the login form */}
                <div className='auth__inner container bg-white p-8 rounded-xl shadow-2xl'>
                    <header className='auth__header text-center mb-6'>
                        <LoginIcon />
                        <div className='auth__headings'>
                            <h1 className='auth__title text-2xl font-bold text-gray-800'>Log in to your account</h1>
                            <p className='auth__lead text-sm text-gray-500'>Access your bookings and manage your appointments.</p>
                        </div>
                    </header>
                    <div className='auth__card'>
                        {message && (
                            <p className={`text-center py-2 rounded mb-4 text-sm ${message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message}
                            </p>
                        )}
                        <form className='form form--auth' onSubmit={handleSubmit}>
                            <div className='form--auth__inner form__inner space-y-4'>
                                <div className='form__field is-required'>
                                    <label className='form__label block text-sm font-medium text-gray-700' htmlFor="email">Email</label>
                                    <input 
                                        className='form__input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' 
                                        id="email" 
                                        name="email"
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
                                        name="password"
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

// --- Main App Component with ROUTING ---
// This is the default export. It sets up the router to handle all pages.
export default function App() {
    return (
        // <HashRouter>  <--- REMOVED THIS LINE
            <Routes>
                {/* The Login component is now the "index" route */}
                <Route path="/" element={<Login />} />
                
                {/* These routes now lead to the placeholder dashboards */}
                <Route path="/patient" element={<PatientDashboard />} />
                <Route path="/doctor" element={<DoctorDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />

                {/* You can add your signup/forgot-password routes here too */}
                {/* <Route path="/signup" element={<YourSignupComponent />} /> */}
                {/* <Route path="/forgot-password" element={<YourForgotComponent />} /> */}
            </Routes>
        // </HashRouter> <--- REMOVED THIS LINE
    );
}



// import { Link, useNavigate, Routes, Route } from 'react-router-dom'
// import { useState } from 'react';

// // --- Placeholder Dashboard Components ---
// // These simple components will be rendered when you successfully log in.
// // In your real project, you will replace these with your actual dashboard components.

// function PatientDashboard() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
//                 <h1 className="text-3xl font-bold text-blue-600">Patient Dashboard</h1>
//                 <p className="mt-2 text-gray-700">You are successfully logged in as a patient.</p>
//                 <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">Logout (Back to Login)</Link>
//             </div>
//         </div>
//     );
// }

// function DoctorDashboard() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
//                 <h1 className="text-3xl font-bold text-green-600">Doctor Dashboard</h1>
//                 <p className="mt-2 text-gray-700">You are successfully logged in as a doctor.</p>
//                 <Link to="/" className="mt-4 inline-block text-green-500 hover:underline">Logout (Back to Login)</Link>
//             </div>
//         </div>
//     );
// }

// function AdminDashboard() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-12 rounded-xl shadow-2xl text-center">
//                 <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
//                 <p className="mt-2 text-gray-700">You are successfully logged in as an admin.</p>
//                 <Link to="/" className="mt-4 inline-block text-red-500 hover:underline">Logout (Back to Login)</Link>
//             </div>
//         </div>
//     );
// }


// // --- Login Component ---
// function Login(){
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     // *** IMPORTANT: Updated this URL based on your correction ***
//     const API_URL = "http://localhost/doctor-appointment-system/login.php"; 

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('Logging in...');
//         const formData = new FormData(e.target);
        
//         try {
//             const response = await fetch(API_URL, {
//                 method: 'POST',
//                 body: formData 
//             });

//             const contentType = response.headers.get("content-type");
//             if (!contentType || !contentType.includes("application/json")) {
//                 console.error("Received non-JSON response from PHP:", await response.text());
//                 setMessage("Server error: Did not receive a valid JSON response.");
//                 return;
//             }

//             const data = await response.json();
//             setMessage(data.message);

//             if (data.success) {
//                 // *** MODIFICATION HERE ***
//                 // Instead of using React's navigate(), we force a
//                 // full browser redirect to the PHP dashboard.
                
//                 // Base URL for your PHP application
//                 const phpAppBaseUrl = "http://localhost/doctor-appointment-system";

//                 switch (data.role) {
//                     case 'p':
//                         // Redirect to the patient PHP dashboard
//                         window.location.href = `${phpAppBaseUrl}/patient/index.php`;
//                         break;
//                     case 'd':
//                         // Redirect to the doctor PHP dashboard
//                         window.location.href = `${phpAppBaseUrl}/doctor/index.php`;
//                         break;
//                     case 'a':
//                         // Redirect to the admin PHP dashboard
//                         window.location.href = `${phpAppBaseUrl}/admin/index.php`;
//                         break;
//                     default:
//                         // Fallback in case of an unknown role
//                         setMessage("Login successful, but role is unknown.");
//                 }
                
//                 // We are redirecting away, so no need to call navigate()
                
//             } else {
//                 e.target.password.value = ''; 
//             }
//         } catch (error) {
//             console.error("Login Fetch/Parse Error:", error);
//             setMessage("A connection error occurred. Check server URL.");
//         }
//     };

//     const LoginIcon = () => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth__icon text-blue-600 mx-auto mb-2">
//             <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 17l-4 4-2-2"/><path d="M16 17h6"/>
//         </svg>
//     );

//     return(
//         <div className='login min-h-screen bg-gray-100 flex items-center justify-center p-4'>
//             <section className='login__section w-full max-w-md'>
//                 {/* This is the complete, valid JSX content for the login form */}
//                 <div className='auth__inner container bg-white p-8 rounded-xl shadow-2xl'>
//                     <header className='auth__header text-center mb-6'>
//                         <LoginIcon />
//                         <div className='auth__headings'>
//                             <h1 className='auth__title text-2xl font-bold text-gray-800'>Log in to your account</h1>
//                             <p className='auth__lead text-sm text-gray-500'>Access your bookings and manage your appointments.</p>
//                         </div>
//                     </header>
//                     <div className='auth__card'>
//                         {message && (
//                             <p className={`text-center py-2 rounded mb-4 text-sm ${message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                                 {message}
//                             </p>
//                         )}
//                         <form className='form form--auth' onSubmit={handleSubmit}>
//                             <div className='form--auth__inner form__inner space-y-4'>
//                                 <div className='form__field is-required'>
//                                     <label className='form__label block text-sm font-medium text-gray-700' htmlFor="email">Email</label>
//                                     <input 
//                                         className='form__input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' 
//                                         id="email" 
//                                         name="email"
//                                         type="email" 
//                                         placeholder="name@example.com" 
//                                         required
//                                     />
//                                 </div>
//                                 <div className='form__field is-required'>
//                                     <label className='form__label block text-sm font-medium text-gray-700' htmlFor="password">Password</label>
//                                     <input 
//                                         className='form__input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' 
//                                         id="password" 
//                                         name="password"
//                                         type="password" 
//                                         placeholder="••••••••" 
//                                         required
//                                     />
//                                 </div>
//                                 <button className="btn btn--primary form__submit w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
//                                     Login account
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                      <div className='auth__alt text-center mt-6 text-sm text-gray-600'>
//                         <p>Don’t have an account?  <Link to="/signup" className='text-blue-600 hover:text-blue-500'>Sign up</Link> or <Link to="/forgot-password" className='text-blue-600 hover:text-blue-500'>Forgot password?</Link></p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// // --- Main App Component with ROUTING ---
// // This is the default export. It sets up the router to handle all pages.
// export default function App() {
//     return (
//         // <HashRouter>  <--- REMOVED THIS LINE
//             <Routes>
//                 {/* The Login component is now the "index" route */}
//                 <Route path="/" element={<Login />} />
                
//                 {/* These routes now lead to the placeholder dashboards */}
//                 <Route path="/patient" element={<PatientDashboard />} />
//                 <Route path="/doctor" element={<DoctorDashboard />} />
//                 <Route path="/admin" element={<AdminDashboard />} />

//                 {/* You can add your signup/forgot-password routes here too */}
//                 {/* <Route path="/signup" element={<YourSignupComponent />} /> */}
//                 {/* <Route path="/forgot-password" element={<YourForgotComponent />} /> */}
//             </Routes>
//         // </HashRouter> <--- REMOVED THIS LINE
//     );
// }