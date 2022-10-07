import React from "react";
import "./SubmissionCard.css";

function SubmissionCard() {
  return (
    <div className="submissioncard">
      <div className="studentname">
        <p>Khalid Ibrahim</p>
      </div>
      <div className="coursename">
        <p>Sira</p>
      </div>
      <div className="submissiondate">
        <p>12/5/2022</p>
      </div>
      <div className="assignmentnumber">
        <p>Assignment 3</p>
      </div>
    </div>
  );
}

export default SubmissionCard;
