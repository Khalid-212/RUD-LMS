import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddAssignmentPage from "./Admin/AddAssignmentPage/AddAssignmentPage";
import AdminHome from "./Admin/AdminHome";
import AdminLogin from "./Admin/AdminLogin";
import AssignmentReportPage from "./Admin/AssignmentReportPage/AssignmentReportPage";
import Assignmentreport from "./Admin/AssignmentReportPage/AssignmentReportPage";
import EvaluationPage from "./Admin/EvaluationPage/EvaluationPage";
import ManageCourses from "./Admin/Manage/ManageCourses/ManageCourses";
import ManagePage from "./Admin/Manage/ManagePage";
import ManageStudents from "./Admin/Manage/ManageStudents/ManageStudents";
import ReportPage from "./Admin/ReportPage/ReportPage";
import StudentList from "./Admin/StudentList";
import { selectadmin } from "./adminSlice";
import "./App.css";
import AssignmentSubmissionPage from "./Pages/AssignmentPage/AssignmentSubmissionPage";
import CoursePage from "./Pages/CoursePages/CoursePage";
import FormPage from "./Pages/FormPage/FormPage";
import Home from "./Pages/HomePage/Home";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import UserLogin from "./Pages/UserLoginPage/UserLogin";
import { selectUser } from "./userSlice";
import AssignmentReSubmissionPage from "./Pages/AssignmentPage/AssignmentReSubmissionPage";
// import HadisPage from "./Pages/CoursePages/HadisPage/HadisPage";
// import QuranPage from "./Pages/CoursePages/QuranPage/QuranPage";
// import SiraPage from "./Pages/CoursePages/SiraPage/SiraPage";

function App() {
  const user = useSelector(selectUser);
  const admnisloggedin = useSelector(selectadmin);
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/home" element={user ? <Home /> : <UserLogin />} />
        <Route exact path="/userlogin" element={<UserLogin />} />

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

        <Route
          exact
          path="/AssignmentSubmissionPage"
          element={user ? <AssignmentSubmissionPage /> : <UserLogin />}
        />
        <Route
          exact
          path="/AssignmentreSubmissionPage"
          element={user ? <AssignmentReSubmissionPage /> : <UserLogin />}
        />
        <Route
          exact
          path="/admin"
          element={admnisloggedin ? <AdminHome /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/home"
          element={admnisloggedin ? <AdminHome /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/Reports"
          element={admnisloggedin ? <ReportPage /> : <AdminLogin />}
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
          path="/admin/manage/manageAssignments"
          element={admnisloggedin ? <AddAssignmentPage /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/manage/evaluation"
          element={admnisloggedin ? <EvaluationPage /> : <AdminLogin />}
        />
        <Route
          exact
          path="/admin/Assignmentreport"
          element={admnisloggedin ? <AssignmentReportPage /> : <AdminLogin />}
        />
      </Routes>
    </div>
  );
}

export default App;
