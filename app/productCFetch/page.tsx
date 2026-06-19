import React, { Suspense } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import Products from "../products/page";
import { ComplexProducts } from "../types";
import ProductList from "../components/ProductList";


export const getProducts= async()=>{
     const data =await fetch('https://dummyjson.com/products')
        const products = await data.json()
    
        const convProducts:ComplexProducts[] = products.products

        return convProducts
}

const Page = () => {
    const products = getProducts()
  return (
    <>
      <h1>This is the product duplicate page</h1>

      <Suspense fallback={<SkeletonLoader />}>
        <ProductList products = {products}  />
      </Suspense>
    </>
  );
};

export default Page;