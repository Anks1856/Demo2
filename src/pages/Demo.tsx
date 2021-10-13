import { Menu, Input, Button, Checkbox, Form, Select, DatePicker } from "antd";
import { useState } from "react";
const { SubMenu } = Menu;
const { Option } = Select;
const Demo = () => {
  const [formDetails, setFormDetails] = useState({});

  // const handleFinish = (values) => {
  //   // console.log(values);
  //   setFormDetails(values);
  // };
  console.log(formDetails);

  return (
    <div className="mt-24">
      <div className="ml-7 mr-9 h-24 bg-blue-lighter flex items-center relative shadow-ct rounded-sm">
        <div className="flex items-center bg-white w-52 h-16 text-left absolute -left-4 shadow-ct rounded-sm font-bold text-2xl text-blue-dark">
          <p className="my-10">
            <i className="fas fa-file-prescription ml-5"></i>
            <span className="ml-3"> Create</span>
            <span className="ml-10">1</span>
          </p>
        </div>
      </div>

      <div className="shadow-ct mx-11">
        <div className="py-10 px-20 bg-white ">
          <div className="shadow-ct">
            <Menu mode="inline" className="">
              {/* defaultOpenKeys={["sub4"]} */}
              {/* <div> */}
              <SubMenu
                key="sub1"
                title={
                  <div className="flex space-x-7 items-center relative">
                    <p className="font-bold text-base">Megan Kaminski</p>
                    <p className="font-normal text-base">meganmkam@gmail.com</p>
                    <i className="fas fa-chevron-down absolute right-0 text-xl font-normal"></i>
                  </div>
                }
                className=" bg-red-light rounded-small">
                <Menu.Item key="5">Option 1</Menu.Item>
                <Menu.Item key="6">Option 2</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              {/* </div> */}
              <SubMenu
                key="sub2"
                title={
                  <div className="flex space-x-7 items-center relative">
                    <i className="fas fa-dog text-base"></i>
                    <p className="font-bold text-base">Dakota</p>
                    <p className="font-normal text-base">55 lbs.</p>
                    <i className="fas fa-chevron-down absolute right-0 text-xl font-normal"></i>
                  </div>
                }
                className="shadow-ct bg-red-light rounded-small m-0 p-0">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <div className="flex space-x-7 items-center relative">
                    <i className="fas fa-mortar-pestle text-base"></i>
                    <p className="font-bold text-base">Methocarbamol</p>
                    <p className="font-normal text-base">
                      Rx Required - Compounded Medication
                    </p>
                    <i className="fas fa-chevron-down absolute right-0 text-xl font-normal"></i>
                  </div>
                }
                className="shadow-ct bg-red-light rounded-small m-0 p-0">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                {/* <Menu.Item className="bg-white"> */}
              </SubMenu>

              <div className="px-5 py-2">
                <div className="bg-white md:flex md:w-full md:justify-between md:space-x-5 my-4 capitalize">
                  <div className="shadow-cus p-4 w-full rounded-small border">
                    <p className="text-xl font-semibold p-4">Prescription</p>
                    <div className=" text-lg font-semibold p-4 md:p-0">
                      <Form>
                        <div className="md:flex md:space-x-4 w-full">
                          <label
                            htmlFor=""
                            className="text-right w-full md:w-1/3 ">
                            Product:
                          </label>
                          <br />
                          <Form.Item
                            name="product"
                            className="w-full md:w-1/2 rounded-2xl"
                            rules={[{ required: true }]}>
                            <Select
                              className="w-full md:w-1/2 rounded-small border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="product 1">Product 1</Option>
                              <Option value="product 2">Product 2</Option>
                              <Option value="product 3">Product 3</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            From:
                          </label>{" "}
                          <br />
                          <Form.Item
                            name="from"
                            className="w-full md:w-1/2"
                            rules={[{ required: true }]}>
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="from1">from 1</Option>
                              <Option value="from2">from 2</Option>
                              <Option value="from3">from 3</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Strength:
                          </label>
                          <br />
                          <Form.Item
                            name="strength"
                            className="w-full md:w-1/2"
                            rules={[{ required: true }]}>
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="strength1">Strength 1</Option>
                              <Option value="strength2">Strength 2</Option>
                              <Option value="strength3">Strength 3</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full">
                          <label htmlFor="" className="text-right w-1/3">
                            Flavor:
                          </label>
                          <Form.Item name="flavor" className="w-full md:w-1/2">
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="flavor1">Flavor 1</Option>
                              <Option value="flavor2">Flavor 2</Option>
                              <Option value="flavor3">Flavor 3</Option>
                              <Option value="flavor4">Flavor 4</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Units Per Fill:
                          </label>
                          <Form.Item
                            name="unitPerPill"
                            className="w-full md:w-1/2">
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="unit1">Unit 1</Option>
                              <Option value="unit2">Unit 2</Option>
                              <Option value="unit3">Unit 3</Option>
                              <Option value="unit4">Unit 4</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full">
                          <label htmlFor="" className="text-right w-1/3">
                            Directions:
                          </label>
                          <br />
                          <div className="flex  w-full md:w-1/2 mb-5 border border-dark-shadow">
                            <Form.Item
                              name="direction"
                              className="w-full h-2 md:w-1/2">
                              <Select
                                className="w-44 md:w-28 border-r border-dark-shadow"
                                placeholder="Directions">
                                <Option value="direction1">Direction 1</Option>
                                <Option value="direction2">Direction 2</Option>
                                <Option value="direction3">Direction 3</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              name="directionText"
                              className="h-2 w-full ">
                              <Input
                                type="text"
                                placeholder=""
                                name="direction"
                                className="w-full "
                              />
                            </Form.Item>
                          </div>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Days Supply:
                          </label>
                          <br />
                          <Form.Item
                            name="daysSupply"
                            className="w-full md:w-1/2 ">
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="1day"> 1 day</Option>
                              <Option value="2day">2 day</Option>
                              <Option value="3day">3 day</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Refills:
                          </label>
                          <br />
                          <Form.Item name="refills" className="w-full md:w-1/2">
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="refills1">Refills 1</Option>
                              <Option value="refills2">Refills 2</Option>
                              <Option value="refills3">Refills 3</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Expiration:
                          </label>
                          <br />
                          <Form.Item
                            name="expiration"
                            className="w-full md:w-1/2 border border-dark-shadow">
                            <DatePicker className="w-full md:w-full " />
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Client Notification:
                          </label>
                          <br />
                          <div className="flex w-full md:w-1/2 mb-5 border border-dark-shadow">
                            <Form.Item
                              name="clientNotification"
                              className="w-full h-2 md:w-1/2 p-0">
                              <Select
                                className="w-44 md:w-28 border-r border-dark-shadow"
                                placeholder="Today">
                                <Option value="today">Today</Option>
                                <Option value="tommorow">Tommorow</Option>
                                <Option value="dayAfter">day after T</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              name="clientNotifyDate"
                              className="h-2 w-full">
                              <DatePicker className="w-full" />
                            </Form.Item>
                          </div>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            AutoShip Promt :
                          </label>
                          <br />
                          <Form.Item
                            name="autoShip"
                            className="w-full md:w-1/2">
                            <Select
                              className="w-full md:w-1/2 border border-dark-shadow"
                              placeholder="Select a Product">
                              <Option value="yes">Yes</Option>
                              <Option value="no">No</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Note to Pharmacy:
                          </label>
                          <div className="flex w-full md:w-1/2 mb-5 border border-dark-shadow">
                            <Form.Item
                              name="noteToPharmacy"
                              className="w-full h-2 md:w-1/2">
                              <Select
                                className=" w-44 md:w-28 border-r border-dark-shadow"
                                placeholder="Directions">
                                <Option value="parmacy1">pharmacy 1</Option>
                                <Option value="parmacy2">pharmacy 2</Option>
                                <Option value="parmacy3">pharmacy 3</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              name="pharmacyNote"
                              className="w-full h-2">
                              <Input
                                type="text"
                                placeholder=""
                                className="border w-full"
                              />
                            </Form.Item>
                          </div>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Note to Client:
                          </label>
                          <div className="flex w-full md:w-1/2 mb-5 border border-dark-shadow">
                            <Form.Item
                              name="noteToClient"
                              className="w-full h-2 md:w-1/2">
                              <Select
                                className="w-44 md:w-28 border-r border-dark-shadow"
                                placeholder="Directions">
                                <Option value="client1">Client 1</Option>
                                <Option value="client2">Client 2</Option>
                                <Option value="client3">Client 3</Option>
                                <Option value="client4">Client 4</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="clientNote" className="w-full h-2">
                              <Input
                                type="text"
                                placeholder=""
                                className="border w-full"
                              />
                            </Form.Item>
                          </div>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label htmlFor="" className="text-right w-1/3">
                            Authorizing Vet:
                          </label>
                          <div className="w-full md:w-1/2 mb-5 ">
                            <Form.Item
                              name="authorizingVet"
                              className="md:w-full"
                              rules={[{ required: true }]}>
                              <Select
                                className="w-full border border-dark-shadow"
                                placeholder="Select a Product">
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                              </Select>
                            </Form.Item>
                            <p className="text-xs tracking-tighter text-right">
                              This is my eSignature and implies i have valid
                              VCPR as definedbt the AVMA.
                            </p>
                          </div>
                        </div>

                        <div className="md:flex md:space-x-4 w-full ">
                          <label
                            htmlFor=""
                            className="text-right w-1/3"></label>
                          <div className="w-full md:w-1/2 ">
                            <div className="flex items-center justify-end">
                              <Form.Item
                                label="Print Rx Details after Authorizing"
                                name="printRxDetails"
                                valuePropName="checked"
                                className="flex items-center align-middle">
                                <Checkbox />
                              </Form.Item>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4 w-full mt-3">
                          <label
                            htmlFor=""
                            className="text-right w-1/3 hidden md:block"></label>
                          <br />
                          <div className="w-full md:w-1/2 ">
                            <div className="text-center flex justify-end space-x-6">
                              <Button
                                htmlType="submit"
                                style={{ borderRadius: "20px" }}
                                className="rounded-full py-1 border-2 border-black text-black text-center px-5 ">
                                Save Draft
                              </Button>
                              <Button
                                htmlType="submit"
                                style={{
                                  borderRadius: "20px",
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                // border Radius not working => bcz it is pre-define in antd
                                className="rounded-btn py-1 border-2 border-black bg-black text-white text-center px-5">
                                Authorize
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>

                  <div className="shadow-cus p-4 w-full md:w-2/3 rounded-small border my-4 md:my-0">
                    <div>
                      <p className="font-bold text-xl">Product Details</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-bold text-base">METHOCARBAMOL</p>
                      <br />
                      <p className="text-base">ORAL SUSPENSION</p>
                      <br />
                      <p className="text-base">100mg/mL</p>
                    </div>

                    <div className=" md:flex my-10 md:space-x-4">
                      <div className="w-28 h-28 shadow-2xl rounded-lg">
                        <img
                          src="/medicine.jpg"
                          className="w-28 h-28 rounded-lg"
                          alt=""
                        />
                      </div>
                      <div className="mt-10 md:mt-0 ">
                        <div className="flex space-x-2">
                          <div className="flex items-center">
                            <div className="">
                              <i className="fas fa-calendar-alt fa-xl"></i>
                            </div>
                          </div>
                          <div>
                            <div className="m-0 text-lg font-semibold">
                              220 days
                            </div>
                            <div className="m-0 text-sm">max self life</div>
                          </div>
                        </div>

                        <div className="mt-2">
                          <div className="flex space-x-2">
                            <div className="flex items-center">
                              <div className="">
                                <i className="fas fa-truck fa-xl"></i>
                              </div>
                            </div>
                            <div>
                              <div className="m-0 text-lg font-semibold">
                                1 - 2 days
                              </div>
                              <div className="m-0 text-sm">delivery time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full my-2">
                      <Menu
                        mode="inline"
                        className="w-full text-black text-center font-semibold text-lg shadow-ct p-2 my-2 rounded">
                        <SubMenu
                          title={
                            <div className="flex space-x-7 items-center relative">
                              <p>Description</p>
                              <i className="fas fa-chevron-down absolute right-0 text-xl font-normal"></i>
                            </div>
                          }
                          className="text-black shadow-ct">
                          <Menu.Item>Description </Menu.Item>
                          <Menu.Item>Description 2</Menu.Item>
                          <Menu.Item>Description 3</Menu.Item>
                          <Menu.Item>Description 4</Menu.Item>
                        </SubMenu>
                      </Menu>
                    </div>

                    <div className="w-full my-2">
                      <Menu
                        mode="inline"
                        className="w-full text-center font-semibold text-lg shadow-ct p-2 my-2 rounded">
                        <SubMenu
                          title={
                            <div className="flex space-x-7 items-center relative">
                              <p>Prescribing Details</p>
                              <i className="fas fa-chevron-down absolute right-0 text-xl font-normal"></i>
                            </div>
                          }
                          className="text-black shadow-ct">
                          <Menu.Item>Prescribing Details </Menu.Item>
                          <Menu.Item>Description 2</Menu.Item>
                          <Menu.Item>Description 3</Menu.Item>
                          <Menu.Item>Description 4</Menu.Item>
                        </SubMenu>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Menu.Item> */}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
