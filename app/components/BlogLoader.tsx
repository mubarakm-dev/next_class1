import React from 'react'

const BlogLoader = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold flex justify-center">Hottest Stories From the Blog Community</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">


                {
                    [...Array(30)].map((post, idx) => (
                        <div key={idx} className='border border-gray-300 p-4 justify-between rounded-lg shadow-md flex flex-col gap-2.5 hover:shadow-lg transition-shadow duration-300'>

                            <div className="flex flex-row justify-between">
                                <h1 className='h-3 size-80 text-lg font-bold gap-2 items-start wrap-break-word bg-gray-400  rounded-2xl animate-pulse transition-all duration-100'></h1>
                                <p className='flex items-center justify-center size-8 text-sm shrink-0 border border-gray-300 rounded-full'>

                                </p>

                            </div>

                            <p className="h-3 bg-gray-400  rounded-2xl animate-pulse transition-all duration-100"></p>
                            <p className="h-3 w-1/2 bg-gray-400  rounded-2xl animate-pulse transition-all duration-100"> <span className="font-bold"></span></p>

                            <div className="flex flex-row gap-4 mt-2 flex-wrap ">
                                <div className="flex flex-row gap-1 h-3 w-1/5 rounded-2xl animate-pulse transition-all duration-100 bg-gray-400 ">

                                </div>

                                <div className="flex flex-row gap-1 items-center  h-3   w-1/5 rounded-2xl animate-pulse transition-all duration-100 bg-gray-400 ">

                                    <span></span>
                                </div>

                                <div className="flex flex-row gap-1 items-center  h-3  w-1/5 rounded-2xl animate-pulse transition-all duration-100 bg-gray-400 ">

                                    <span></span>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BlogLoader