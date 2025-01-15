import React from "react";
import "../styles/Components.css";
import ProductBox, { productBoxProps } from "./ProductBox";

export const products: productBoxProps[] = [
  {
    dataName: "Rich Package",
    link: "/rich-package-p-7",
    img: "/assets/bank-log.jpg",
    title: "Rich Package",
    price: 300,
  },
  {
    dataName: "Chase Bank",
    link: "/bank-logs-c-4/usa-bank-logs-c-5/chase-bank-c-6/chase-bank-p-10",
    img: "/assets/carded-gift.jpg",
    title: "Chase Bank",
    price: 250,
  },
  {
    dataName: "Huntington Bank",
    link: "/bank-logs-c-4/usa-bank-logs-c-5/huntington-bank-c-7/huntington-bank-p-16",
    img: "/assets/credit-card.jpg",
    title: "Huntington Bank",
    price: 700,
  },
  {
    dataName: "Dump Card with PIN",
    link: "/dumpsonline-card-c-18/dump-card-with-pin-p-43",
    img: "/assets/dumps.jpg",
    title: "Dump Card with PIN",
    price: 132,
  },
  {
    dataName: "Dump Card with PIN",
    link: "/dumpsonline-card-c-18/dump-card-with-pin-p-45",
    img: "/assets/hacking-tools.jpg",
    title: "Dump Card with PIN",
    price: 470,
  },
  {
    dataName: "U$AA",
    link: "/bank-logs-c-4/usa-bank-logs-c-5/usaa-c-28/uaa-p-79",
    img: "/assets/paypal.png",
    title: "U$AA",
    price: 700,
  },
  {
    dataName: "Chase Bank",
    link: "/bank-logs-c-4/usa-bank-logs-c-5/chase-bank-c-6/chase-bank-p-9",
    img: "/assets/ssn.jpg",
    title: "Chase Bank",
    price: 150,
  },
];

const PopularProductsSection = () => {
  return (
    <section id="box-popular-products" className="card">
      <div className="card-header">
        <h2 className="card-title">Popular Products</h2>
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

export default PopularProductsSection;
