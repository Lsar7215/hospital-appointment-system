import { useState } from 'react';
import SearchBar from '../../components/SearchBar'
import DoctorCard from '../../components/DoctorCard'
import { DOCTORS } from '../../data/mockData';

export default function Doctors(){
  
  const results = DOCTORS;


  //see more button
  const [showAllResult, setShowAllResult] = useState(false);

  // sort by last_name alphabetically
  const [sortOrder, setSortOrder] = useState("recommended");

  // Sort by last_name alphabetically
  const sortedResults = [...results].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.last_name.localeCompare(b.last_name, "en", { sensitivity: "base" });
    }
    if (sortOrder === "desc") {
      return b.last_name.localeCompare(a.last_name, "en", { sensitivity: "base" });
    }
    // 'recommended'(original order)
    return 0;
  });

  const visibleResults = showAllResult ? sortedResults : sortedResults.slice(0, 8);

  return(
      <div className="doctors" id="doctors">
          <div className='container'>
              <div className='doctors__header'>
                  <h1 className='head__title'>Find Doctors</h1>
                  <p className='head__lead'>Filter by specialty, date, and time window to see matching doctors.</p>
              </div>
              <SearchBar/>
              <div className='doctors__meta'>
                  <h4 className='doctors__count'>{results.length === 0 ? "":`${results.length} result${results.length > 1 ? "s":""}`}</h4>
                  <span>-</span>
                  <div className='doctors__sort'>
                      <span className='doctors__sort-label'>Sort:</span>
                      <button className={`${sortOrder === "recommended" ? "is-active" :""}`} onClick={()=>setSortOrder("recommended")}>Recommended</button>
                      <span>/</span>
                      <button className={`${sortOrder === "asc" ? "is-active" :""}`} onClick={()=>setSortOrder("asc")}>A-Z</button>
                      <span>/</span>
                      <button className={`${sortOrder === "desc" ? "is-active" :""}`} onClick={()=>setSortOrder("desc")}>Z-A</button>
                  </div>
              </div>
              <div className="doctors__grid">
                  {visibleResults.map((d)=>
                    (
                      <DoctorCard
                        key={d.doctor_id}
                        doctor_id ={d.doctor_id}
                        first_name={d.first_name}
                        last_name={d.last_name}
                        specialization={d.specialization}
                      />
                    )
                  )}
              </div>
              {results.length > 8 && (
                  <button 
                      className="btn btn--ghost btn--see-more"
                      onClick={()=> setShowAllResult((prev) => !prev)}
                  >{showAllResult ? "See less" : "See more"}</button>
              )
              }
          </div>
      </div>
  )
}