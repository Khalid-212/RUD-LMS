import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import UserCard from "../Components/UserCard/UserCard";
import { getStudentlist } from "../supabase";

function AdminHome() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );
  const [studentList, setStudentList] = React.useState([]);
  const a = async () => {
    const students = await getStudentlist();
    // console.log(students);
    setStudentList(students);
  };
  try {
    useEffect(() => {
      a();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div>
        <Header username={adminusername} />
        {/* student list */}
        {/* <button onClick={a}>a</button> */}
        <Link to="/admin/studentlist">Student List</Link>

        <div className="studentscards">
          {studentList.map((student) => (
            <UserCard
              key={student.id.toString()}
              studentName={student.firstName + " " + student.lastName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
