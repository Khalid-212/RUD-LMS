import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import AdminLogin from "./Admin/AdminLogin";
import ManageCourses from "./Admin/Manage/ManageCourses/ManageCourses";
import ManagePage from "./Admin/Manage/ManagePage";
import ManageStudents from "./Admin/Manage/ManageStudents/ManageStudents";
import StudentList from "./Admin/StudentList";
import { selectadmin } from "./adminSlice";
import "./App.css";
import HadisPage from "./Pages/CoursePages/HadisPage/HadisPage";
import QuranPage from "./Pages/CoursePages/QuranPage/QuranPage";
import SiraPage from "./Pages/CoursePages/SiraPage/SiraPage";
import Home from "./Pages/HomePage/Home";
import UserLogin from "./Pages/UserLoginPage/UserLogin";
import { selectUser } from "./userSlice";

function App() {
  const user = useSelector(selectUser);
  const admnisloggedin = useSelector(selectadmin);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/home" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/userlogin" element={<UserLogin />} />
        <Route
          exact
          path="/sirapage"
          element={user ? <SiraPage /> : <UserLogin />}
        />
        <Route
          exact
          path="/hadispage"
          element={user ? <HadisPage /> : <UserLogin />}
        />
        <Route
          exact
          path="/quranpage"
          element={user ? <QuranPage /> : <UserLogin />}
        />
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
      </Routes>
    </div>
  );
}

export default App;
