import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
import Data from "../Data/Data";
import { notification } from "antd";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { useTokenMutationMutation } from "../../generated/graphql";
import { readCookie, deleteAllCookies } from "../../util/utilities";

export const Login = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  //   const history = useHistory();

  const [UserName, setUserNameState] = useState("");
  const [Password, setPasswordState] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [loginFunc] = useTokenMutationMutation();

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

  useEffect(() => {
    if (readCookie("isRemember") !== null) {
      setIsRemember(Boolean(`${readCookie("isRemember")}`));
      setUserNameState(atob(`${readCookie("userName")}`));
      setPasswordState(atob(`${readCookie("password")}`));
      form.setFieldsValue({
        user_name: atob(`${readCookie("userName")}`),
        password: atob(`${readCookie("password")}`),
        remember: Boolean(`${readCookie("isRemember")}`),
      });
    }
  }, []);

  const handleSubmitAdd = async () => {
    if (isRemember) {
      document.cookie = `userName = ${btoa(UserName)}`;
      document.cookie = `password = ${btoa(Password)}`;
      document.cookie = `isRemember = ${isRemember}`;
    } else {
      deleteAllCookies();
    }
    await loginFunc({
      variables: {
        loginInput: {
          username: UserName,
          password: Password,
        },
      },
    })
      .then((Data: any) => {
        console.log("Data", Data);
        localStorage.setItem("LoginDetails", JSON.stringify(Data.data.Login));
        history.push("/Dashboard");
        notify("success", "Login Successfully", "User was logged in.");
      })
      .catch((error: any) => {
        console.log(error, "Login");

        notify(
          "error",
          "Login credentials are wrong",
          error !== undefined ? error.message : ""
        );
      });
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
                  <p className="font-bold m-0  text-2xl text-dark-textColor">
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
                    {Data.LoginHeading}
                  </h3>
                </div>
                <Form
                  name="basic"
                  form={form}
                  initialValues={{ user_name: UserName }}
                  onFinish={handleSubmitAdd}
                  autoComplete="off">
                  {console.log("username:::", UserName)}
                  <Form.Item
                    name="user_name"
                    rules={[
                      {
                        required: true,
                        message: "Username is required",
                      },
                    ]}>
                    <Input
                      name="user_name"
                      maxLength={30}
                      value={UserName}
                      onChange={(e) => {
                        setUserNameState(e.target.value);
                      }}
                      placeholder="Username"
                      type="text"
                      className="bg-white py-2 px-4 my-1 hover:border-blue-dark focus:border-blue-dark focus:shadow-sm transition-all border-1 border-gray-500
                     rounded-sm placeholder-gray-500"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Password is required",
                      },
                      {
                        min: 8,
                        message: "Password must be minimum 8 characters",
                      },
                    ]}>
                    <Input
                      onChange={(e) => {
                        setPasswordState(e.target.value);
                      }}
                      minLength={8}
                      maxLength={30}
                      type="password"
                      placeholder="Password"
                      value={Password}
                      className="bg-white py-2 px-4  my-1 hover:border-blue-dark focus:border-blue-dark focus:shadow-sm  transition-all border-1 border-gray-500
                       rounded-sm placeholder-gray-500"
                    />
                  </Form.Item>
                  <div className="checkbox1 flex justify-between flex-wrap">
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      className="m-0 h-auto">
                      <Checkbox
                        checked={isRemember}
                        onChange={(e) => {
                          setIsRemember(!isRemember);
                        }}
                        type="checkbox"
                        id="checkbox"
                        className="
                         hover:border-green-200 focus:border-green-200 text-xs/2 capitalize text-dark-shadow transition-all hover:opacity-80">
                        Remember me
                      </Checkbox>
                    </Form.Item>
                    <div className="Forgot-wrp">
                      <Link
                        to="/ForgotPassword"
                        className="font-medium underline  transition-all text-xs/2 capitalize text-dark-shadow hover:text-gray-700">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      // hover:text-gray-800
                      className="Login_btn mt-4 mb-4 p-3 py-3 h-12 relative border-none outline-none  w-full text-sm capitalize  text-white
                       bg-dark-textColor transition-all   hover:text-white focus:shadow-sm flex items-center justify-center rounded-3xl">
                      Login
                    </Button>
                  </Form.Item>
                  <div className="Condition w-full">
                    <p className="text-xs capitalize text-dark-textColor font-semibold">
                      by continuing, i agree with the{" "}
                      <Link
                        to="#"
                        className="underline transition-all text-dark-textColor inline-block hover:text-opacity-80">
                        Term of service
                      </Link>{" "}
                      &{" "}
                      <a
                        href="#"
                        className="underline transition-all text-dark-textColor inline-block hover:text-opacity-80">
                        Privacy Policy.
                      </a>
                    </p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="Login_Footer my-20">
          <ul className="Login-foot_content flex flex-wrap py-5 pl-pleft  gap-4 bg-dark-textColor w-full">
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
};
