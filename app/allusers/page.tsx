import React from 'react'
import { dbConnect } from '../libs/dbconnect'
import UserModel from '../models/user.model'

import { User } from '../types'

const fetchUser = async () => {

    await dbConnect()
    const users = await UserModel.find({})
    return (

        <div>
            <h1>List of Users in the DB</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
            {
                users.map((user, idx) => (
                    <div key={user._id.toString()} className='border border-gray-300 p-4 rounded-lg shadow-md flex flex-col justify-between gap-2.5 hover:shadow-lg transition-shadow duration-300' >
                        <h1>{user.firstname}</h1>
                        <p>{user.lastname}</p>
                        <p>{user.email}</p>
                    </div>
                ))

            }
        </div>
        </div>
       

    )
}

export default fetchUser