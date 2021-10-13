import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import {
  notification,
  Modal,
  Button,
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
  Avatar,
  Tabs,
  Menu,
  Dropdown,
} from "antd";
import { MaskedInput } from "antd-mask-input";

export default function AddModal(props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const AddShowModal = () => {
    setIsModalVisible(true);
  };

  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };

  const HandleCancle = () => {
    setIsModalVisible(false);
  };

  //   const clickMe = () => {
  //     setIsModalVisible(false);
  //   };

  const { Option } = Select;

  const [form] = Form.useForm();
  const [locationForm] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      md: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      md: { span: 19 },
    },
  };

  return (
    <>
      <Modal
        title="Add New Patient"
        visible={isModalVisible}
        width="700px"
        style={{ margin: "0 auto 9rem" }}
        onCancel={HandleCancle}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        maskClosable={false}
        className="Account_Modal font-primaryFont">
        <div className="Form_wrapper">
          <Form
            {...formItemLayout}
            form={form}
            name="account"
            // onFinish={handleSubmitAdd}
            scrollToFirstError>
            <Form.Item
              name="name"
              label="Name:"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  pattern: /^[a-zA-Z ]*$/,
                  message: "Should be only alphabets",
                },
              ]}>
              <Input
                type="text"
                maxLength={30}
                placeholder="please enter Name"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email:"
              rules={[
                {
                  type: "email",
                  message: "Invalid email address",
                },
                {
                  required: true,
                  message: "Email is required",
                },
              ]}>
              <Input
                maxLength={50}
                placeholder="please enter email"
                disabled={true}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number:"
              rules={[
                {
                  pattern: /^[0-9 ]*$/,
                  message: "This field is required",
                },
                {
                  required: true,
                  message: "This field is required",
                },
              ]}></Form.Item>
            <Form.Item
              name="user_name"
              label="Username:"
              rules={[
                {
                  message: "The input is not valid Name!",
                },
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input
                type="text"
                maxLength={30}
                placeholder="please enter Name"
                disabled={true}
              />
            </Form.Item>
            <Form.Item className="flex justify-end w-full text-right">
              <Button
                htmlType="submit"
                className="common-btn Login_btn relative  border-none outline-none mt-1 mb-1 px-9 hover:bg-gray-700 
                    hover:text-white h-10  bg-blue-dark rounded-full text-white capitalize">
                save
              </Button>
            </Form.Item>
          </Form>
          <div className="Location_Setting_Wrapper my-3">
            <div className="Location_Header">
              <h2 className="pt-2  pb-7 text-xl text-dark-textColor capitalize font-bold">
                My Location Settings
              </h2>
            </div>
            <Form form={locationForm} id="test">
              <Form.Item
                name="location"
                label="Location"
                id="location_select"
                // rules={[
                //   {
                //     message: "Please select valid location",
                //   },
                // ]}
              >
                <Select
                  placeholder="select your Location"
                  className=""
                  //   getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  //   defaultValue={LocationValue}
                  //   onChange={handleSelectChangeLocation}
                >
                  {/* {data?.GetUser?.locationsUsers?.map((locationUser) => (
                    <Option value={locationUser.id}>
                      {locationUser?.location?.name}
                    </Option>
                  ))} */}
                  <Option value="">A1</Option>
                  <Option value="">A2</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}
// function dataSet() {
//   throw new Error("Function not implemented.");
// }
