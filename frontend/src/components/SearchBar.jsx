import searchImg from '../assets/images/icons/search.png'
import downIcon from '../assets/images/icons/down_g.png'

export default function SearchBar(){
    return(
        <div className="search">
                <div className="search__fields">
                  <div className='search__select-wrap'>
                      <select className="search__select" aria-label="Specialization">
                      <option value="">Select specialization</option>
                      <option value="family-medicine">Family Medicine / GP</option>
                      <option value="internal-medicine">Internal Medicine</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="obgyn">Obstetrics & Gynecology</option>
                      <option value="general-surgery">General Surgery</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="ent">ENT (Otolaryngology)</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="urology">Urology</option>
                      <option value="neurology">Neurology</option>
                      <option value="gastroenterology">Gastroenterology</option>
                      <option value="pulmonology">Pulmonology</option>
                      <option value="psychiatry">Psychiatry</option>
                    </select>
                    <img className='down__icon' src={downIcon} alt="" />
                  </div>
        
                  <input className="search__input" type="date" aria-label="Date" />
        
                  <div className='search__select-wrap'>
                    <select className="search__select" aria-label="Time window">
                    <option value="">Time window</option>
                    <option value="morning">Morning (08:00–12:00)</option>
                    <option value="afternoon">Afternoon (12:00–16:00)</option>
                    <option value="evening">Evening (16:00–20:00)</option>
                  </select>
                    <img className='down__icon' src={downIcon} alt="" />
                  </div>
                  
                </div>
                <a className="search__button btn btn--primary">
                    <div className='button__inner'>
                        <img src={searchImg} alt="search-icon" className='search__icon'/>
                        <p>Search</p>
                    </div>
                </a>
              </div>
    )
}