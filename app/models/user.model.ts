import mongoose, { Schema } from "mongoose"
import { User } from "../types"


const UserSchema = new mongoose.Schema <User> ({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true, select:false}
})

// const UserSchema = new Schema <User>({
//     firstname: {type:String, required:true},
//     lastname: {type:String, required:true},
//     email:{type:string, required:true},
//     password:{type:string, required:true, select:false}
// })

const UserModel = mongoose.model<User>("user", UserSchema) || mongoose.models.User

export default UserModel