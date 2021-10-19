import React from "react";
import { Outlet } from "react-router";
import { css } from "@emotion/css";
// import ProductsIndex from "./ProductsIndex";
// import Product from "./Product";

// import Loadable from "../Common/Loadable";

// const Product = Loadable(lazy(() => import("./Product")));
// const ProductsIndex = Loadable(lazy(() => import("./ProductsIndex")));

const ProductStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

// The "Outlet" component is a "placeholder" component for nested route(s)
// We use the Outlet component here as the nested routes are defined in App.js
// Alternatively, we can define the nested routes here in Products.js instead of using Outlet component
// If the nested routes are defined in Products.js, we only need to have a route definition for Products

const Products = () => (
  <div className={ProductStyles}>
    <img src="/assets/img/logo.svg" alt="Ultimate Burgers" className="Logo" />
    <Outlet />
    {/* <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path=":id" element={<Product />} />
    </Routes> */}
  </div>
);

export default Products;
