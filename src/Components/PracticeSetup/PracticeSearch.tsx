import React, { useState } from "react";
// import { Modal, Button, Col, Form } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from "antd";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Create() {
  const callback = (key: any) => {
    console.log(key);
  };

  return (
    <>
      <section className="Main_PracticeSearch mt-16 pt-4">
        <div className="Dash-Create_Content w-86 mx-auto">
          <div className="Practice_head my-4 text-center w-full">
            <h2 className="font font-bodyCommon capitalize text-dark-textColor font-bold text-4xl sm:text-lg">
              Practice setup
            </h2>
          </div>
          <div className="create-search">
            <div className="Tab_Wrapper">
              <Tabs defaultActiveKey="1" onChange={callback} id="tabWrp">
                <TabPane
                  tab="Search by client"
                  key="1"
                  className="tab1 tab-cmn">
                  <ClientSearch />
                </TabPane>
                <TabPane
                  tab="Search by Product"
                  key="2"
                  className="tab2 tab-cmn">
                  <ProductSearch />
                </TabPane>
              </Tabs>
            </div>
            <div className="blocket-Wrp w-1/2 mx-auto mt-8">
              <blockquote>
                <p className="text-center text-dark-textColor text-xl capitalize font-normal">
                  Search for a client or product above <br /> to begin creating
                  a new Rx.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ClientSearch = () => {
  return (
    <>
      <Form autoComplete="off" className="grid grid-cols-gridMax2 gap-2 ">
        <div className="Input-item">
          <Form.Item
            name="client_input"
            rules={[
              { required: true, message: "Please input your Client name" },
            ]}>
            <Input placeholder="search by client name" name="client_input" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="search-btn border border-solid border-dark-textColor
             h-9 w-16 text-center rounded-tr-2 rounded-br-2 overflow-hidden rounded-tl-none
            rounded-bl-none focus:shadow-none cursor-pointer transition-all
             ">
              <i className="fas fa-search text-xl font-bold text-white transition-all"></i>
            </Button>
          </Form.Item>
        </div>
        <div className="Add-btn">
          <Button
            className="bg-dark-textColor text-white rounded-full h-9 focus:shadow-none cursor-pointer
             hover:opacity-95 hover:border-dark-textColors hover:text-white hover:border-dark-textColor common-btn">
            Add Organization
          </Button>
        </div>
      </Form>
    </>
  );
};

const ProductSearch = () => {
  const [productInput, setproductInput] = useState("");
  const match = "^[a-zA-Z]*$";

  return (
    <>
      <Form autoComplete="off" className="grid grid-cols-gridMax2 gap-2 ">
        <div className="Input-item">
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your product name " },
            ]}
            className="Product_input-item">
            <Input
              placeholder="search by product name"
              maxLength={30}
              value={productInput}
              onChange={(elem) => {
                // console.log(elem.target.value.match("^[a-zA-Z]*$"));
                if (elem.target.value.match(match) != null) {
                  // console.log("if");
                  setproductInput(elem.target.value);
                }
                // else {
                //   console.log("else");
                // }
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="search-btn border border-solid border-dark-textColor
             h-9 w-16 text-center rounded-tr-2 rounded-br-2 overflow-hidden rounded-tl-none
            rounded-bl-none focus:shadow-none cursor-pointer transition-all
             ">
              <i className="fas fa-search text-xl font-bold text-white transition-all"></i>
            </Button>
          </Form.Item>
        </div>
        <div className="Add-btn">
          <Button
            className="bg-dark-textColor text-white rounded-full h-9 focus:shadow-none cursor-pointer
             hover:opacity-95 hover:border-dark-textColors hover:text-white hover:border-dark-textColor common-btn">
            Add Organization
          </Button>
        </div>
      </Form>
    </>
  );
};
