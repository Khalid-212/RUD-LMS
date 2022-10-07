import React from "react";
import { useForm } from "react-hook-form";

function CheckBox({ val, studname }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // alert("Student Added");
    console.log(data);
  };
  return (
    <div>
      <input
        type="checkbox"
        placeholder="students"
        {...register("students", {})}
        value={val}
      />

      <p>{studname}</p>
    </div>
  );
}

export default CheckBox;
