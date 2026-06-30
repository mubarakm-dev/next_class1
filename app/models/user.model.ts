import mongoose, { Schema } from "mongoose"
import { User } from "../types"


const UserSchema = new mongoose.Schema <User> ({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    email:{type: String, required:true, unique: true},
    password:{type:String, required:true, select:false}
})

// const UserSchema = new Schema <User>({
//     firstname: {type:String, required:true},
//     lastname: {type:String, required:true},
//     email:{type:string, required:true},
//     password:{type:string, required:true, select:false}
// })

const UserModel = mongoose.models.user || mongoose.model<User>("user", UserSchema) 

// const UserModel = mongoose.model<User>("user", UserSchema)
// const UserModel = mongoose.models.User
export default UserModel