import React from "react";
import { Link } from "react-router-dom";
import "./ManagePage.css";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import { useSelector } from "react-redux";
import Tabs from "../../Components/Tabs/Tabs";

function ManagePage() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );

  return (
    <>
      <HeaderAdmin username={adminusername ? adminusername : ""} />
      <Tabs />
      <div className="managePage">
        <Link
          style={{ textDecoration: "none" }}
          to="/admin/manage/managestudents"
        >
          <div className="manageCard">Manage Students</div>
        </Link>
        {/* <Link
          style={{ textDecoration: "none" }}
          to="/admin/manage/managecourses"
        >
          <div className="manageCard">Manage courses</div>
        </Link> */}
        <Link
          style={{ textDecoration: "none" }}
          to="/admin/manage/manageAssignments"
        >
          <div className="manageCard">Add Question</div>
        </Link>
      </div>
    </>
  );
}

export default ManagePage;
