import { JWTPayload, jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import 'server-only'

const secretKey = process.env.AUTH_SECRET

const encodedKey = new TextEncoder().encode(secretKey)

export const encrypt = async (payload: { id: string }) => {
    const token = new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" }) // alg means algorithm
        .setIssuedAt()
        .setExpirationTime("5h")
        .sign(encodedKey)

    return token;
}

export const decrypt = async (token: string) => {
    try {

        const payload = await jwtVerify(token, encodedKey, { algorithms: ["HS256"] })
        console.log(payload);

        return {
            status: 200,
            payload: payload.payload as JWTPayload & { id: string }
        }
    } catch (error) {
        console.log(error);

        return {
            status: 401,
            message: "user unathourized"
        }
    }
}

export const isAuth = async () => {
    try {
        const cookieStore = await cookies()
        const tokenExist = cookieStore.get("token")
        console.log(tokenExist);

        if (tokenExist) {
            const expiry = await decrypt(tokenExist.value)
            const userId = expiry.payload?.id

            if (!userId) {
                redirect("/login")

            }
            return {
                success: true,
                userId,
            }
        } else {
            redirect("/login")
        }
    } catch (error) {
        console.log(error);
        redirect("/login")

    }
}