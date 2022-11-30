import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectedRout } from "../../routSlice";
import "./Tabs.css";

function Tabs() {
  const selectedTab = (selected) => {
    const dispatch = useDispatch();
    dispatch(selectedRout(selected));
  };
  return (
    <div>
      <div className="tabsWrapper">
        <Link
          to="/admin/studentlist"
          onClick={() => selectedTab("StudentList")}
          style={{ textDecoration: "none" }}
        >
          <div className="tabs">
            <p>Student List</p>
          </div>
        </Link>
        <Link
          to="/admin/manage"
          onClick={() => selectedTab("Manage")}
          style={{ textDecoration: "none" }}
        >
          <div className="tabs">
            <p>Manage</p>
          </div>
        </Link>
        <Link
          to="/admin/Reports"
          onClick={() => selectedTab("Reports")}
          style={{ textDecoration: "none" }}
        >
          <div className="tabs">
            <p>Rebaniya Reports</p>
          </div>
        </Link>
        <Link
          to="/admin/Assignmentreport"
          onClick={() => selectedTab("AssignmentReport")}
          style={{ textDecoration: "none" }}
        >
          <div className="tabs">
            <p>Assignment Report</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
