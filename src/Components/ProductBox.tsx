import React from "react";

export interface productBoxProps {
  dataName: string;
  link: string;
  img: string;
  title: string;
  price: number;
}

const ProductBox: React.FC<productBoxProps> = ({
  link,
  img,
  title,
  price,
  dataName,
}) => {
  return (
    <article className="product">
      <a
        className="link"
        href={link}
        title="Dump Card with PIN"
        data-id="43"
        data-sku=""
        data-name={dataName}
        data-price="132.00"
      >
        <div className="image-wrapper">
          <img
            className="image img-responsive"
            src={img}
            loading="lazy"
            style={{ aspectRatio: "1/1" }}
            alt="Dump Card with PIN"
          />
        </div>

        <div className="info">
          <h4 className="name">{title}</h4>
          <div className="manufacturer-name">&nbsp;</div>
          {/* <div className="description">Balance: $1,549.77</div> */}
          <div className="price-wrapper">
            <span className="price">${price}</span>
          </div>
        </div>
      </a>

      <button
        className="preview btn btn-default btn-sm"
        data-toggle="lightbox"
        data-target="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/dumpsonline-card-c-18/dump-card-with-pin-p-43"
        data-seamless="true"
        data-require-window-width="768"
        data-max-width="980"
      >
        <i className="fa fa-search-plus"></i>
      </button>
    </article>
  );
};

export default ProductBox;
