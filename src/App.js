import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import AdminLogin from "./Admin/AdminLogin";
import StudentList from "./Admin/StudentList";
import { adminstat } from "./adminSlice";
import "./App.css";
import HadisPage from "./Pages/CoursePages/HadisPage/HadisPage";
import QuranPage from "./Pages/CoursePages/QuranPage/QuranPage";
import SiraPage from "./Pages/CoursePages/SiraPage/SiraPage";
import Home from "./Pages/HomePage/Home";
import UserLogin from "./Pages/UserLoginPage/UserLogin";
import { admin, selectUser } from "./userSlice";

function App() {
  const user = useSelector(selectUser);
  const admnisloggedin = useSelector(adminstat);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <UserLogin />} />
        <Route path="/home" element={user ? <Home /> : <UserLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/sirapage" element={user ? <SiraPage /> : <UserLogin />} />
        <Route
          path="/hadispage"
          element={user ? <HadisPage /> : <UserLogin />}
        />
        <Route
          path="/quranpage"
          element={user ? <QuranPage /> : <UserLogin />}
        />
        {/* admin routs */}
        <Route
          path="/admin"
          element={admnisloggedin ? <AdminLogin /> : <AdminLogin />}
        />
        <Route
          path="/admin/adminhome"
          element={admnisloggedin ? <AdminHome /> : <AdminLogin />}
        />
        <Route
          path="/admin/studentlist"
          element={admnisloggedin ? <StudentList /> : <AdminLogin />}
        />
      </Routes>
    </div>
  );
}

export default App;
