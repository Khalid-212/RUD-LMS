import React from "react";
import "./AssignmentStatusCard.css";

function AssignmentStatusCard({
  Assignmentnumber,
  AssingmentSubmissionDate,
  Assignmentstatus,
}) {
  return (
    <div style={{ margin: "1rem" }}>
      <div className="assignmentStatusCard">
        <div className="assignmentNumber">
          {"Assignment" + Assignmentnumber}
        </div>
        <div className="assignmentDate">{AssingmentSubmissionDate}</div>
        {Assignmentstatus === "pending" ? (
          <div className="statusbannerPending">{Assignmentstatus}</div>
        ) : (
          <div className="statusbannerDone">{Assignmentstatus}</div>
        )}
      </div>
    </div>
  );
}

export default AssignmentStatusCard;
