import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import "./Home.css";
import { getCourse, getCourseForStudent } from "../../supabase";
import { usercourse } from "../../courseSlice";
import { ClipLoader, SyncLoader } from "react-spinners";

function Home() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  const [course, setCourse] = useState([]);
  const [allCourses, setallCourses] = useState(false);
  // const [studentcourseId, setStudentCourseId] = useState();
  const dispatch = useDispatch();
  const uid = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const getstudentcourselist = async () => {
    setCourse(await getCourseForStudent(uid));
  };
  const studentCourseList = async () => {
    const getAllCourses = await Promise.all(
      course.map(async (c) => {
        return await getCourse(c.CourseId);
      })
    ).then((e) => e.map((l) => l[0]));
    // console.log({ getAllCourses });
    setallCourses(getAllCourses);
  };
  useEffect(() => {
    if (course.length) {
      studentCourseList();
      // console.log(course.courseProgress);
    }
  }, [course]);
  const [progress, setProgress] = useState([]);
  useEffect(() => {
    if (allCourses) {
      course.map((c) => {
        progress.push(c.courseProgress);
      });
    }
    console.log(progress);
  }, [allCourses]);

  useEffect(() => {
    getstudentcourselist();
  }, []);
  const selectedCourse = (selected, progress) => {
    dispatch(
      usercourse({
        id: selected,
        progress: progress,
      })
    );
  };

  return (
    <div>
      <Header username={username ? username : ""} />
      <div className="courseList">
        {allCourses ? (
          allCourses.map((item) => (
            <Link
              onClick={() => selectedCourse(item.id, item.progress)}
              to={"/coursepage"}
              // to={`/${item.name}page`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <CourseCard
                styling="courseCard"
                color="blue"
                title={item.name}
                progress={progress[1]}
              />
            </Link>
          ))
        ) : (
          <SyncLoader color="#1e9fe9" />
        )}
      </div>
    </div>
  );
}

export default Home;
