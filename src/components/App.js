import React from "react";
import { Layout } from "./Layout/Layout";
import { ProductsFilter } from "./ProductsFilter/ProductsFilter";
import { ProductsList } from "./ProductsList/ProductsList";

function App() {
  return (
    <Layout>
      <ProductsFilter />
      <ProductsList />
    </Layout>
  );
}

export default App;
