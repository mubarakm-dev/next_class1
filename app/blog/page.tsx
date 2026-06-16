import React from 'react'
import { BlogPosts } from '../types'
import { log } from 'console'

const blog = async () => {
    const data = await fetch("https://dummyjson.com/posts")
    const posts = await data.json()
    const convPosts: BlogPosts[] = posts.posts
    console.log(convPosts);


    return (
        <div>
           <h1>This is a blog page</h1>
            <div>
                {convPosts.map((post, idx) => (


                    <div key={idx}>
                        <h1>Title: {post.title}</h1>
                        <div>
                            <p> {post.body}</p>
                            <p></p>


                        </div>
                    </div>



                ))
                }



            </div>

        </div>

    )
}

export default blog