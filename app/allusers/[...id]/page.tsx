import { getUser } from "@/app/actions/user.actions";
import { dbConnect } from "@/app/libs/dbconnect";
import UserModel from "@/app/models/user.model";
import { User } from "@/app/types";
import React from 'react'


export async function generateStaticParams(){
  await dbConnect()
  const users:User[]=await UserModel.find()
   console.log(users)

    
  return users.map((user)=>(
    
    
    {
      id:[user._id?.toString()]
    }
  ))
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    console.log(id);


    const user: User = await getUser(id[0])
    console.log(user);


    return (

        <div className="flex items-center   ">
            <div className="border border-gray-300 rounded-lg hover:shadow-amber-100 py-2 px-2 shadow-md flex flex-col justify-between w-2/6 gap-2.5 hover:shadow-lg transition-shadow duration-300 ">

                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Email: {user.email}</p>

            </div>
        </div>

    )
}

export default Page