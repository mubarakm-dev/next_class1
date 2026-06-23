"use server"

import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"


 export const registerUser = async(form:FormData)=>{


    const user = {
        firstname: String(form.get("firstname")) ,
        lastname:form.get("lastname")?.toString(),
        email:form.get("email")?.toString(),
        password:form.get("password")?.toString(),

    }

    await dbConnect()
    await UserModel.create(user)

    console.log("I am working")


}