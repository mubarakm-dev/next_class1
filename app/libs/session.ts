import { jwtVerify, SignJWT } from 'jose'
import 'server-only'

const secretKey = process.env.AUTH_SECRET

const encodedKey = new TextEncoder().encode(secretKey)

export const encyrpt=async(payload:{id:string})=>{
    const token = new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"}) // alg means algorithm
    .setIssuedAt()
    .setExpirationTime("5h")
    .sign(encodedKey)

    return token;
}

export const decrypt=async (token:Promise<string>)=>{
    try {
        const payload = await jwtVerify((await token).toString(), encodedKey, {algorithms:["HS256"]})
       console.log(payload);
       
        return payload
    } catch (error) {
        console.log(error);
        
        return{
            status: 401,
            message: "user unathourized"
        }
    }
}