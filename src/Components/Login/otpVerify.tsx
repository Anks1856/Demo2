import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Data from "../Data/Data";
import { useOtpVerifyMutationMutation } from "generated/graphql";
import { notification, Row, Col, Form, Input, Button, InputNumber } from "antd";

export default function OTPVerify(props: any): JSX.Element {
  const history = useHistory();

  // const [OTP, setOTP] = useState("");
  // const [validatedAdd, setValidated] = useState(false);

  const [otpVerifyMutation] = useOtpVerifyMutationMutation();

  useEffect(() => {
    console.log("props", props);
  });

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
    otpVerifyMutation({
      variables: {
        otpVerifyInput: {
          id: props.userId,
          otp: values.OTP,
        },
      },
    })
      .then((data: any) => {
        console.log("data", data);
        notify(
          "success",
          "Email Verified ",
          "Now you can change the password."
        );
        history.push(`/ResetPassword/${props.userId}`);
      })
      .catch((err: any) => {
        console.log("err", err);
        notify("error", "Error!", err !== undefined ? err.message : "");
      });
  };
  const onFinishFailed = (values: any) => {
    console.log("fail submit");
  };

  return (
    <>
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
            span={12}
            xs={12}
            sm={12}
            md={12}
            lg={12}>
            <div className="form_Wrapper items-child w-9/12">
              <div className="Form_Heading mb-4">
                <h3 className="capitalize font-bold text-3xl pb-2">
                  Email verification
                </h3>
                <span>
                  Enter the OTP that you received at your email address
                </span>
              </div>
              <Form
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="mt-4">
                <Form.Item
                  name="OTP"
                  rules={[
                    {
                      required: true,
                      message: "Please provide valid OTP",
                    },
                  ]}>
                  <Input
                    placeholder="OTP"
                    maxLength={6}
                    type="number"
                    className="bg-white py-2 px-4 my-1 hover:border-blue-dark focus:border-blue-dark focus:shadow-sm transition-all border-1 border-gray-500
                      placeholder-gray-50::placeholder rounded-sm"
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
                       bg-dark-textColor transition-all hover:text-gray-800 focus:shadow-sm flex items-center justify-center rounded-3xl">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
