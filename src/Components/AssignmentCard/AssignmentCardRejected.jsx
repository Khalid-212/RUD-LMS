import React from "react";

function AssignmentCardRejected({number}) {
  return (
    <div className="assignmentCardRejected">
      <div className="assignmentCardItemsRejected">
        <h3 className="assignmentTitleRejected">Submission {number}</h3>
      </div>
    </div>
  );
}

export default AssignmentCardRejected;
