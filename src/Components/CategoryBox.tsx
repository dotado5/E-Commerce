import React from "react";
import { Link } from "react-router-dom";

export interface categoryBoxProps {
  dataName: string;
  link: string;
  img: string;
  title: string;
  description: string;
}

const CategoryBox: React.FC<categoryBoxProps> = ({
  dataName,
  link,
  img,
  title,
  description,
}) => {
  return (
    <article className="category" data-id="4" data-name={dataName}>
      <Link className="link" to={link}>
        <img
          className="img-responsive hidden-xs hidden-sm"
          src={img}
          loading="lazy"
          style={{ aspectRatio: "3/2" }}
          alt=""
        />

        <div className="caption">
          <div className="name">{title}</div>
          <div className="short-description">{description}</div>
        </div>
      </Link>
    </article>
  );
};

export default CategoryBox;
