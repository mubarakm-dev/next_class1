import { dbConnect } from "@/app/libs/dbconnect"
import UserModel from "@/app/models/user.model"

export const GET = async()=>{
    await dbConnect()
    const users =  await UserModel.find()

    return Response.json({
        message: "Users fetched successfully",
        data: users
    })
}