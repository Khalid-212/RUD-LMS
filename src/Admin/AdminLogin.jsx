import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { useForm } from "react-hook-form";
import { getAdminByCredentials } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminstat, selectadmin } from "../adminSlice";
import "./AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentusername, setcurrentusername] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const adminlogn = await getAdminByCredentials(data.username, data.password);
    try {
      if (adminlogn) {
        setcurrentusername(adminlogn.userName);
        dispatch(
          adminstat({
            username: adminlogn.username,
            firstname: adminlogn.firstname,
            lastName: adminlogn.lastname,
          })
        );
        navigate("/admin/home");
      } else {
        toast.error("wrong credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (useSelector(selectadmin)) {
    navigate("/admin/home");
  }
  return (
    <div className="adminLoginPage">
      <Header username={currentusername === null ? "" : currentusername} />
      <div className="form">
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Admin Login</h1>
          <input
            className="UsernameInput adminInput"
            type="text"
            placeholder="username"
            {...register("username", {})}
            required
          />
          <input
            required
            className="PasswordInput adminInput"
            type="password"
            placeholder="password"
            {...register("password", {})}
          />
          <input className="SubmitButton adminInput" type="submit" />
        </form>
        {/* <button onClick={caller}>try</button> */}
      </div>
    </div>
  );
}

export default AdminLogin;
