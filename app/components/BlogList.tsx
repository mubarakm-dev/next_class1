import React, { use } from 'react'
import { BlogPosts } from '../types'
import Image from 'next/image'




const BlogList = ({posts}:{posts:Promise<BlogPosts[]>}) => {
    const allPosts = use(posts)

    return (
        
        <div>
            
            {/* <h1 className="text-2xl font-bold flex justify-center">Hottest Stories From the Blog Community</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">

                {
                    allPosts.map((post, idx) => (
                        <div key={idx} className='border border-gray-300 p-4 rounded-lg shadow-md flex flex-col justify-between gap-2.5 hover:shadow-lg transition-shadow duration-300 '>

                            <div className="flex flex-row justify-between">
                                <h1 className='text-lg font-bold gap-2 items-start wrap-break-word'>{post.title}</h1>
                                <p className='flex items-center justify-center shrink-0 size-8 text-sm text-white bg-black border border-gray-300 rounded-full'>
                                    {post.id}
                                </p>

                            </div>

                            <p className="line-clamp-3"> {post.body}</p>
                            <p> <span className="font-bold">Tags:</span> {post.tags.join(', ')}</p>

                            <div className="flex flex-row gap-4 mt-2 flex-wrap">
                                <div className="flex flex-row gap-1 items-center hover:-translate-y-1 transition-all">
                                    <Image src="/mdi--thumbs-up.svg" alt="Thumbs Up" width={16} height={16} className="/hover:-translate-y-1 transition-all" />
                                    <span>Likes: {post.reactions.likes}</span>
                                </div>

                                <div className="flex flex-row gap-1 items-center hover:-translate-y-1 transition-all">
                                    <Image src="/mdi--dislike.svg" alt="Thumbs Down" width={16} height={16} className="/hover:-translate-y-1 transition-all" />
                                    <span>Dislikes: {post.reactions.dislikes}</span>
                                </div>

                                <div className="flex flex-row gap-1 items-center hover:-translate-y-1 transition-all">
                                    <Image src="/hugeicons--view.svg" alt="Thumbs Down" width={16} height={16} className="/hover:-translate-y-1 transition-all" />
                                    <span>Views: {post.views}</span>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BlogList