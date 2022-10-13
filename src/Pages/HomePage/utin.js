import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCourseForStudent } from "../../supabase";

export const getCoursesForStudent = () => {
  const [course, setCourse] = useState([]);
  //   const [p, setp] = useState();
  //   const [studentcourseId, setStudentCourseId] = useState();

  const uid = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const getstudentcourse = async () => {
    setCourse(await getCourseForStudent(uid));
  };
  useEffect(() => {
    getstudentcourse();
  }, []);
};
