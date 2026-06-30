//server function
"use client"
import React, { ChangeEvent, useState } from 'react'
import { registerUser } from '../actions/user.actions'
import { User } from '../types'
import { log } from 'console'

const page = () => {


    

    const [User, setUser] = useState<User>({

        firstname:"",
        lastname:"",
        email:"",
        password:"",

    })

    const [loading, setloading] = useState<boolean>(false)

    const handleChange = (e:ChangeEvent <HTMLInputElement>)=>{

        console.log(e.target.value)
             console.log(e.target.name)

        const {name, value}=e.target
        setUser({
            ...User,
            [name]:value
        })


    }
    return (
        <div className="flex h-screen justify-center items-center px-2">

            <form action={registerUser} className="bg-gray-50 shadow-lg rounded-sm p-10 w-full md:w-1/2  xl:w-1/3 flex-col gap-2 flex justify-center /items-center">
                <h1 className="text-center text-2xl font-bold">Register Here</h1>

                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name='firstname' className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>

                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name='lastname' className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>

                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" name='email' className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>

                <div>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" name='password' className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>

                <button className=" py-2 bg-black text-white rounded-sm hover:bg-red-700 hover:cursor-pointer hover:translate-y-1 hover:transition">Register</button>
            </form>

        </div>
    )
}

export default page