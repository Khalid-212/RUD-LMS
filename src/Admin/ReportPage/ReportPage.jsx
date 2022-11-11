import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import HeaderAdmin from '../../Components/Header/HeaderAdmin'
import ReportTable from '../../Components/ReportTable/ReportTable';
import Tabs from '../../Components/Tabs/Tabs';
import { getRewatibData, getStudentlist, getTilawa } from '../../supabase';
import StudentList from '../StudentList';
import "./ReportPage.css"

function ReportPage() {
    const adminusername = JSON.parse(
        JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
      );
      const [rewatib, setrewatib] = useState([]);
      const rewatibData = async () => {
        const rewatib = await getRewatibData();
        setrewatib(rewatib);
      };
        const tilawa =rewatib.map((rewatib) => rewatib.tilawa)
        const Selat = rewatib.map((rewatib) => rewatib.selatinjemaa)
        const fasting = rewatib.map((rewatib) => rewatib.fasting)
        const SunnahSelat = rewatib.map((rewatib) => rewatib.SunnahSelat)
        const witr = rewatib.map((rewatib) => rewatib.witr)
        // get tilawaawa count from rewatibdata

      useEffect(() => {
      rewatibData();
    }, []);
    
  return (
    <div>
      <HeaderAdmin username={adminusername} />
      <Tabs />
        <div className='totalSubmissions'> Total Number of submissions {rewatib.length}</div>
        <button onClick={()=>{}} className='PrintButton'>Print Page</button>
        <div className="reportDisplayTable">
        <ReportTable property={tilawa} title="Tilawa"/>
        <ReportTable property={Selat} title="Selat in Jema'a"/>
        <ReportTable property={witr} title="Witr"/>
        <ReportTable property={fasting} title="Fasting"/>
        <ReportTable property={SunnahSelat} title="Sunah Selat"/>
        </div>
    </div>
  )
}

export default ReportPage
