import { getUser } from "@/app/actions/user.actions";
import React from 'react'

const Page = async({params}:{params:Promise<{id:string}>}) => {
   const {id} = await params
   console.log(id);
   
    
 const user:User= await getUser(id)
 console.log(user);
 

  return (
    <div>This is the dynamic page</div>
  )
}

export default Page