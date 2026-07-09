"use client"
import React, { ChangeEvent, useState } from "react";
import page from "../page";
import { useRouter } from "next/navigation";
import { loginUser } from "../actions/user.actions";

const Page = () => {

  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // console.log(e.target.name, e.target.value);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);

    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value,
    });
  };
  
  const router = useRouter()

  const handleLogin = async () => {
    console.log(User);

    const response = await loginUser(User);

    console.log(response.message);

    if (response.status == 400) {
      alert(response.message);
    } else {
      router.push("/users");
     
    }
    // refresh()
  };



  return (
    <>
      <div className="flex h-screen justify-center items-center px-2">

        <div className="bg-gray-50 shadow-lg rounded-sm p-10 w-full md:w-1/2  xl:w-1/3 flex-col gap-2 flex justify-center /items-center">
          <h1 className="text-center text-2xl font-bold">Login Here</h1>
          <div>
            <label htmlFor="Email">Email:</label>
            <input name="email" onChange={handleInputChange} type="text" className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" autoFocus />
          </div>

          <div>
            <label htmlFor="Password">Password:</label>
            <input name="password" onChange={handleInputChange} type="password" className="border outline-1 focus:outline-green-300 p-2 w-full rounded-sm" />
          </div>

          <button onClick={handleLogin} className=" py-2 bg-black text-white rounded-sm hover:bg-red-700 hover:cursor-pointer hover:translate-y-1 hover:transition">Login</button>
        </div>

      </div>
    </>
  );
};

export default Page;
