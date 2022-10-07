import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import SubmissionCard from "../Components/SubmissionCard/SubmissionCard";
import Tabs from "../Components/Tabs/Tabs";
import "./AdminHome.css";

function AdminHome() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );

  return (
    <>
      <div>
        <Header username={adminusername ? adminusername : "adminusername"} />
        <Tabs />
        <h3 style={{ marginTop: "5rem", color: "#1e9fe9" }}>
          Recent Submissions
        </h3>
        <div className="submissionList">
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
