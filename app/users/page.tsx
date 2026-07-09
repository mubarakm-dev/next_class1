import React from 'react'
import { dbConnect } from '../libs/dbconnect'

import { User } from '../types'
import { isAuth } from '../libs/session'
import UserModel from '../models/user.model'

// export async function generateStaticParams(){
//   await dbConnect()
//   const users:User[]=await UserModel.find()

//   return users.map((user)=>(
//     {
//       id:user._id
//     }
//   ))
// }

const Page = async() => {
    await dbConnect()
    await isAuth()
    const users:User[] = await UserModel.find()

  return (
    <div   className='flex gap-2 flex-wrap'>
        {
            users.map((_, idx)=>(
                <form action={`/users/${_._id}/shoes/clothes`} key={_._id}>
                  <div  className='border rounded-sm px-4 py-2 '>
                  
                  <h1 className='text-lg font-bold'>{idx+1}.{_.firstname+" "+_.lastname}</h1> <br />
                
                  <button className='px-4 py-2 bg-emerald-800 text-white rounded-sm' >Get more info</button>
                </div>
                </form>
            ))
        }
    </div>
  )
}

export default Page