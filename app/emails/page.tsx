"use client"
import { User, deleteUser, selectUser } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import './mail.css'
import { useState } from "react";
export default function Page() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const handleDelete=(email:string)=>{
    dispatch(deleteUser(email));
  }
  return (
    <div>
      <h1>Email list</h1>
      {/* {name && <p><span style={{fontWeight:'600'}}>{name}</span> - <span>{email}</span><span className="delete_mail">X</span></p>} */}
      <div className="email_list_container">
      {user.length!==0 && user.map((u)=>(
        <p key={u.email} id={u.email}><span style={{fontWeight:'600'}}>{u.name}</span> - <span>{u.email}</span><span onClick={()=>handleDelete(u.email)} className="delete_mail">X</span></p>
        ))}
      {user.length===0 && (<p style={{color:"grey"}}>No emails to show</p>)}
      </div>
    </div>
  );
}
