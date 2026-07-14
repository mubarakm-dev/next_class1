import { dbConnect } from "@/app/libs/dbconnect"
import UserModel from "@/app/models/user.model"
import { NextRequest } from "next/server"

export const GET = async (request:NextRequest, ctx:RouteContext<"/api/users/[id]">)=>{
    await dbConnect()
    const {id} = await ctx.params
    const user = await UserModel.findById(id)

    return Response.json({
        message: "user fetch succesfully",
        data:user 
    })

}