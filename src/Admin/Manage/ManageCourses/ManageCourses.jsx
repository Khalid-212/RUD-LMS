import React, { useEffect, useState } from "react";
import "./ManageCourses.css";
import "./ManageCourses.css";
import HeaderAdmin from "../../../Components/Header/HeaderAdmin";
import Tabs from "../../../Components/Tabs/Tabs";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { getStudentlist } from "../../../supabase";
import CheckBox from "../../../Components/CheckBox/CheckBox";

function ManageCourses() {
  const { register, handleSubmit } = useForm();
  const [studentList, setStudentList] = React.useState([]);
  const [selectedStudents, setselectedStudents] = useState([]);
  const students = async () => {
    const students = await getStudentlist();
    setStudentList(students);
  };
  useEffect(() => {
    students();
  }, []);
  const onSubmit = async (data) => {
    console.log(studentList.map((student) => student.id));
  };

  return (
    <div>
      <HeaderAdmin />
      <Tabs />
      <div className="managecourse">
        <form className="addcourseform" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Course</h2>
          <input
            className="add_caourse_input"
            type="text"
            placeholder="course name"
            {...register("coursename", {})}
            required
          />
          <input
            className="add_caourse_input"
            type="text"
            placeholder="course code"
            {...register("course code", {})}
            required
          />

          <input className="submit_btn" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ManageCourses;
