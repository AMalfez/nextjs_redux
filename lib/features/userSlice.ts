import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface User{
    name: string,
    email:string
}

const initialState: User[] = [];

export const userSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: (create)=>({
        setuser: create.reducer((state, action: PayloadAction<User>)=>{
            console.log(action.payload);
            state.push(action.payload);
        }),
        deleteUser: create.reducer((state,action:PayloadAction<string>)=>{
            console.log(action.payload);
            return state.filter(u=>u.email!==action.payload);
        })
    }),
    selectors: {
        selectUser: (user) => user
    }
})

export const {setuser, deleteUser} = userSlice.actions
export const {selectUser} = userSlice.selectors;