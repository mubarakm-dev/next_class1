"use server"

import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"


export const registerUser = async (form: FormData) => {


    const user = {
        firstname: String(form.get("firstname")),
        lastname: form.get("lastname")?.toString(),
        email: form.get("email")?.toString(),
        password: form.get("password")?.toString(),

    }

    await dbConnect()
    await UserModel.create(user)

    console.log("I am working")

    revalidatePath("/allusers")
    redirect("/allusers")


}

export const getUser = async (id: string) => {
    await dbConnect()
    const user = await UserModel.findById({ _id: id })
    if (!user) {

        return {
            message: "user does not exist"
        };
    } else {

        return user;
    }
}