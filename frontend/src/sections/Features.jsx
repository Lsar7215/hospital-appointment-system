import searchIcon from '../assets/images/icons/search_b.png'
import refreshIcon from '../assets/images/icons/refresh_b.png'
import inventoryIcon from '../assets/images/icons/inventory_b.png'
import clockIcon from '../assets/images/icons/clock_b.png'  

export default function Features() {
    return (
    <section id='features' className="features">
        <div className='features__inner container'>
            <header className='features__header'>
                 <h2 className='features__header__title'>Everything you need to manage appointments</h2>
                 <p className='features__header__text'>A complete healthcare booking solution designed for patients and providers.</p>
            </header>
           
            <div className='features__grid'>
                <article className='feature-card'>
                    <div className='feature-card__icon'>
                        <img src={searchIcon} alt="" aria-hidden="true"/>
                    </div>
                    
                    <h3 className='feature-card__title'>Search by specialization</h3>
                    <p className='feature-card__text'>Find the right doctor for your needs quickly and easily.</p>
                </article>
                <article className='feature-card'>
                    <div className='feature-card__icon'>
                        <img src={clockIcon} alt="clock-icon" aria-hidden="true"/>
                    </div>

                    <h3 className='feature-card__title'>Real-time availability</h3>
                    <p className='feature-card__text'>See open slots instantly and book without waiting.</p>
                </article>
                <article className='feature-card'>
                    <div className='feature-card__icon'>
                        <img src={refreshIcon} alt="refresh-icon" aria-hidden="true"/>
                    </div>
                    
                    <h3 className='feature-card__title'>One-tap reschedule</h3>
                    <p className='feature-card__text'>Change your appointment with a single click whenever you need.</p>
                </article>
                <article className='feature-card'>
                    <div className='feature-card__icon'>
                        <img  src={inventoryIcon} alt="inventory-icon" aria-hidden="true"/>
                    </div>
            
                    <h3 className='feature-card__title'>Secure patient records</h3>
                    <p className='feature-card__text'>Your medical information is encrypted and protected.</p>
                </article>
            </div>
        </div>
    </section>
    )
}