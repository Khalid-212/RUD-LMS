import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { submitRebaniyaform } from "../../supabase";
import "./FormPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const studentId = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const date = new Date();
  const today = `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`;
  console.log(today);
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(errors);

    await submitRebaniyaform({
      selatinjemaa: data.selat_in_jemaa,
      witr: data.witr,
      rewatib: data.rewatib,
      tilawa: data.tilawa,
      studentId: studentId,
      datesubmitted: today,
      fasting: data.fasting,
      SunnahSelat: data.Sunnah_Selat,
      Azkar: data.Azkar,
    });
    toast.success("Form Submitted");
    setTimeout(() => {
      navigate("/");
    }, 800);
    // console.log(data.date);
  };
  console.log(date.getUTCMonth() + 1);
  console.log(date.getUTCDate());
  console.log(date.getUTCFullYear());
  return (
    <>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <div className="formpage">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formWrapper">
            <p className="formTitle">Tilawa</p>
            <select className="form_input" required {...register("tilawa")}>
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Selat in jema'a</p>
            <select
              className="form_input"
              required
              {...register("selat_in_jemaa")}
            >
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Witr</p>
            <select className="form_input" required {...register("witr")}>
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Azkar</p>
            <select className="form_input" required {...register("Azkar")}>
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Fasting</p>
            <select className="form_input" required {...register("fasting")}>
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Sunnah Selat</p>
            <select
              className="form_input"
              required
              {...register("Sunnah_Selat")}
            >
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            {/* <p className="formTitle">Date</p>
            <input
              type="date"
              className="form_input"
              required
              {...register("date")}
            /> */}
          </div>
          <input className="submit_btn" type="submit" />
        </form>
      </div>
    </>
  );
}

export default FormPage;
