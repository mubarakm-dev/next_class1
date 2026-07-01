"use server"

import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"
import * as bcrypt from "bcryptjs";


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

export const loginUser = async (initialState: any, form: FormData) => {
    await dbConnect()
    const email = form.get("email")?.toString()
    const password = form.get("password")?.toString()
    console.log(password);


    if (!email || !password) {
        return {
            message: "invalid email or password"
        }
    }


    const user = await UserModel.findOne({ email }).select("+password")

    if (!user) {
        return {
            message: "Invalid email or password"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return {
            message: "Invalid email or password"
        }
    }

    return {
        success: true,
        user: {
            id: user._id.toString(),
            email: user.email,
        
        }
    }
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