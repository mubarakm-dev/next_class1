import React, { Suspense } from 'react'
import Products from '../products/page'
import SkeletonLoader from '../components/SkeletonLoader'



const Page = () => {
  return (
    <div>
        <h1>This is the product duplicate page</h1>


       <Suspense fallback={<SkeletonLoader/>}>
       <Products/>
       </Suspense>
    </div>
  )
}

export default Page