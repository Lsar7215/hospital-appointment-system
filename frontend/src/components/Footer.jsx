import LogoImage from '../assets/images/logo.svg'
import ambulanceIcon from '../assets/images/icons/ambulance_g.png'
import callIcon from '../assets/images/icons/call_g.png'
import mailIcon from '../assets/images/icons/mail_g.png'
import mapIcon from '../assets/images/icons/map_g.png'


export default function Footer() {
    return (
    <footer className="footer">
        <div className="footer__inner container">
            <div className='footer__brand'>
                <a href='/' className='footer__logo'>
                    <img src={LogoImage} alt=""  className='footer__logo-img'/>
                    <p className='footer__logo-text'>HealLink</p>
                </a>
                <p className='footer__desc'>A simple way to find doctors,<br/> book visits, and manage your care.</p>
                <div className='footer__socials'>
                    <a className='social__link' href="tel:+000000000"><img className='social__icon' src={callIcon} alt="" /></a>
                    <a className='social__link' href="mailto:support@example.com"><img src={mailIcon} alt="" /></a>
                    <a className='social__link' href="/contact"><img src={mapIcon} alt="" /></a>
                    <a className='social__link' href="tel:+000000000"><img src={ambulanceIcon} alt="" /></a>
                </div>
            </div>

            <div className='footer__cols'>
                <div className='footer__col'>
                    <h4 className='footer__col-title'>Product</h4>
                    <nav className='footer__nav'>
                        <a href="#doctors" className='footer__link'>Doctors</a>
                        <a href="#book" className='footer__link'>Book</a>
                        <a href="#How-it-works" className='footer__link'>How it works</a>
                    </nav>
                </div>
                <div className='footer__col'>
                    <h4 className='footer__col-title'>Company</h4>
                    <nav className='footer__nav'>
                        <a href="" className='footer__link'>About us</a>
                        <a href="" className='footer__link'>Blog</a>
                        <a href="" className='footer__link'>Careers</a>
                    </nav>
                </div>
                <div className='footer__col'>
                    <h4 className='footer__col-title'>Legal</h4>
                    <nav className='footer__nav' >
                        <a href="" className='footer__link'>Privacy policy</a>
                        <a href="" className='footer__link'>Terms of service</a>
                        <a href="" className='footer__link'>Cookie policy</a>
                    </nav>
                </div>
                <div className='footer__col'>
                    <h4 className='footer__col-title'>Contact</h4>
                    <nav className='footer__nav'>
                        <a href="" className='footer__link'>Support</a>
                        <a href="" className='footer__link'>Help center</a>
                        <a href="" className='footer__link'>Community</a>
                    </nav>
                </div>
            </div>


        </div>
        <div className='footer__bottom'>
            <p className='footer__copyright'>© 2025 HealLink. All rights reserved.</p>
        </div>
    </footer>
    )
}       