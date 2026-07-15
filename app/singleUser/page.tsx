"use client"
import React from 'react'
import useSWR from 'swr'
import { User } from '../types'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const page = () => {

    const { data, error, isLoading } = useSWR("/api/users/", fetcher)
    console.log("API Response Data:", data) 
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    const result: User[] = data?.data || []
    //  const result: User[] = data?.users || data?.data || (Array.isArray(data) ? data : [])
    

    return (
        <div className='flex gap-2 flex-wrap'>
            {
                result.map((_, idx) => (
                    <div key={_._id}>
                        <div className='border rounded-sm px-4 py-2 '>

                            <h1 className='text-lg font-bold'>{idx + 1}.{_.firstname + " " + _.lastname}</h1> <br />

                            <button className='px-4 py-2 bg-emerald-800 text-white rounded-sm' >Get more info</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default page