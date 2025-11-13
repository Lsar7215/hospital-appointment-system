export default function Schedule(){
    const week =[
        { iso: "2025-10-13", dayName: "Monday", monthDay: "October 13" },
        { iso: "2025-10-14", dayName: "Tuesday", monthDay: "October 14" },
        { iso: "2025-10-15", dayName: "Wednesday", monthDay: "October 15" },
        { iso: "2025-10-16", dayName: "Thursday", monthDay: "October 16" },
        { iso: "2025-10-17", dayName: "Friday", monthDay: "October 17" },
    ]

    return(
        <div className="schedule">
            <div className="schedule__container container">
                <header className="schedule__header">
                    <h1 className="schedule__title">Manage Availability</h1>
                </header>
                <section className="schedule__week">
                    <div className="schedule__card">
                        <h2 className="schedule__week-title">Week of {week[0]?.monthDay} – {week[week.length-1]?.monthDay}</h2>
                        <div className="schedule__actions">
                            <button className="toggle__btn btn--ghost"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span> Prev week</button>
                            <button className="toggle__btn btn--ghost">This week</button>
                            <button className="toggle__btn btn--ghost">Next week <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button>
                        </div>
                    </div>

                    <div className="schedule__body schedule__card">
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

                        {week.map((day)=>(
                        <article className="schedule-day schedule__card">
                            <header className="schedule-day__header">
                                <div className="schedule-day__title">
                                    <h3 className="schedule-day__day">{day.dayName}</h3>
                                    <span className="schedule-day__date">{day.monthDay}</span>
                                </div>
                                <div className="schedule-segment__actions">
                                    <button className="toggle__btn btn--ghost" data-period="morning">Morning</button>
                                    <button className="toggle__btn btn--ghost" data-period="afternoon">Afternoon</button>
                                    <button className="toggle__btn btn--ghost">Clear All</button>
                                </div>
                            </header>
                            <section className="schedule-segment schedule-segment--morning">
                                <div className="schedule-segment__summary">
                                    <span className="schedule-segment__label">Morning</span>
                                    <span className="schedule-segment__range">09:00–12:00</span>
                                </div>
                                <div className="schedule-segment__slots">
                                    <button className="slot slot--available btn--ghost">09:00</button>
                                    <button className="slot slot--available btn--ghost">09:30</button>
                                    <button className="slot slot--available btn--ghost">10:00</button>
                                    <button className="slot slot--available btn--ghost">10:30</button>
                                    <button className="slot slot--available btn--ghost">11:00</button>
                                    <button className="slot slot--available btn--ghost">11:30</button>
                                </div>
                            </section>
                            <section className="schedule-segment schedule-segment--afternoon">
                                <div className="schedule-segment__summary">
                                    <span className="schedule-segment__label">Afternoon</span>
                                    <span className="schedule-segment__range">14:00–17:00</span>
                                </div>
                                <div className="schedule-segment__slots">
                                    <button className="slot slot--available btn--ghost">14:00</button>
                                    <button className="slot slot--available btn--ghost">14:30</button>
                                    <button className="slot slot--available btn--ghost">15:00</button>
                                    <button className="slot slot--available btn--ghost">15:30</button>
                                    <button className="slot slot--available btn--ghost">16:00</button>
                                    <button className="slot slot--available btn--ghost">16:30</button>
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