import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import AdminLogin from "./Admin/AdminLogin";
import EvaluationPage from "./Admin/EvaluationPage/EvaluationPage";
import ManageCourses from "./Admin/Manage/ManageCourses/ManageCourses";
import ManagePage from "./Admin/Manage/ManagePage";
import ManageStudents from "./Admin/Manage/ManageStudents/ManageStudents";
import ReportPage from "./Admin/ReportPage/ReportPage";
import StudentList from "./Admin/StudentList";
import { selectadmin } from "./adminSlice";
import "./App.css";
import CoursePage from "./Pages/CoursePages/CoursePage";
import FormPage from "./Pages/FormPage/FormPage";
import Home from "./Pages/HomePage/Home";
import UserLogin from "./Pages/UserLoginPage/UserLogin";
import { selectUser } from "./userSlice";
// import HadisPage from "./Pages/CoursePages/HadisPage/HadisPage";
// import QuranPage from "./Pages/CoursePages/QuranPage/QuranPage";
// import SiraPage from "./Pages/CoursePages/SiraPage/SiraPage";

function App() {
  const user = useSelector(selectUser);
  const admnisloggedin = useSelector(selectadmin);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/home" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/userlogin" element={<UserLogin />} />
        {/* <Route
          exact
          path="/sirapage"
          element={user ? <SiraPage /> : <UserLogin />}
        /> */}
        <Route
          exact
          path="/coursepage"
          element={user ? <CoursePage /> : <UserLogin />}
        />
        <Route
          exact
          path="/form"
          element={user ? <FormPage /> : <UserLogin />}
        />
        {/* <Route
          exact
          path="/hadispage"
          element={user ? <HadisPage /> : <UserLogin />}
        /> */}
        {/* <Route
          exact
          path="/quranpage"
          element={user ? <QuranPage /> : <UserLogin />}
        /> */}
        <Route
          exact
          path="/admin"
          element={admnisloggedin ? <AdminHome /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/home"
          element={admnisloggedin ? <AdminHome /> : <AdminHome />}
        />
        <Route
          exact
          path="/admin/Reports"
          element={admnisloggedin ? <ReportPage /> : <AdminHome />}
        />

        <Route
          exact
          path="/admin/studentlist"
          element={admnisloggedin ? <StudentList /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/manage"
          element={admnisloggedin ? <ManagePage /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/manage/managestudents"
          element={admnisloggedin ? <ManageStudents /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/manage/managecourses"
          element={admnisloggedin ? <ManageCourses /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/manage/evaluation"
          element={admnisloggedin ? <EvaluationPage /> : <AdminLogin />}
        />
      </Routes>
    </div>
  );
}

export default App;
