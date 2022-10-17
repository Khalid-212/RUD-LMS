import React from "react";
import "./AssignmentCard.css";

function AssignmentCard() {
  return (
    <div className="assignmentCard">
      <div className="assignmentCardItems">
        <h3 className="assignmentTitle">Assignment 1</h3>
        <div className="tick">&#10003;</div>
      </div>
    </div>
  );
}

export default AssignmentCard;
