import React, { Component } from "react";
import Layout from "../components/layout";
import Home from "../components/home";
import Company from "../components/company";
import Certifikate from "../components/certifikate";
import Product from "../components/product";
import Register from "../components/register";

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Home />
        <Company />
        <Certifikate />
        <Product />
        <Register />
      </Layout>
    );
  }
}

export default HomePage;
