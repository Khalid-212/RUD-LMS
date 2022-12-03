import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { totalSubmissions } from "../../adminSlice";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import ReportTable from "../../Components/ReportTable/ReportTable";
import SubmissionCard from "../../Components/SubmissionCard/SubmissionCard";
import Tabs from "../../Components/Tabs/Tabs";
import {
  getRewatiDataByDate,
  getStudentById,
  getStudentlist,
} from "../../supabase";
import AssignmentReportCardStudent from "../AssignmentReportCardStudent/AssignmentReportCardStudent";
import "./ReportPage.css";

function ReportPage() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [selectedDate, setSelectedDate] = useState(date);

  const [rewatib, setrewatib] = useState([]);
  const rewatibData = async () => {
    const rewatib = await getRewatiDataByDate(selectedDate);
    setrewatib(rewatib);
  };

  // store item in localstorage

  const tilawa = rewatib.map((rewatib) => rewatib.tilawa);
  const Selat = rewatib.map((rewatib) => rewatib.selatinjemaa);
  const fasting = rewatib.map((rewatib) => rewatib.fasting);
  const SunnahSelat = rewatib.map((rewatib) => rewatib.SunnahSelat);
  const witr = rewatib.map((rewatib) => rewatib.witr);
  const Azkar = rewatib.map((rewatib) => rewatib.Azkar);

  console.log(rewatib);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = rewatib.length;

  const [studentlist, setstudentlist] = useState([]);

  const studentlistData = async () => {
    rewatib.map((rewatib) => {
      getStudentById(rewatib.studentId).then((student) => {
        console.log(student.firstName);
        setstudentlist((studentlist) => [
          ...studentlist,
          student.firstName + " " + student.lastName,
        ]);
        // setstudentlist((student) => [...student, student]);
      });
    });
  };

  useEffect(() => {
    dispatch(totalSubmissions(total));
    studentlistData();
  }, [rewatib.length]);
  console.log(studentlist);

  useEffect(() => {
    rewatibData();
  }, [selectedDate]);

  return (
    <div>
      <HeaderAdmin username={adminusername} />
      <Tabs />
      <div className="ReportPageheader">
        <div className="totalRewatibSubmissions">
          {" "}
          Total Number of submissions {rewatib.length}
        </div>
        <div>
          <span>pick a date</span>
          <input
            className="datePicker"
            type="date"
            name=""
            id=""
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setstudentlist([]);
            }}
          />
        </div>
      </div>
      <div className="ReportPage">
        <div className="reportDisplayTable">
          <ReportTable property={tilawa} title="Tilawa" />
          <ReportTable property={Selat} title="Selat in Jema'a" />
          <ReportTable property={witr} title="Witr" />
          <ReportTable property={fasting} title="Fasting" />
          <ReportTable property={Azkar} title="Azkar" />
          <ReportTable property={SunnahSelat} title="Sunah Selat" />
        </div>
        <div className="SubmissionList">
          <p>Student List</p>
          {studentlist
            ? studentlist.map((student) => (
                <div>
                  {studentlist.indexOf(student) + 1} :
                  <AssignmentReportCardStudent
                    name={student}
                  />
                </div>
              ))
            : "loading"}
        </div>
      </div>
      <button onClick={() => {}} className="PrintButton">
        Print Page
      </button>
    </div>
  );
}

export default ReportPage;
