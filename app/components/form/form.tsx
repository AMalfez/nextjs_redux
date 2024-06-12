"use client";

import "./form.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { User, selectUser, setuser } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from 'next/navigation'

function Form() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const checkIfExist = (data: User) => {
    let isExist = false;
    for (let i = 0; i < user.length; i++) {
      if (user[i].email === data.email) {
        isExist = true;
        break;
      }
    }
    return isExist;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => {
    if(!checkIfExist(data)){
      dispatch(setuser(data));
      router.push("/emails")
    }
    else alert("Email already exists.")
  };
  return (
    <div className="form_container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { minLength: 3, required: "Name is required" })}
          placeholder="Enter name"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && errors.name.type === "required" && (
          <p className="error_p">This field is required</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p className="error_p">Name should be atleast 3 characters long</p>
        )}
        <br />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          placeholder="Enter email"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="error_p">This field is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="error_p">Email is invalid</p>
        )}
        <br />
        <input type="submit" className="submit_btn" />
      </form>
    </div>
  );
}

export default Form;
