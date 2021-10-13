import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Data from "../Data/Data";
import OTPVerify from "../Login/otpVerify";
import { notification, Row, Col, Form, Input, Button } from "antd";
import { useMutationMutation } from "generated/graphql";

export default function ForgotPassword() {
  const [emailVerify, setEmailVerify] = useState(false);
  const [userId, setUserId] = useState();
  const [ForgotMutation] = useMutationMutation();

  const notify = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    notification[type]({
      message,
      description,
      duration: 1.5,
    });
  };

  const handleSubmit = (values: any) => {
    console.log("Received values of form: ", values);
    ForgotMutation({
      variables: {
        forgetPasswordInput: {
          email: values.email_address,
        },
      },
    })
      .then((data: any) => {
        console.log("data", data.data.ForgetPassword.userId);
        setUserId(data.data.ForgetPassword.userId);
        // setUserId(data)
        notify(
          "success",
          "Email sent successfully",
          "Please check the registered email address."
        );
        setEmailVerify(true);
      })
      .catch((err: any) => {
        console.log("err", err);
        notify("error", "", err !== undefined ? err.message : "");
      });
  };
  const onFinishFailed = (values: any) => {
    console.log("fail submit");
  };

  return (
    <>
      <section className="Login_Wrapper">
        <div className="Login_header flex items-center justify-center flex-wrap relative bg-blue-dark">
          <figure className="">
            <img
              src={Data.logo}
              alt="Logo"
              className="Header_Logo mx-auto w-56"
            />
          </figure>
        </div>
        <svg
          className="text-blue-dark fill-current w-full h-20"
          viewBox="0 0 500 150"
          preserveAspectRatio="none">
          <path d="M-17.21,153.45 C205.13,12.33 238.99,-75.50 500.84,150.48 L500.00,0.00 L0.00,0.00 Z"></path>
        </svg>
        {emailVerify ? (
          <OTPVerify userId={userId} />
        ) : (
          <div className="Login_Body">
            <Row className="Login_Content p-0 bg-white w-10/12 h-55 mx-auto mt-16 rounded shadow-ct">
              <Col
                className="Login_Left Login-item-cmn flex items-center justify-center flex-wrap p-4 h-full"
                xl={12}
                lg={12}
                md={12}
                xs={24}>
                <div className="Left-items items-child text-center py-16 px-8  w-10/12">
                  <figure className="Content_Logo">
                    <img
                      src={Data.logo2}
                      alt="Rx logo"
                      className="Logo2 object-cover my-0 mx-auto w-28"
                    />
                  </figure>
                  <figcaption>
                    <h1 className="py-4  font-extrabold uppercase text-green-dark font-bodyCommon text-4xl">
                      {Data.welcome}
                    </h1>
                    <p className="font-bold m-0 capitalize text-2xl text-dark-textColor">
                      {Data.p}
                    </p>
                  </figcaption>
                </div>
              </Col>
              <Col
                className="Login_Right Login-item-cmn flex  items-center justify-center flex-wrap p-4 h-full bg-green-light w-full"
                xl={12}
                lg={12}
                md={12}
                xs={24}>
                <div className="form_Wrapper items-child w-9/12">
                  <div className="Form_Heading mb-4">
                    <h3 className="capitalize font-bold text-3xl pb-2">
                      Forgot Your Password?
                    </h3>
                    <span>
                      We will send an OTP to your provided email address
                    </span>
                  </div>
                  <Form
                    name="basic"
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                      name="email_address"
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
                        maxLength={30}
                        placeholder="Email address"
                        className="bg-white py-2 px-4 my-1 hover:border-blue-dark focus:border-blue-dark focus:shadow-sm transition-all border-1 border-gray-500
                        placeholder-gray-500 rounded-sm"
                      />
                    </Form.Item>
                    <div className="checkbox1 flex justify-end flex-wrap m-0 mb-1">
                      <div className="Forgot-wrp">
                        <Link
                          to="/Login"
                          className="font-medium underline  transition-all text-xs/2 capitalize text-dark-shadow hover:text-gray-700">
                          Back to login?
                        </Link>
                      </div>
                    </div>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="Login_btn mt-4 mb-4 p-3 py-3 h-12 relative border-none outline-none  w-full text-sm capitalize  text-white
                       bg-dark-textColor transition-all hover:text-white focus:shadow-sm flex items-center justify-center rounded-3xl">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        )}
        <footer className="Login_Footer my-20">
          <ul className="Login-foot_content flex flex-wrap  py-5 pl-pleft  gap-4 bg-dark-textColor w-full">
            <li className="flex items-center justify-center flex-wrap w-max list-none text-white">
              <Link
                to="#"
                className="text-white text-xs transition-all hover:transition-all hover:opacity-80">
                Terms of service
              </Link>
              <b className="pl-5">|</b>
            </li>
            <li className="flex items-center justify-center flex-wrap w-max list-none text-white">
              <Link
                to="#"
                className="text-white text-xs transition-all hover:transition-all hover:opacity-80">
                Privacy Policy
              </Link>
              <b className="pl-5">|</b>
            </li>
            <li className="flex items-center justify-center flex-wrap w-max list-none text-white">
              <Link
                to="#"
                className="text-white text-xs transition-all hover:transition-all hover:opacity-80">
                Ryan Haight
              </Link>
              <b className="pl-5">|</b>
            </li>
            <li className="flex items-center justify-center flex-wrap w-max list-none text-white">
              <Link
                to="#"
                className="text-white text-xs transition-all hover:transition-all hover:opacity-80">
                Medication Disposal
              </Link>
              <b className="pl-5">|</b>
            </li>
            <li className="flex items-center justify-center flex-wrap w-max list-none text-white">
              <Link
                to="#"
                className="text-white text-xs transition-all hover:transition-all hover:opacity-80">
                Contact us
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
}
