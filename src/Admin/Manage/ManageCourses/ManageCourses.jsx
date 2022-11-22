import React, { useEffect } from "react";
import "./ManageCourses.css";
import "./ManageCourses.css";
import HeaderAdmin from "../../../Components/Header/HeaderAdmin";
import Tabs from "../../../Components/Tabs/Tabs";
import { useForm } from "react-hook-form";
import { addCourse, getallCourses, getStudentlist,assignCourseToStudent, assignCourseToAllStudents } from "../../../supabase";

function ManageCourses() {
  const { register, handleSubmit } = useForm();
  const [studentList, setStudentList] = React.useState([]);
  const [courseList, setCourseList] = React.useState([]);
  const [selected, setSetselected] = React.useState("");
  const students = async () => {
    const students = await getStudentlist();
    setStudentList(students);
  };
  useEffect(() => {
    students();
  }, []);
  const onSubmit = async (data) => {
    // console.log(studentList.map((student) => student.id));
    await addCourse({
      name: data.coursename,
      code: data.coursecode,
      courseModule: data.coursemodule,
    });
    console.log(data);
  };

  const getcourse = async () => {
    const courses = await getallCourses();
    setCourseList(courses);
  };

  useEffect(() => {
    getcourse();
  }, []);
  // courseList.map((course) => console.log(course));
  console.log(courseList);

  const assigner = async (courseid)=>{
    // a function to assign courses to all students
    const studentIds = studentList.map((student) => student.id);
    console.log(studentIds);
    // for(let i=0;i<studentIds.length;i++){
    await assignCourseToStudent({courseid:courseid, studentId:studentIds[0]});
    // }
    // console.log(courseid);
  }


  console.log(selected);


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
            {...register("coursecode", {})}
            required
          />
          <input
            className="add_caourse_input"
            type="text"
            placeholder="course module"
            {...register("coursemodule", {})}
            required
          />

          <input className="submit_btn" type="submit" />
        </form>
      </div>
      {courseList?.map((course) => (
        <div className="course">
          <h2>{course.name}</h2>
          <h2>{course.code}</h2>
          <h2>{course.courseModule}</h2>
          <button onClick={()=>{assigner(course.id)}}>Assign Course</button>
          </div>
      ))}
    </div>
  );
}

export default ManageCourses;
