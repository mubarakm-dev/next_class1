"use server"

import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"
import * as bcrypt from "bcryptjs";
import { encyrpt } from "../libs/session"


export const registerUser = async (form: FormData) => {

    try {

        const user = {
            firstname: String(form.get("firstname")),
            lastname: form.get("lastname")?.toString(),
            email: form.get("email")?.toString(),
            password: form.get("password")?.toString(),

        }

        await dbConnect()
        const createdUser = await UserModel.create(user)

        if (!createdUser) {
            return {
                status: 400,
                message: "User creation failed",
            };
        }
        const token = await encyrpt({id:createdUser._id})
        console.log("I am working")

        revalidatePath("/allusers")
        return {
            status: 201,
            message: "user created successfully",
            data: {
                firstname: createdUser.firstname,
                lastname:createdUser.lastname
            }
        }
        // redirect("/allusers")


    } catch (error: any) {
        if (error.code === 11000) {
            return {
                status: 500,
                message: "User already exist!",
            }
        }
        else {
            return {
                status: 500,
                message: "User creation failed",
            }


        }


    }

}

export const loginUser = async (initialState: any, form: FormData) => {
    await dbConnect()
    const email = form.get("email")?.toString()
    const password = form.get("password")?.toString()
   


    if (!email || !password) {
        return {
            message: "invalid email or password"
        }
    }


    const user = await UserModel.findOne({ email }).select("+password")

    if (!user) {
        return {
            status: 400,
            message: "Invalid email or password"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return {
            status: 400,
            message: "Invalid email or password"
        }
    }
       const token = await encyrpt({id:user._id})
       console.log(token);
       

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



export const loginUser2 = async ({email, password}:{email:string, password:string}) => {
    await dbConnect()
    // const email = form.get("email")?.toString()
    // const password = form.get("password")?.toString()
    console.log(password);


    if (!email || !password) {
        return {
            message: "invalid email or password"
        }
    }


    const user = await UserModel.findOne({ email }).select("+password")

    if (!user) {
        return {
            status: 400,
            message: "Invalid email or password"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return {
            status: 400,
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
