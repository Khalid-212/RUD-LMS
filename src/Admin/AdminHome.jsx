import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderAdmin from "../Components/Header/HeaderAdmin";
import SubmissionCard from "../Components/SubmissionCard/SubmissionCard";
import Tabs from "../Components/Tabs/Tabs";
import {
  allBuckets,
  getAllAssignmentsListing,
  getAssignmentById,
  getImages,
  getimagesinDB,
  getStudentById,
  getStudentlist,
} from "../supabase";
import "./AdminHome.css";

function AdminHome() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );

  // a function to get all assignments and get student name from assignment.Student
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);
  const [images, setImages] = useState([]);
  const [buckets, setBuckets] = useState([]);
  const [imagesinDB, setImagesinDB] = useState([]);
  const getAssignments = async () => {
    setAssignments(await getAllAssignmentsListing());
  };

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <>
      <div>
        <HeaderAdmin
          username={adminusername ? adminusername : "adminusername"}
        />
        <Tabs />
        <h3 style={{ marginTop: "5rem", color: "#1e9fe9" }}>
          Recent Submissions
        </h3>
        <div className="submissionList">
          {assignments
            ? assignments.map((assignment) => (
                <SubmissionCard
                  val={assignment.StudentId}
                  name={assignment.StudentName}
                  Submissiondate={assignment.created_at}
                  number={assignment.id}
                  key={assignment.created_at}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
