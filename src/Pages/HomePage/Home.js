import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import "./Home.css";
import { getCourse, getCourseForStudent } from "../../supabase";
import { usercourse } from "../../courseSlice";

function Home() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  const [course, setCourse] = useState([]);
  const [p, setp] = useState(false);
  const [studentcourseId, setStudentCourseId] = useState();
  const dispatch = useDispatch();
  const uid = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const getstudentcourselist = async () => {
    setCourse(await getCourseForStudent(uid));
  };
  const g = async () => {
    const pi = await Promise.all(
      course.map(async (c) => {
        return await getCourse(c.CourseId);
      })
    ).then((e) => e.map((l) => l[0]));
    // console.log({ pi });
    setp(pi);
  };
  useEffect(() => {
    if (course.length) {
      g();
      // console.log({ course });
    }

    // console.log(course);
  }, [course]);
  useEffect(() => {
    // console.log(p);
    if (p) {
      dispatch(
        usercourse({
          id: p[0].id,
        })
      );
    }
  }, [p]);
  useEffect(() => {
    getstudentcourselist();
  }, []);

  return (
    <div>
      <Header username={username ? username : ""} />
      <div className="courseList">
        {p
          ? p.map((item) => (
              <Link
                to={`/${item.name}page`}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <CourseCard
                  styling="courseCard"
                  color="blue"
                  title={item.name}
                  progress="75"
                />
              </Link>
            ))
          : "Loading courses..."}
      </div>
    </div>
  );
}

export default Home;
