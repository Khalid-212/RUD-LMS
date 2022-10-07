import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Tabs from "../Components/Tabs/Tabs";
import UserCard from "../Components/UserCard/UserCard";
import { getStudentlist } from "../supabase";
import "./StudentList.css";
function StudentList() {
  const [studentList, setStudentList] = React.useState([]);
  const a = async () => {
    const students = await getStudentlist();
    // console.log(students);
    setStudentList(students);
  };

  useEffect(() => {
    a();
  }, []);
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );

  return (
    <div>
      <Header username={adminusername} />
      <Tabs />
      <div className="studentList">
        <Link to="/admin/adminhome"></Link>
        <div className="studentscards">
          {studentList.map((student) => (
            <UserCard
              key={student.id.toString()}
              studentName={student.firstName + " " + student.lastName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentList;
