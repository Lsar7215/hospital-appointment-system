import { NavLink, Link, useLocation } from 'react-router-dom'
import LogoImage from '../assets/images/logo.svg'
// import useAuth from "../app/useAuth";

export default function Header() {
    // const {user, role} = useAuth();
    // role : "patient" | "doctor" | "admin" | undefined
    const {pathname} = useLocation();
    const v = pathname === "/" ? "lp":"default";
    return(
        <header className="header">
            <div className="header__inner container">
                <Link className="header__brand" to="/" aria-label="HealLink home">
                    <img className="header__logo" src={LogoImage} alt="" />
                    <p className="header__brand-name">HealLink</p>
                </Link>

                <nav className="header__nav">
                {v === "lp"?
                    (<>
                        <a className="header__nav-link" href="#top">Top</a>
                        <a className="header__nav-link" href="#features">Features</a>
                        <a className="header__nav-link" href="#search-preview">Find your doctor</a>
                        <a className="header__nav-link" href="#book">book</a>
                        <a className="header__nav-link" href="#How-it-works">How it works</a>
                    </>)
                    :
                    (<>
                        <NavLink className="header__nav-link" to="/">Home</NavLink>    
                        <NavLink className="header__nav-link" to="/doctors">Doctors</NavLink>          
                    </>)}

                </nav>
                <div className="actions">
                  
                    <Link className="btn btn--ghost header__btn" to="/login">Log in</Link>
                    <Link className="btn btn--primary header__btn" to="/signup">Sign up</Link>
                </div>
            </div>
        </header>
    );
}   