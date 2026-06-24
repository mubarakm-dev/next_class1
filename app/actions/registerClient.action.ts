import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"
import { User } from "../types"

export const registerUser = async(form:User)=>{


    const user = {
        firstname: form.firstname,
        lastname:form.lastname,
        email:form.email,
        password:form.password

    }

    await dbConnect()
    await UserModel.create(user)

    console.log("I am working")
    
    revalidatePath("/allusers")
    redirect("/allusers")


}