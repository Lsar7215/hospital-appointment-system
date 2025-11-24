import { NavLink } from 'react-router-dom'

export default function RoleSwichHeader() {
    return(
        <div>
            <div className="header__inner container">
                <NavLink className="header__nav-link" to="/">Guest Page</NavLink>
                <NavLink className="header__nav-link" to="/patient/dashboard">Patient Page</NavLink>
                <NavLink className="header__nav-link" to="/doctorpage/appointments">Doctor Page</NavLink>
            </div>
        </div>
    )
}