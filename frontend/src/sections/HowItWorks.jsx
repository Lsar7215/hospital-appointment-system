import searchIcon from '../assets/images/icons/search_b.png'
import clockIcon from '../assets/images/icons/clock_b.png' 
import calendarIcon from '../assets/images/icons/calendar_b.png'
import taskIcon from '../assets/images/icons/task_b.png'

export default function HowItWorks(){
    const steps = [
        {
            icon:searchIcon,
            title:"Find a doctor",
            text:"Search by specialty, location, or availability to find the perfect match.",
            number: "01",
        },
        {
            icon:calendarIcon,
            title:"Pick a time",
            text:"Browse real-time availability and select a convenient appointment slot.",
            number: "02",
        },
        {
            icon:taskIcon,
            title:"Confirm & reminders",
            text:"Receive instant confirmation and automated reminders before your visit.",
            number: "03",
        }
        ,        {
            icon:clockIcon,
            title:"Manage appointments",
            text:"Reschedule or cancel anytime from your personal dashboard.",
            number: "04",
        }
    
        
    ]
    return(
        <section id='How-it-works' className="how-it-works">
            <div className='how-it-works__inner container'>
                <header className='how-it-works__header'>
                    <h2 className='how-it-works__title'>How it works</h2>
                    <p className='how-it-works__lead'>Book your appointment in four simple steps.</p>
                </header>
                <div className='how-it-works__grid'>
                    {steps.map((step)=>(
                        <article className='how-it-works__item'>
                            <div className='how-it-works__item-row'>
                                <div className='how-it-works__num'>{step.number}</div>
                                <div className='how-it-works__icon'>
                                    <img src={step.icon} alt="" aria-hidden="true"/>
                                </div>

                                    <h3 className='how-it-works__item-title'>{step.title}</h3>
                                    <p className='how-it-works__item-text'>{step.text}</p>
                              
                            </div>
                        </article>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}