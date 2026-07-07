"use server"
import { revalidatePath } from "next/cache"
import { dbConnect } from "../libs/dbconnect"
import UserModel from "../models/user.model"
import { redirect } from "next/navigation"
import { User, UserWithoutId } from "../types"
import * as bcrypt from "bcryptjs";

export const registerForUser = async (form: UserWithoutId) => {
    // try {
        await dbConnect()

        // const existingUser = await UserModel.findOne({
        //     email: form.email
        // })

        // if (existingUser) {
        //      throw new Error("Email already exists");
        // }

        // const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(form.password, 10)
        const user = {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            password: hashedPassword

        }
        await UserModel.create(user)

        console.log("I am working")

        revalidatePath("/allusers")
        redirect("/allusers")


    


}

export const deleteUser = async (id: string) =>{
    await dbConnect()
    const user = await UserModel.findByIdAndDelete(id)
    if(!user){
        throw new Error("User not found")
    }

          revalidatePath("/allusers")


}

