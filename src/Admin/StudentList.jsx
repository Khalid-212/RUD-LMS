import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import HeaderAdmin from "../Components/Header/HeaderAdmin";
import Tabs from "../Components/Tabs/Tabs";
import UserCard from "../Components/UserCard/UserCard";
import { getStudentlist } from "../supabase";
import "./StudentList.css";
function StudentList() {
  const [studentList, setStudentList] = React.useState([]);
  const students = async () => {
    const students = await getStudentlist();
    setStudentList(students);
  };


  useEffect(() => {
    students();
  }, []);
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );
  const studentCount = studentList.length;
  return (
    <div>
      <HeaderAdmin username={adminusername} />
      <Tabs />
      <div className="studentCount">
        Total number of students: {studentCount}
      </div>
      <div className="studentList">
        {/* <Link to="/admin/adminhome"></Link> */}
        <div className="studentscards">
          {studentList.length > 0 ? (
            studentList.map((student) => (
              <UserCard
                studentName={student.firstName + " " + student.lastName}
                key={student.id.toString()}
                val={student.id}
              />
            ))
          ) : (
            // <div>loading ...</div>
            <SyncLoader color="#1e9fe9" />
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentList;
