import React from "react";
import "./AssignmentCard.css";

function AssignmentCard({number}) {
  return (
    <div className="assignmentCard">
      <div className="assignmentCardItems">
        <h3 className="assignmentTitle">Assignment {number}</h3>
      </div>
    </div>
  );
}

export default AssignmentCard;
