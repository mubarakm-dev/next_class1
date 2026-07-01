
"use client"
import React, { useActionState } from 'react'
import { loginUser } from '../actions/user.actions'
import { User } from '../types';

const initialState = {
    message: "",
    
};

const Page = () => {

        const [state, formAction, pending] = useActionState(loginUser, initialState)

    return (

        <div className="flex h-screen justify-center items-center px-2">

            <form action={formAction} className="bg-gray-50 shadow-lg rounded-sm p-10 w-full md:w-1/2  xl:w-1/3 flex-col gap-2 flex justify-center /items-center">

                <h1 className="text-center text-2xl font-bold">Login Here</h1>

                {state?.message && (
                    <div className="bg-red-100 text-red-700 p-2 text-sm rounded-sm text-center font-medium">
                        {state.message}
                    </div>
                )}

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' required
                        disabled={pending} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' required
                        disabled={pending} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                </div>



                <button type='submit' className="py-2 bg-black text-white rounded-sm hover:bg-red-700 hover:cursor-pointer hover:translate-y-1 hover:transition">Login</button>
            </form>

        </div>

    )
}

export default Page