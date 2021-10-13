// import React, { useState } from "react";
// import { Modal, Col, Form } from "react-bootstrap";
// // import Profile from "Components/Header/Profile/profile";
// import { Input, Button, Checkbox } from "antd";
// import { Tabs } from "antd";

// const { TabPane } = Tabs;

// export default function Dashboard() {
//   const callback = (key: any) => {
//     console.log(key);
//   };

//   return (
//     <>
//       <section className="Main_Content_Wrapper Main_Dashboard_Wrapper">
//         <div className="Dashboard_Wrapper">
//           <div className="Dash-Heading">
//             <h2>Home</h2>The input is not valid E-mail!
//           </div>
//           <div className="Dashboard_Content">
//             <div className="dashboard-head">
//               <ul className="dashboard-unorder">
//                 <li className="dash-item1 dash-cmn01">
//                   <a href="#">
//                     <figure className="icon">
//                       <i className="fas fa-file-prescription"></i>
//                     </figure>
//                     <figcaption>
//                       <h3>0</h3>
//                       <p>Draft Create Rx</p>
//                     </figcaption>
//                   </a>
//                 </li>
//                 <li className="dash-item2 dash-cmn01">
//                   <a href="#">
//                     <figure className="icon">
//                       <i className="fas fa-check-circle"></i>
//                     </figure>
//                     <figcaption>
//                       <h3>0</h3>
//                       <p>pending Client approvals</p>
//                     </figcaption>
//                   </a>
//                 </li>
//                 <li className="dash-item3 dash-cmn01">
//                   <a href="#">
//                     <figure className="icon">
//                       <i className="fas fa-sync"></i>
//                     </figure>
//                     <figcaption>
//                       <h3>0</h3>
//                       <p>expired rx renewals</p>
//                     </figcaption>
//                   </a>
//                 </li>
//                 <li className="dash-item4 dash-cmn01">
//                   <a href="#">
//                     <figure className="icon">
//                       <i className="fas fa-link"></i>
//                     </figure>
//                     <figcaption>
//                       <h3>0</h3>
//                       <p>dependent patient links</p>
//                     </figcaption>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="Dash-Create-Wrapper">
//               <div className="Dash-Create_head">
//                 <div className="dash-create-item">
//                   <span className="create-icon">
//                     <i className="fas fa-file-prescription"></i>
//                   </span>
//                   <h4 className="create-text">create</h4>
//                   <h5>0</h5>
//                 </div>
//               </div>
//               <div className="Dash-Create_Content">
//                 <div className="create-search">
//                   <div className="Tab_Wrapper">
//                     <Tabs defaultActiveKey="1" onChange={callback} id="tabWrp">
//                       <TabPane
//                         tab="Search by client"
//                         key="1"
//                         className="tab1 tab-cmn">
//                         <ClientSearch />
//                       </TabPane>
//                       <TabPane
//                         tab="Search by Product"
//                         key="2"
//                         className="tab2 tab-cmn">
//                         <ProductSearch />
//                       </TabPane>
//                     </Tabs>
//                   </div>
//                   <div className="blocket-Wrp">
//                     <blockquote>
//                       <p>
//                         Search for a client or product above to begin creating a
//                         new Rx.
//                       </p>
//                     </blockquote>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="Dash-Create-Wrapper Dash-Approve-Wrapper">
//               <div className="Dash-Create_head">
//                 <div className="dash-create-item">
//                   <span className="create-icon">
//                     <i className="fas fa-check-circle"></i>
//                   </span>
//                   <h4 className="create-text">Approve</h4>
//                   <h5>0</h5>
//                 </div>
//               </div>
//               <div className="Dash-Create_Content">
//                 <div className="create-search">
//                   <div className="blocket-Wrp">
//                     <blockquote>
//                       <span className="fab-icon">
//                         <i className="fas fa-mug-hot"></i>
//                       </span>

//                       <h2>Time For A Break</h2>
//                       <p> orders are processing, your work here is done </p>
//                     </blockquote>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="Dash-Create-Wrapper Dash-Approve-Wrapper  Dash-Renew-Wrapper">
//               <div className="Dash-Create_head">
//                 <div className="dash-create-item">
//                   <span className="create-icon">
//                     <i className="fas fa-sync"></i>
//                   </span>
//                   <h4 className="create-text">Renew</h4>
//                   <h5>0</h5>
//                 </div>
//               </div>
//               <div className="Dash-Create_Content">
//                 <div className="create-search">
//                   <div className="blocket-Wrp">
//                     <blockquote>
//                       <span className="fab-icon">
//                         <i className="fas fa-sign-language"></i>
//                       </span>
//                       <h2>Job Complete</h2>
//                       <p> all your patients are set on renewals </p>
//                     </blockquote>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="Dash-Create-Wrapper Dash-Approve-Wrapper  Dash-Link-Wrapper">
//               <div className="Dash-Create_head">
//                 <div className="dash-create-item">
//                   <span className="create-icon">
//                     <i className="fas fa-link"></i>
//                   </span>
//                   <h4 className="create-text">Link</h4>
//                   <h5>0</h5>
//                 </div>
//               </div>
//               <div className="Dash-Create_Content">
//                 <div className="create-search">
//                   <div className="blocket-Wrp">
//                     <blockquote>
//                       <span className="fab-icon">
//                         <i className="fas fa-plug"></i>
//                       </span>
//                       <h2>You’ve Recharged</h2>
//                       <p> information is flowing between systems </p>
//                     </blockquote>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// const ClientSearch = () => {
//   const [validatedAdd, setValidated] = useState(false);
//   const [ClientInput, setClientInput] = useState("");
//   const match = "^[a-zA-Z]*$";

//   const handleSubmitAdd = (event: any) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       setValidated(true);
//       event.stopPropagation();
//     } else {
//       event.preventDefault();
//       setValidated(false);
//     }
//   };

//   return (
//     <>
//       <Form
//         className="Search_Form"
//         noValidate
//         validated={validatedAdd}
//         onSubmit={handleSubmitAdd}>
//         <div className="Input-item">
//           <Form.Group
//             className="Search-child-wrp"
//             controlId="validationCustom01">
//             <Form.Control
//               type="text"
//               name="clientsearch"
//               maxLength={30}
//               placeholder="Search by client name"
//               value={ClientInput}
//               onChange={(elem) => {
//                 if (elem.target.value.match(match) != null) {
//                   setClientInput(elem.target.value);
//                 }
//               }}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid client.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Button className="search-btn">
//             <i className="fas fa-search"></i>
//           </Button>
//         </div>
//       </Form>
//     </>
//   );
// };

// const ProductSearch = () => {
//   const [validatedAdd, setValidated] = useState(false);
//   const [productInput, setproductInput] = useState("");
//   const match = "^[a-zA-Z]*$";

//   const handleSubmitAdd = (event: any) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       setValidated(true);
//       event.stopPropagation();
//     } else {
//       event.preventDefault();
//       setValidated(false);
//     }
//   };

//   return (
//     <>
//       <Form
//         className="Search_Form"
//         noValidate
//         validated={validatedAdd}
//         onSubmit={handleSubmitAdd}>
//         <div className="Input-item">
//           <Form.Group className="Search-child-wrp">
//             <Form.Control
//               type="text"
//               name="clientsearch"
//               maxLength={30}
//               placeholder="Search by product name"
//               value={productInput}
//               onChange={(elem) => {
//                 if (elem.target.value.match(match) != null) {
//                   setproductInput(elem.target.value);
//                 }
//               }}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid Product.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Button className="search-btn">
//             <i className="fas fa-search"></i>
//           </Button>
//         </div>
//       </Form>
//     </>
//   );
// };

import React from "react";

export default function Dashboard() {
  return (
    <>
      <section className="mt-16 pt-4 Dashboard_Content_Wrapper">
        <div className="Dashboard_Wrapper px-8">
          <div className="Dash-Heading py-2 px-6">
            <h2 className="text-center font-bold text-dark-textColor text-2xl font-primaryFont mb-3">
              Home
            </h2>
          </div>
          <div className="Dashboard_Content">
            <div className="dashboard-head">
              <ul className="dashboard-unorder grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-2">
                <li className="dash-item1 dash-cmn0 list-none bg-white shadow-lg rounded transition-all p-4">
                  <a href="#" className="text-current no-underline ">
                    <figure className="icon text-right">
                      <i className="fas fa-file-prescription text-3xl text-dark-textColor font-bold"></i>
                    </figure>
                    <figcaption>
                      <h3 className="text-7xl font-bold py-2 text-dark-textColor">
                        0
                      </h3>
                      <p className="  text-base capitalize text-dark-textColor font-bold m-0">
                        Draft Create Rx
                      </p>
                    </figcaption>
                  </a>
                </li>
                <li className="dash-item2 dash-cmn01 bg-white shadow-lg rounded transition-all p-4">
                  <a href="#" className="text-current no-underline ">
                    <figure className="icon text-right">
                      <i className="fas fa-check-circle text-3xl text-dark-textColor font-bold"></i>
                    </figure>
                    <figcaption>
                      <h3 className="text-7xl font-bold py-2 text-dark-textColor">
                        0
                      </h3>
                      <p className="text-base capitalize text-dark-textColor font-bold m-0">
                        pending Client approvals
                      </p>
                    </figcaption>
                  </a>
                </li>
                <li className="dash-item3 dash-cmn01 bg-white shadow-lg rounded transition-all p-4">
                  <a href="#" className="text-current no-underline ">
                    <figure className="icon text-right">
                      <i className="fas fa-sync text-3xl text-dark-textColor font-bold"></i>
                    </figure>
                    <figcaption>
                      <h3 className="text-7xl font-bold py-2 text-dark-textColor">
                        0
                      </h3>
                      <p className="text-base capitalize text-dark-textColor font-bold m-0">
                        expired rx renewals
                      </p>
                    </figcaption>
                  </a>
                </li>
                <li className="dash-item4 dash-cmn01 bg-white shadow-lg rounded transition-all p-4">
                  <a href="#" className="text-current no-underline">
                    <figure className="icon text-right">
                      <i className="fas fa-link text-3xl text-dark-textColor font-bold"></i>
                    </figure>
                    <figcaption>
                      <h3 className="text-7xl font-bold py-2 text-dark-textColor">
                        0
                      </h3>
                      <p className="text-base capitalize text-dark-textColor font-bold m-0">
                        dependent patient links
                      </p>
                    </figcaption>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
