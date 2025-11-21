import { NavLink, Link, useLocation } from 'react-router-dom'
import LogoImage from '../assets/images/logo.svg'

export default function Header() {
    const {pathname} = useLocation();

    const variant = (() => {
        if (pathname === "/" || pathname.startsWith("/signup") || pathname.startsWith("/login")) return "lp";
        if (pathname.startsWith("/patient")) return "patient";
        if (pathname.startsWith("/doctorpage"))  return "doctor";
        return "default";
    })();

    return(
        <header className="header">
            <div className="header__inner container">
                <div className="header__brand">
                    <img className="header__logo" src={LogoImage} alt="" />
                    <p className="header__brand-name">HealLink</p>
                </div>

                <nav className="header__nav">
                {variant === "lp" &&
                    (<>
                        <a className="header__nav-link" href="#top">Top</a>
                        <a className="header__nav-link" href="#features">Features</a>
                        <a className="header__nav-link" href="#How-it-works">How it works</a>
                    </>
                )}
                 
                {variant === "patient" &&
                    (
                        <>
                            <NavLink className="header__nav-link" to="/patient/dashboard">My appointments</NavLink>
                            <NavLink className="header__nav-link" to="/patient/doctors">Find doctors</NavLink>
                        </>
                    )
                }

                {variant === "doctor" &&
                    (
                        <>
                            <NavLink className="header__nav-link" to="/doctorpage/appointments">Appointments(Doctor)</NavLink>
                            <NavLink className="header__nav-link" to="/doctorpage/schedule">Schedule</NavLink>
                        </>
                    )
                }
                </nav>
                <div className="actions">
                    {variant === "lp" &&
                        (<>
                            <Link className="btn btn--ghost header__btn" to="/login">Log in</Link>
                            <Link className="btn btn--primary header__btn" to="/signup">Sign up</Link>
                        </>
                    )}
                    
                    {variant === "patient" &&
                        (
                            <>
                                <Link className="btn header__btn" to="/patient/account">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="4.5rem" viewBox="0 -960 960 960" width="4.5rem" fill="#5985E1"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                                </Link>
                                <Link className="btn btn--ghost header__btn" to="/login">Sign out</Link> 
                            </>
                        )
                    }

                    {variant === "doctor" &&
                        (
                            <>
                                <Link className="btn btn--ghost header__btn" to="/login">Sign out</Link> 
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}   