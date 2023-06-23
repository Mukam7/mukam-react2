import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../product/Product.scss";

import productsImg from "../../assets/images/products.png"

export class index extends Component {
  render() {
    return (
      <div className="container tabs-box1">
        <div className="tabs-box-title">
          <h1>Наша продукция</h1>
        </div>
        <Tabs>
          <TabList>
            <Tab>
              <button>Ламинатные тубы</button>
            </Tab>
            <Tab>
              <button>Экструзионные тубы</button>
            </Tab>
            <Tab>
              <button>Другая упаковка</button>
            </Tab>
          </TabList>
          <TabPanel><img src={productsImg} alt="products"></img></TabPanel>
          <TabPanel><img style={{width: "50%"}} src={productsImg} alt="products"></img></TabPanel>
          <TabPanel><img src={productsImg} alt="products"></img></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default index;
