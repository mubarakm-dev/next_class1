import React from 'react'

const Loading = () => {
    return (


        <div>
            <h1 className='text-2xl font-bold '>Product List</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    [...Array(10)].map((_, idx) => (
                        <div key={idx} className='border border-gray-300 rounded-2xl p-3 flex gap-3 /basis-1/2 hover:shadow'>
                            <div className='size-50 bg-gray-300 rounded-2xl animate-pulse transition-all duration-100'></div>



                            <div className='flex flex-col justify-between basis-6/12'>
                                <p className='h-4 w-full bg-gray-300 animate-pulse transition-all duration-100'></p>
                                <p className='h-4 w-full bg-gray-300 animate-pulse transition-all duration-100'></p>
                                <p className='h-4 w-full bg-gray-300 animate-pulse transition-all duration-100'></p>
                                <code className='h-4 w-full bg-gray-300 animate-pulse transition-all duration-100'></code>


                                <div>
                                    <button className='duration-100 px-4 py-2 bg-gray-300 animate-pulse  text-white rounded-lg hover:-translate-y-1 transition-all'></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>



    )
}

export default Loading