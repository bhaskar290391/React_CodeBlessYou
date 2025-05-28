import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./../Home/Home";
import Products from "./../Products/Products";
import SingleProduct from "./../Products/SingleProduct";
import Articles from "./../Articles/Articles";
import Admin from "./../Admin/Admin";
import Sales from "./../Admin/Sales";
import Sellers from "./../Admin/Sellers";
import NotFound from "./../NotFound/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<SingleProduct />}></Route>
      <Route path="/articles" element={<Articles />}></Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/sales" element={<Sales></Sales>}></Route>
        <Route path="/admin/sellers" element={<Sellers></Sellers>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default Routing;
