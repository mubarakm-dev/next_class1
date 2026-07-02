import React from 'react'
import { dbConnect } from '../libs/dbconnect'
import UserModel from '../models/user.model'

import { User } from '../types'
import { deleteUser } from '../actions/registerClient.action'



const fetchUser = async () => {

    await dbConnect()
    const users:User[] = await UserModel.find()

    return (

        <div>
            <h1>List of Users in the DB</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
            {
                users.map((user, idx) => {
                        const deleteUserById = deleteUser.bind(null, user._id.toString());
                return (
                    <form action={`/allusers/${user._id}/shoes`}  key={user._id}>
                        
                     
                        <div className='border border-gray-300 p-4 rounded-lg shadow-md flex flex-col justify-between gap-2.5 hover:shadow-lg transition-shadow duration-300' >
                        <h1>{idx+1}.{user.firstname}</h1>
                        <p>{user.lastname}</p>
                        <p>{user.email}</p>
                        <div className='flex gap-2 justify-between'>
                            <button className='px-4 py-2 bg-emerald-600 text-shadow-white rounded-sm'>Get More Info</button>
                            <button formAction={deleteUserById} className='px-4 py-2 bg-red-600 text-shadow-white rounded-sm'>Delete</button>
                        </div>
                        
                    </div>
                    </form>
                    
                 ) })

            }
             </div>
        </div>


    )
}

export default fetchUser

// import React from 'react'
// import { User } from '../types'
// import useSWR from 'swr'
// import { dbConnect } from '../libs/dbconnect'
// import UserModel from '../models/user.model'

// const fetcher = (url: string) => fetch(url).then((r) => r.json())

// const page = async () => {

//     await dbConnect()
   

//     const { data, error, isLoading } = useSWR("users", fetcher)

//     if (isLoading) return <div>Loading...</div>
//     if (error) return <div>Error: {error.message}</div>

//      const users: User[] = await UserModel.find()


//     return (
//         <div>

//             {
//                 users.map((user, idx)=>(
//                     <div key={user._id}>{idx+1}{user.firstname}</div>
//                 ))
//             }

//         </div>
//     )
// }

// export default page