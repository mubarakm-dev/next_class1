"use client";
import React, { ChangeEvent, useState } from "react";
import { registerUser } from "../actions/user.actions";
import { User } from "../types";
import { useRouter } from "next/navigation";

const Page = () => {

 const [User, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  

  const [loading, setloading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);

    // const name = e.target.name;
    // const value = e.target.value;
    console.log(e.target);

    const { name, value } = e.target;

    setUser({
      ...User,
      [name]: value,
    });

    // console.log(User);
  };
 const router = useRouter()
  const submitForm = async (User: User) => {
    setloading(true);
    console.log(User);

   const response = await registerUser(User);

   if(response?.status==400){
     setloading(false);
     console.log("I am working");
     alert(response.message)

   }else if(response?.status==201){
    alert(response.message)
     router.push("/users")
   }else{
    setloading(false)
    alert(response?.message)
   }



  };

  return (
    <div className="  flex h-screen  justify-center items-center px-5 ">
      <div
        // action={registerUser}
        className="bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3  flex-col gap-4 flex justify-center /items-center"
      >
        <h1 className="text-center text-2xl font-bold">Register Here</h1>

        <div>
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input
            type="text"
            name="firstname"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm "
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm "
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm "
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm"
            onChange={handleChange}
          />
        </div>

        <button
          onClick={() => submitForm(User)}
          className="py-2 bg-black text-white rounded-sm /hover:bg-green-800  sm:/hover:bg-red-800 md:/hover:bg-blue-800 hover:/cursor-pointer /hover:-translate-y-1 transition delay-150 /hover:scale-105 /animate-spin"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Page;