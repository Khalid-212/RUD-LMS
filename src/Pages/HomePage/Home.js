import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import "./Home.css";

function Home() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  return (
    <div>
      <Header username={username ? username : ""} />
      <div className="courseList">
        <Link to="/sirapage" style={{ textDecoration: "none" }}>
          <CourseCard
            title="sira"
            progress="64"
            styling="courseCard"
            color="blue"
          />
        </Link>
        <Link to="/hadispage" style={{ textDecoration: "none" }}>
          <CourseCard
            styling="courseCard"
            color="blue"
            title="hadis"
            progress="75"
          />
        </Link>
        <Link to="/quranpage" style={{ textDecoration: "none" }}>
          <CourseCard
            styling="courseCard"
            color="blue"
            title="quran"
            progress="55"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
