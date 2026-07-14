import { dbConnect } from "@/app/libs/dbconnect"

export const GET = async (ctx:RouteContext<"/api/users/[id]">)=>{
    await dbConnect()

    


}