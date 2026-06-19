
import React, { Suspense } from 'react'
import { BlogPosts } from '../types'
import BlogLoader from '../components/BlogLoader'
import blog from '../blog/page'
import BlogList from '../components/BlogList'



export const getPosts = async () => {
    const data = await fetch('https://dummyjson.com/posts')
    const posts = await data.json()

    const convPosts: BlogPosts[] = posts.posts
    return convPosts

}

 const page = () => {
    const posts = getPosts()
    return (

        <>
            <h1>This is the blog page</h1>
            
            <Suspense fallback={<BlogLoader/>}>

                <BlogList posts={posts}/>
            </Suspense>
            

        </>
    )
}

export default page