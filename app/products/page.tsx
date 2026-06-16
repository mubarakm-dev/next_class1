import React from "react";
import { ComplexProducts } from "../types";
import Image from "next/image";

const Products = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();

  const convProducts: ComplexProducts[] = products.products;
  return (
    <div>
      <h1 className="text-2xl font-bold ">Product List</h1>
      <div className="grid grid-cols-2  gap-4 /flex  /flex-wrap">
        {convProducts.map((prod, idx) => (
          // <h1 key={idx}>{idx+1}. {prod.title}</h1>
          <div
            key={idx}
            className="border border-gray-300 rounded-2xl p-3 flex gap-3 /basis-1/2 hover:shadow"
          >
            <Image
              src={prod.images[0]}
              alt="product image"
              width={300}
              height={300}
              className="size-50 bg-black rounded-2xl"
            />

            <div className="flex flex-col justify-between">
              <p className="text-lg font-bold">{prod.title}</p>
              <p className="line-clamp-2 text-sm">{prod.description}</p>
              <p>MOQ: {prod.minimumOrderQuantity}</p>
              <code>${prod.price}</code>

              <div>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:-translate-y-1 transition-all">
                  View details
                </button>
              </div>
            </div>

            {/* <Image src={"https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='' width={200} height={200}/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
