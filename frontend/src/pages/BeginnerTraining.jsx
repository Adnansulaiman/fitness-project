import React, { useState, useEffect } from "react";

const BeginnerTraining = () => {
  const [proTrainings, setProTrainings] = useState([]);

  useEffect(() => {
    const fetchBeginnerTrainings = async () => {
      try {
        const response = await fetch("http://localhost:4000/alltraining");
        const data = await response.json();
        const proTrainings = data.filter(training => training.category === "beginner");
        setProTrainings(proTrainings);
      } catch (error) {
        console.error("Error fetching pro trainings:", error);
      }
    };

    fetchBeginnerTrainings();
  }, []);

  return (
    <div className="row trainer-wrapper">
      {proTrainings.map((training, index) => (
        <div key={index} className="col-3 trainer-card">
          <h2>Step {index + 1}</h2>
          <img src={training.image} alt="" />
          <div className="trainer-card-details">
            <div className="d-flex justify-content-center gap-100 py-3 ">
              <h3>{training.name}</h3>
              <div className="right-side d-flex align-items-center gap-1">
                <p>{training.time} min</p>
                <p>x{training.repeat}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeginnerTraining;
