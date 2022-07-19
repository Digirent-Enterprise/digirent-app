import React from "react";
import { Link } from "react-router-dom";

interface Product {
  categoryId: number;
}

function Breadcrumb({ categoryId }: Product) {
  return (
    <div className="ui breadcrumb">
      <Link className="section" to="/">
        Home
      </Link>
      <i className="right angle icon divider" />
      <Link className="section" to={`/product/${categoryId}`}>
        Category
      </Link>
      <i className="right angle icon divider" />
      <div className="active section">Phone</div>
    </div>
  );
}

export default Breadcrumb;
