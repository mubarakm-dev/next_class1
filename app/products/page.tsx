import React from "react";
import { ComplexProducts } from "../types";

const Products = async () => {
  const data = await fetch("https://dummyjson.com/products");

  const products = await data.json();

  const convProducts: ComplexProducts[] = products.products;
  return (
    <div>
      <h1>Products</h1>

      {convProducts.map((prod, idx) => (
        <div className="card lg:card-side bg-base-100 shadow-sm  flex-col">
          <div>
            <figure key={idx}>
              {idx + 1} <img src={prod.thumbnail} alt="Album" />
            </figure>
          </div>

          <div className="card-body">
            <h2>{prod.title} </h2>

            <p>Description: {prod.description}</p>
            <p>Price: ${prod.price}</p>
            <p>Rating: {prod.rating}</p>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
