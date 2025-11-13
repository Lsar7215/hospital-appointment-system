import { useLocation } from "react-router-dom";

import SearchBar from '../../components/SearchBar'
import DoctorCard from '../../components/DoctorCard'

export default function Doctors(){
    const {pathname} = useLocation();

    const variant = pathname.startsWith("/patient") ? "patient" : "lp";

    return(
        <div className="doctors" id="doctors">
            <div className='container'>
                <div className='doctors__header'>
                    <h1 className='doctors__title'>Find Doctors</h1>
                    <p className='doctors__lead'>Filter by specialty, date, and time window to see matching doctors.</p>
                </div>
                <SearchBar/>
                <div className='doctors__meta'>
                    <h4 className='doctors__count'>8 results</h4>
                    <span>-</span>
                    <div className='doctors__sort'>
                        <span className='doctors__sort-label'>Sort:</span>
                        <button className='doctors__sort-btn is-active'>Recommended</button>
                        <span>/</span>
                        <button className='doctors__sort-btn'>A-Z</button>
                        <span>/</span>
                        <button className='doctors__sort-btn'>Z-A</button>
                    </div>
                </div>
                <div className="doctors__grid">
                    <DoctorCard variant={variant}/>
                    <DoctorCard  variant={variant}/>
                    <DoctorCard variant={variant}/>
                    <DoctorCard variant={variant}/>
                    <DoctorCard variant={variant}/>
                    <DoctorCard  variant={variant}/>
                    <DoctorCard variant={variant}/>
                    <DoctorCard variant={variant}/>
                </div>
                <div className='doctors__pagination'>
                    <button className='btn btn--ghost'>See more</button>
                </div>
            </div>
        </div>
    )
}