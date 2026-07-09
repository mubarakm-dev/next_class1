"use server"

import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"
import * as bcrypt from "bcryptjs";
import { decrypt, encrypt } from "../libs/session"
import { cookies } from "next/headers"
import { User } from "../types"


export const registerUser = async (form: User) => {
    try {
        console.log(form);
        // const user= {
        // firstname:String(form.get("firstname")),
        // lastname:form.get("firstname")?.toString(),
        // email:form.get("email")?.toString(),
        // password:form.get('password')?.toString()
        const firstname = form.firstname;
        const lastname = form.lastname;
        const email = form.email;
        const password = form.password;
        // }

        await dbConnect();
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(form.password, saltRound);

        const createdUser = await UserModel.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        if (!createdUser) {
            return {
                status: 400,
                message: "User creation failed",
            };
        }

        const token = await encrypt({ id: createdUser._id })

        console.log(token);


        // redirect("/users")

        const expiry = await decrypt(token)

        const cookieStore = await cookies()
        const timeOfExp = expiry.payload?.exp ? new Date(expiry.payload?.exp * 1000) : undefined
        cookieStore.set("token", token, { expires: timeOfExp })

        revalidatePath("/users");
        return {
            status: 201,
            message: "user created successfully",
            data: createdUser,
            token
        }
        // console.log("i am workinggggg");


    } catch (error: any) {
        console.log(error.code);


        if (error.code == 11000) {
            return {
                status: 500,
                message: "User already exist!",

            };
        } else {
            return {
                status: 500,
                message: "User creation failed",

            };
        }
    }
};

export const loginUser =  async ({email, password,}: {email: string; password: string;})=> {
    await dbConnect()



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
    const token = await encrypt({ id: user._id.toString() })
    console.log("token", token);
    console.log("id from db", user._id.toString());

    const expiry = await decrypt(token)

    const cookieStore = await cookies()
    const timeOfExp = expiry.payload?.exp ? new Date(expiry.payload?.exp * 1000) : undefined
    const userId = expiry.payload?.id
    console.log("id from token", userId);

    cookieStore.set("token", token, { expires: timeOfExp })

    return {
        success: true,
        user: {
            id: user._id.toString(),
            email: user.email,

        },
        token
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



export const loginUser2 = async ({ email, password }: { email: string, password: string }) => {
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
    const token = await encrypt({ id: user._id })
    const expiry = await decrypt(token)

    const cookieStore = await cookies()
    const timeOfExp = expiry.payload?.exp ? new Date(expiry.payload?.exp * 1000) : undefined
    const userId = expiry.payload?.id
    console.log("id from token", userId);

    cookieStore.set("token", token, { expires: timeOfExp })

    return {
        status: 200,
        message: "Login successful",
        user: {
            id: user._id.toString(),
            email: user.email,

        }
    }
}
