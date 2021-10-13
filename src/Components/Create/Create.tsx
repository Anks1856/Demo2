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
      <section className="Main_Content_Wrapper Main_Create_Wrapper Main_Dashboard_Wrapper">
        <div className="Dashboard_Wrapper">
          <div className="Dashboard_Content Create_Content">
            <div className="Dash-Create-Wrapper">
              <div className="Dash-Create_head">
                <div className="dash-create-item">
                  <span className="create-icon">
                    <i className="fas fa-file-prescription"></i>
                  </span>
                  <h4 className="create-text">create</h4>
                  <h5>0</h5>
                </div>
              </div>
              <div className="Dash-Create_Content ">
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
                  <div className="blocket-Wrp">
                    <blockquote>
                      <p>
                        Search for a client or product above to begin creating a
                        new Rx.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ClientSearch = () => {
  // const [validatedAdd, setValidated] = useState(false);
  // const [ClientInput, setClientInput] = useState("");
  // const match = "^[a-zA-Z]*$";

  // const handleSubmitAdd = (event: any) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     setValidated(true);
  //     event.stopPropagation();
  //   } else {
  //     event.preventDefault();
  //     setValidated(false);
  //   }
  // };

  return (
    <>
      {/* <Form
        className="Search_Form"
        noValidate
        validated={validatedAdd}
        onSubmit={handleSubmitAdd}>
        <div className="Input-item">
          <Form.Group
            className="Search-child-wrp"
            controlId="validationCustom01">
            <Form.Control
              type="text"
              name="clientsearch"
              maxLength={30}
              placeholder="Search by client name"
              value={ClientInput}
              onChange={(elem) => {
                if (elem.target.value.match(match) != null) {
                  setClientInput(elem.target.value);
                }
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid client.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="search-btn" variant="primary" type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </div>
      </Form> */}
      <Form autoComplete="off">
        <div className="Input-item">
          <Form.Item
            name="client_input"
            rules={[
              { required: true, message: "Please input your Client name" },
            ]}>
            <Input placeholder="search by client name" name="client_input" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </Button>
          </Form.Item>
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
      <Form autoComplete="off">
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
            <Button type="primary" htmlType="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
