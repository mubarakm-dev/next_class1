"use client"
import React, { ChangeEvent, useState } from 'react'
import { useActionState, startTransition } from 'react'

import { registerForUser } from '../actions/registerClient.action'
import { User } from '../types'
import { useFormik } from 'formik'
import * as yup from "yup";
import LoadingSpinner from '../components/LoadingSpinner'




const regsiterSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("last name is required"),
    email: yup.string().required("email is required").email("invalid email format"),
    password: yup.string().required("password is required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
  )
})


const page = () => {

   

    // formik.values - get values
    // formik.errors - error to show if validation is wrong - validation from yup
    // formik.touched - track field that the user has touched
    // formik.handleChange - update the values
    // formik.handleBlur - update touched
    // formik.handleSubmit - Validates and then calls your onSubmit

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""

        },

        validationSchema: regsiterSchema,

        onSubmit: async (values) => {

            try {
                await registerForUser(values);
            } catch (error) {
                console.log(error)
            }


            formik.resetForm()
        }



    })






    // const submitForm = async (User: User) => {
    //     console.log(User);
    //     registerForUser(User)
    //     console.log("I am working");}







    return (
        <form  onSubmit={formik.handleSubmit} className="flex h-screen justify-center items-center px-2">

            <div className="bg-gray-50 shadow-lg rounded-sm p-10 w-full md:w-1/2  xl:w-1/3 flex-col gap-2 flex justify-center /items-center">
                <h1 className="text-center text-2xl font-bold">Register Here</h1>

                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                    {formik.touched.firstname && formik.errors.firstname ? (
                        <p className="text-red-500 text-sm">
                            {formik.errors.firstname}
                        </p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                    {formik.touched.lastname && formik.errors.lastname && ( <p className="text-red-500 text-sm">{formik.errors.lastname}</p> )}
                </div>


                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                    {formik.touched.email && formik.errors.email && ( <p className="text-red-500 text-sm">{formik.errors.email}</p> )}
                </div>

                <div>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
                    {formik.touched.password && formik.errors.password && ( <p className="text-red-500 text-sm">{formik.errors.password}</p> )}
                </div>

                <button type='submit' disabled={formik.isSubmitting} className=" py-2 bg-black text-white flex items-center justify-center rounded-sm hover:bg-red-700 hover:cursor-pointer hover:translate-y-1 hover:transition ">{formik.isSubmitting ? "Registering....": "Register"}</button>
            
            </div>

        </form>
    )
}

export default page