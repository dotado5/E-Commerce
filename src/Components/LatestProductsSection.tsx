import React from "react";
import ProductBox from "./ProductBox";
import { products } from "./PopularProductsSection";

const LatestProductsSection = () => {
  return (
    <section id="box-popular-products" className="card">
      <div className="card-header">
        <h2 className="card-title">Latest Products</h2>
      </div>

      <div className="card-body">
        <div className="listing products columns">
          {products.map((product, index) => (
            <ProductBox
              dataName={product.dataName}
              link={product.link}
              img={product.img}
              title={product.title}
              price={product.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProductsSection;
