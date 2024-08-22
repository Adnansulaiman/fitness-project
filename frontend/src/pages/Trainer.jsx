import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



const Trainer = () => {

    const [alltrainers,setAlltrainers] = useState([]);

    const fetchInfo = async()=>{
        await fetch('http://localhost:4000/alltrainers')
        .then((res)=>res.json())
        .then((data)=>{
            setAlltrainers(data)
        })
    }
    console.log(alltrainers);
    useEffect(()=>{
        fetchInfo();
    },[])

  return (
    <>
    <div className="row trainer-wrapper">
        {alltrainers.map((trainers,index)=>{
        return(
            <div key={index} className="col-3 trainer-card">
            <img src={trainers.image} alt="" />
            <div className="trainer-card-details">
            <h1>J{trainers.name}</h1>
            <h3> {trainers.workplace}, {trainers.place}  </h3>
            <div className="d-flex justify-content-center gap-4 ">
            
            <p>PH :- {trainers.contactNumber}</p>
            </div>
            
            </div>
        </div>
        )
    })}
    
        
        
    </div>
    
    </>
    
  )
}

export default Trainer