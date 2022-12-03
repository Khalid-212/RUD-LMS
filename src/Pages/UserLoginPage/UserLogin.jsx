import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { login, selectUser } from "../../userSlice";
import "./userLoginPage.css";
import { addSession, getStudentByCredentials } from "../../supabase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentusername, setcurrentusername] = useState("");
  const { register, handleSubmit } = useForm();
  const [errorborder, seterrorborder] = useState("");

  const onSubmit = async (data) => {
    const logn = await getStudentByCredentials(data.username, data.password);
    try {
      if (logn) {
        setcurrentusername(logn.userName);
        dispatch(
          login({
            username: logn.userName,
            firstname: logn.firstName,
            lastName: logn.lastName,
            id: logn.id,
          })
        );
        // console.log(await addSession(logn.id));
        console.log(logn.id);
        navigate("/home");
      } else {
        toast.error("wrong credentials");
      }
    } catch (error) {
      console.log(error);
      seterrorborder("1px solid red");
    }
    await addSession({ studentId: logn.id });
  };
  if (useSelector(selectUser)) {
    navigate("/userlogin");
    // createsession();
  }

  return (
    <>
      <Header
        username={useLocation().pathname === "/home" ? currentusername : ""}
      />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <input
            style={{ border: errorborder }}
            className="UsernameInput"
            type="text"
            placeholder="username"
            {...register("username", {})}
            required
          />
          <input
            required
            style={{ border: errorborder }}
            className="PasswordInput"
            type="password"
            placeholder="password"
            {...register("password", {})}
          />
          {/* <Link
            to="/admin"
            style={{ textDecoration: "none", color: "#1e9fe9" }}
          >
            admin login
          </Link> */}
          <input className="SubmitButton" type="submit" />
        </form>
        {/* <button onClick={tes}>try</button> */}
      </div>
    </>
  );
}

export default UserLogin;
