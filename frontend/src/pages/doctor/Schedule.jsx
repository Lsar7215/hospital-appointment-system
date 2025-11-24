import { useState } from "react"
import { getWeekDates, TIME_SLOTS, getMockDoctorAvailability } from '../../data/mockData';

export default function Schedule(){
    //Demo
    const doctorId = 1;

    // 0 = this week, -1 = prev week, +1 = next week
    const [weekOffset, setWeekOffset] = useState(0);

    const getDisplayWeek = () => {
        const today = new Date();
        today.setDate(today.getDate() + (weekOffset * 7));
        return getWeekDates(today);
    };
  
    const week = getDisplayWeek();

    const [availability, setAvailability] = useState(
        getMockDoctorAvailability(doctorId)
    );

    // Check if a slot is available
    const isSlotAvailable = (date, time) => {
        return availability[date]?.[time] || false;
    };

    // Toggle individual slot
    const toggleSlot = (date, time) => {
        setAvailability(prev => ({
        ...prev,
        [date]: {
            ...prev[date],
            [time]: !prev[date]?.[time]
        }
        }));
    };

    // Toggle entire period (morning/afternoon)
    const togglePeriod = (date, period) => {
        const slots = TIME_SLOTS[period];
        const allAvailable = slots.every(time => isSlotAvailable(date, time));
        
        setAvailability(prev => {
        const newDateSlots = { ...prev[date] };
        slots.forEach(time => {
            newDateSlots[time] = !allAvailable;
        });
        return {
            ...prev,
            [date]: newDateSlots
        };
        });
    };

    // Clear all slots for a day
    const clearDay = (date) => {
        setAvailability(prev => ({
        ...prev,
        [date]: {}
        }));
    };

    // Week navigation
    const goToPrevWeek = () => setWeekOffset(prev => prev - 1);
    const goToThisWeek = () => setWeekOffset(0);
    const goToNextWeek = () => setWeekOffset(prev => prev + 1);

    return(
        <div className="schedule">
            <div className="schedule__container container">
                <header className="schedule__header">
                    <h1 className="head__title">Manage Availability</h1>
                </header>
                <section className="schedule__week">
                    <div className="card">
                        <h2 className="schedule__week-title">Week of {week[0]?.monthDay} – {week[week.length-1]?.monthDay}</h2>
                        <div className="schedule__actions">
                            <button className="toggle__btn btn--ghost" onClick={goToPrevWeek}><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span> Prev week</button>
                            <button className={`toggle__btn ${(weekOffset === 0) ? 'btn--this-week' :'btn--ghost'}`} onClick={goToThisWeek} disabled={weekOffset === 0}>This week</button>
                            <button className="toggle__btn btn--ghost" onClick={goToNextWeek}>Next week <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button>
                        </div>
                    </div>

                    <div className="schedule__body card">
                        <div className="schedule__legend-wrapper">
                            <div className="schedule__legend">
                                <div className="schedule__legend-item">
                                    <span className="schedule__legend-dot schedule__legend-dot--available"></span>
                                    <span className="schedule__legend-label">Available</span>
                                </div>
                                <div className="schedule__legend-item">
                                    <span className="schedule__legend-dot schedule__legend-dot--unavailable"></span>
                                    <span className="schedule__legend-label">Unavailable</span>
                                </div>
                            </div>
                            {/* Save button */}
                            <div>
                            <button 
                                className="btn btn--primary"
                                onClick={() => {
                                console.log('Saving availability:', availability);
                                alert('Availability saved!');
                                }}
                            >
                                Save All Changes
                            </button>
                            </div>
                        </div>

                        {week.map((day)=>(
                        <article key={day.iso} className="schedule-day card">
                            <header className="schedule-day__header">
                                <div className="schedule-day__title">
                                    <h3 className="schedule-day__day">{day.dayName}</h3>
                                    <span className="schedule-day__date">{day.monthDay}</span>
                                </div>
                                <div className="schedule-segment__actions">
                                    <button className="toggle__btn btn--ghost" data-period="morning" onClick={() => togglePeriod(day.iso, 'morning')}>Morning</button>
                                    <button className="toggle__btn btn--ghost" data-period="afternoon" onClick={() => togglePeriod(day.iso, 'afternoon')}>Afternoon</button>
                                    <button className="toggle__btn btn--ghost" onClick={() => clearDay(day.iso)}>Clear All</button>
                                </div>
                            </header>
                            <section className="schedule-segment schedule-segment--morning">
                                <div className="schedule-segment__summary">
                                    <span className="schedule-segment__label">Morning</span>
                                    <span className="schedule-segment__range">09:00–12:00</span>
                                </div>
                                <div className="schedule-segment__slots">
                                {TIME_SLOTS.morning.map((time) => (
                                <button
                                    key={time}
                                    className={`slot btn--ghost ${
                                    isSlotAvailable(day.iso, time) 
                                        ? 'availability__slot--selected' 
                                        : 'availability__slot--unavailable'
                                    }`}
                                    onClick={() => toggleSlot(day.iso, time)}
                                >
                                    {time}
                                </button>
                                ))}
                                </div>
                            </section>
                            <section className="schedule-segment schedule-segment--afternoon">
                                <div className="schedule-segment__summary">
                                    <span className="schedule-segment__label">Afternoon</span>
                                    <span className="schedule-segment__range">14:00–17:00</span>
                                </div>
                                <div className="schedule-segment__slots">
                                {TIME_SLOTS.afternoon.map((time) => (
                                <button
                                    key={time}
                                    className={`slot btn--ghost ${
                                    isSlotAvailable(day.iso, time) 
                                        ? 'availability__slot--selected' 
                                        : 'availability__slot--unavailable'
                                    }`}
                                    onClick={() => toggleSlot(day.iso, time)}
                                >
                                    {time}
                                </button>
                                ))}
                                </div>
                            </section>
                        </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}