import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { submitRebaniyaform } from "../../supabase";
import "./FormPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormPage() {
  const studentId = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(errors);

    await submitRebaniyaform({
      selatinjemaa: data.selat_in_jemaa,
      witr: data.witr,
      rewatib: data.rewatib,
      tilawa: data.tilawa,
      studentId: studentId,
      datesubmitted: data.date,
    });
    toast.sucsess("Form Submitted");
  };

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
            <p className="formTitle">Rewatib</p>
            <select className="form_input" required {...register("rewatib")}>
              <option value="0 days">0 days</option>
              <option value="1-2 days">1-2 days</option>
              <option value="3-4 days">3-4 days</option>
              <option value="5-6 days">5-6 days</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
          <div className="formWrapper">
            <p className="formTitle">Date</p>
            <input
              type="date"
              className="form_input"
              required
              {...register("date")}
            />
          </div>
          <input className="submit_btn" type="submit" />
        </form>
      </div>
    </>
  );
}

export default FormPage;
