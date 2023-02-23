import React from "react";
import { useParams } from "react-router-dom";

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
//   const products = Data.products;
//   const product = products.filter((e) => {return e.slug === slug })[0];
  return <div>
    <h1>{slug}</h1>
    {/* <div>
        <img alt={product.name} src={product.image}/>
        <h2 className="productPageName">{product.name}</h2>
    </div> */}
  </div>;
}

export default ProductScreen;
