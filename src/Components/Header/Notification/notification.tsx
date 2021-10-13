import React, { useState, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
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
  Tabs,
} from "antd";

import {
  useSaveNotificationEmailMutation,
  useUserDetailQueryQuery,
} from "generated/graphql";

export default function Notification(props: any): JSX.Element {
  const [form] = Form.useForm();
  const { data, refetch } = useUserDetailQueryQuery({
    variables: {
      getLocationUserId: props.locationUserId,
    },
  });
  const [saveNotificationEmailMutation] = useSaveNotificationEmailMutation();
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(Boolean);
  const [validatedAdd, setValidated] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

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

  const handleSave = async (value: any) => {
    console.log("value::", value);
    saveNotificationEmailMutation({
      variables: {
        updateLocationUserId: props.locationUserId,
        updateLocationUserInput: {
          isPendingAuth: value.pending_auth,
          notificationEmail: value.emailaddress,
        },
      },
    })
      .then((data: any) => {
        notify(
          "success",
          "Update Successfully",
          "Notification data saved successfully."
        );
        handleCancel();
        // props.clickMe();
      })
      .catch((error: any) => {
        notify(
          "error",
          error.message,
          error !== undefined ? error.message : ""
        );
      });
  };

  const handleCancel = () => {
    console.log("cancel handle");
    refetch({
      getLocationUserId: props.locationUserId,
    })
      .then((result) => {
        handleSetData();
      })
      .catch((error) => {
        notify(
          "error",
          error.message,
          error !== undefined ? error.message : ""
        );
      });
  };

  const handleSetData = () => {
    // const DataEmail = data?.GetLocationUser?.notificationEmail;
    // DataEmail === null || DataEmail === undefined
    //   ? setEmail("")
    //   : setEmail(DataEmail);

    // setEmailCheck(
    //   data?.GetLocationUser?.isPendingAuth === undefined ||
    //     data?.GetLocationUser?.isPendingAuth === null
    //     ? false
    //     : data?.GetLocationUser?.isPendingAuth
    // );

    const User = data?.GetLocationUser;

    console.log("User?.isPendingAuth", User?.isPendingAuth);
    form.setFieldsValue({
      pending_auth: User?.isPendingAuth,
      emailaddress:
        User?.notificationEmail === null ? "" : User?.notificationEmail,
    });
  };

  useEffect(() => {
    handleSetData();
  }, [data, props]);

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

  //-----Ant----Design----Fucntionn----end---here--->>>>>>

  return (
    <>
      <div className="Notification_Wrapper Account_Modal px-8">
        <div className="Notify_Header">
          <h2 className="text-xl text-dark-textColor font-bold font-primaryFont">
            Email Notification
          </h2>
          <p className="text text-f1 text-dark-label">
            Send me email notification for...
          </p>
        </div>
        <div className="Notify-Content Form_wrapper">
          <Form
            {...formItemLayout}
            form={form}
            onFinish={handleSave}
            name="account"
            scrollToFirstError>
            <Form.Item
              name="pending_auth"
              valuePropName="checked"
              className="m-0 h-auto text-dark-label">
              <Checkbox
                checked={isRemember}
                type="checkbox"
                id="checkbox"
                className="text-dark-label font-bold"
                // className="hover:border-green-200 focus:border-green-200 text-xs/2 capitalize text-dark-shadow transition-all hover:opacity-80"
              >
                Pending Auth
              </Checkbox>
            </Form.Item>
            <Form.Item className="auth-text py-1 px-3 mb-1">
              <p className="text text-f1 text-dark-label">
                When a client places an order for an item and there is not an
                existing prescription on file, we will notify you to access the
                portal and take action.
              </p>
            </Form.Item>
            <Form.Item
              name="emailaddress"
              label="Email Address:"
              className="text-dark-label"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input
                type="email"
                placeholder="email address"
                className="ml-2"
                maxLength={30}
              />
            </Form.Item>
            <Form.Item>
              <div className="Browser_Content mt-2 mb-1">
                <div className="Notify_Header">
                  <h2 className="text-xl text-dark-textColor font-bold font-primaryFont">
                    Browser Notification
                  </h2>
                  <p className="text text-f1 text-dark-label">
                    Send me Browser notification for...
                  </p>
                </div>
              </div>
            </Form.Item>
            <Form.Item className="flex justify-end w-full text-right m-auto mt-4">
              <Button
                className="common-btn relative outline-none mt-1 mb-1 px-8  hover:border-solid shadow-none border-none
                h-9 text-blue-dark hover:border-dark-textColor rounded-full mr-3 hover:border hover:text-white capitalize"
                onClick={() => {
                  props.clickMe();
                }}>
                cancel
              </Button>
              <Button
                htmlType="submit"
                className="common-btn Login_btn relative  border-none outline-none mt-1 mb-1 px-9 hover:bg-gray-700 
                    hover:text-white h-10  bg-blue-dark rounded-full text-white capitalize">
                save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
