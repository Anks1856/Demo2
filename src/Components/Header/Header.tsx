import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import Data from "../Data/Data";
import Profile from "./Profile/profile";
import Notification from "./Notification/notification";
import Delegation from "./Delegation/Delegation";
import MaskedInput from "antd-mask-input";
import {
  useGetUserLazyQuery,
  useUpdateUserMutation,
  UpdateUserInput,
  useGetUserQuery,
  Maybe,
  useSwitchlocationMutation,
} from "generated/graphql";
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
import { DownOutlined } from "@ant-design/icons";

import { ToastContainer, toast } from "react-toastify";

export default function Header() {
  const location: any = useLocation();

  const history = useHistory();
  // const [Addshow, setAddShow] = useState(false);
  const [LocationValue, setLocationValue] = useState<number | string>();
  const [UserInput, setUserData] = useState<UpdateUserInput>();
  const [displayName, setDisplayName] = useState<string>();
  const [displayImg, setDisplayImg] = useState<string>();
  // const [currentTab, setCurrentTab] = useState('tab1');
  const [phoneArray, setPhoneArray]: any[] = useState([]);
  const [selectedPhoneType, setSelectedPhoneType] = useState(1);
  const [UpdateUser] = useUpdateUserMutation();
  const [switchlocationMutation] = useSwitchlocationMutation();

  const { TabPane } = Tabs;

  const callback = (key: any) => {
    // console.log(key);
  };

  const userID = JSON.parse(String(localStorage.getItem("LoginDetails")));
  // const [GetUser, { data, loading, error }] = useGetUserLazyQuery();
  const { data, refetch } = useGetUserQuery({
    skip: userID === null,
    variables: {
      getUserId: userID ? userID.user.id : null,
    },
  });

  function handleSelectChangeLocation(value: any) {
    setLocationValue(value);
  }

  useEffect(() => {
    dataSet();
    // const User = data?.GetUser;
    // const phonetemp = [];
    // User && setUserData(User);
    // data?.PhoneTypes.forEach((ele) => {
    //   console.log("ele");
    // });
    // form.setFieldsValue({
    //   name: User?.name,
    //   user_name: User?.username,
    //   email: User?.email,
    //   // phone: User?.phoneNumber,
    // });
    // data?.GetUser?.locationsUsers?.forEach((element, index) => {
    //   if (index === 0) {
    //     setLocationValue(element.id);
    //   }
    // });
  }, [data]);

  const dataSet = () => {
    console.log("dataSet");
    const User = data?.GetUser;
    const phonetemp: any[] = [];
    const currentLocation = User?.locationsUsers?.find(
      (element) => element.isPrimary === true
    );

    currentLocation?.displayName &&
      setDisplayName(currentLocation?.displayName);

    currentLocation?.profilePictureThumbnailPresignedUrl &&
      setDisplayImg(currentLocation?.profilePictureThumbnailPresignedUrl);

    localStorage.setItem("locationId", String(currentLocation?.id));
    User && setUserData(User);
    data?.PhoneTypes.forEach((ele) => {
      console.log("ele");
      const value = User?.userPhones?.find(
        (element) => element.phoneTypeId === ele.id
      );
      if (value) {
        phonetemp.push({
          phoneTypeId: ele.id,
          name: ele.description,
          phoneNumber: value.phoneNumber,
        });
      } else {
        phonetemp.push({
          phoneTypeId: ele.id,
          name: ele.description,
          phoneNumber: "",
        });
      }
    });
    setSelectedPhoneType(phonetemp[0]?.phoneTypeId);
    setPhoneArray(phonetemp);
    form.setFieldsValue({
      name: User?.name,
      user_name: User?.username,
      email: User?.email,
      phone: phonetemp[0]?.phoneNumber,
      prefix: phonetemp[0]?.phoneTypeId,
    });
    data?.GetUser?.locationsUsers?.forEach((element, index) => {
      if (index === 0) {
        setLocationValue(element.id);
        locationForm.setFieldsValue({
          location: element.id,
        });
      }
    });
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = () => {
  //   console.log("getAPI call");
  //   userID &&
  //     userID.user &&
  //     userID.user.id &&
  //     GetUser({
  //       variables: {
  //         // getUserId: 1,
  //         getUserId: userID.user.id,
  //       },
  //     });
  // };

  // const AddClose = () => setAddShow(false);
  // const HandleAddShow = () => {
  //   setAddShow(true);
  // };

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

  // const handleUpdateUser = async (event: any) => {
  //   event.preventDefault();
  //   await UpdateUser({
  //     variables: {
  //       // updateUserId: 1,
  //       updateUserId: userID.user.id,
  //       updateUserInput: {
  //         name: UserInput?.name,
  //         //phoneNumber: UserInput?.phoneNumber,
  //       },
  //     },
  //   })
  //     .then((Data: any) => {
  //       console.log("Data", Data);
  //       toast.success("Update Successfully.", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     })
  //     .catch((error: any) => {
  //       toast.error(error.message, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     });
  // };

  const handleSubmitAdd = async (value: any) => {
    const result = phoneArray;
    result.forEach((a: any) => delete a.name);
    console.log("result:::", result, phoneArray);
    UpdateUser({
      variables: {
        // updateUserId: 1,
        updateUserId: userID.user.id,
        updateUserInput: {
          name: value.name,
        },
        updateUserUserPhones: result,
      },
    })
      .then((Data: any) => {
        // getUserData();
        refetch({
          getUserId: userID.user.id,
        });
        dataSet();
        userID.user.name = value.name;
        localStorage.setItem("LoginDetails", JSON.stringify(userID));
        notify(
          "success",
          "Update Successfully",
          "Updated user detail successfully"
        );
      })
      .catch((error: any) => {
        notify(
          "error",
          error.message,
          error !== undefined ? error.message : ""
        );
        // toast.error(error.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      });
  };

  // --Validation----//

  const handleLogout = () => {
    localStorage.clear();
    history.push("/Login");
  };

  //-----Ant----Design----Fucntionn------->>>>>>

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    dataSet();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clickMe = () => {
    setIsModalVisible(false);
  };

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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 100 }}
        onChange={changePhonetype}
        getPopupContainer={(triggerNode) => triggerNode.parentElement}>
        {phoneArray.map((element: any) => {
          return <Option value={element.phoneTypeId}>{element.name}</Option>;
        })}
      </Select>
    </Form.Item>
  );

  function changePhonetype(value: any) {
    const fullNoRegex = new RegExp("^[0-9]{3} [0-9]{3} [0-9]{4}");
    const blankNoRegex = new RegExp("^[ ]{12}");

    const previousValue = phoneArray.find(
      (element: any) => element.phoneTypeId === selectedPhoneType
    );
    if (
      fullNoRegex.test(previousValue.phoneNumber) ||
      blankNoRegex.test(previousValue.phoneNumber) ||
      previousValue.phoneNumber.length === 0
    ) {
      const selectedValue = phoneArray.find(
        (element: any) => element.phoneTypeId === value
      );
      form.setFieldsValue({
        phone: selectedValue.phoneNumber,
      });
      setSelectedPhoneType(value);
    } else {
      form.setFieldsValue({
        phone: previousValue.phoneNumber,
        prefix: selectedPhoneType,
      });
    }
  }

  function handlePhoneNumberChange(value: any) {
    console.log(value, "--=-==-=", selectedPhoneType);
    const index = phoneArray.findIndex(
      (ele: any) => ele.phoneTypeId === selectedPhoneType
    );
    const newState = [...phoneArray];
    newState[index].phoneNumber = value;
    setPhoneArray(newState);
  }

  function switchLocation(value: any) {
    // localStorage.setItem("locationId", String(value));
    switchlocationMutation({
      variables: {
        updateLocationUserId: value,
        updateLocationUserInput: {
          isPrimary: true,
        },
      },
    })
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log("erro", err);
      });
  }

  if (location.pathname === "/Login") return null;
  //-----Ant----Design---Fucntionn-------end---here--->>>>>>

  const menu = (
    <Menu className="top-2 left-6 p-3">
      <h4 className="text-lg text-dark-textColor capitalize font-bold mb-3 font-bodyCommon">
        Switch Location
      </h4>
      {data?.GetUser?.locationsUsers?.map((ele) => {
        return (
          <Menu.Item key="0" className="py-2">
            <div
              onClick={() => {
                switchLocation(ele.id);
              }}
              className=" text-dark-label text-sm capitalize font-bodyCommon font-medium"
              // (ele.isPrimary ? "font-medium" : "font-normal")
            >
              <span className={ele?.isPrimary ? "font-bold" : ""}>
                {ele?.location?.name}
              </span>
            </div>
          </Menu.Item>
        );
      })}
      {/* <Menu.Item key="1" className="py-2">
        <Link
          to="#"
          className=" text-dark-label text-sm capitalize font-normal font-bodyCommon">
          Village Vets
        </Link>
      </Menu.Item> */}
      <Menu.Divider className="my-2" />
      <Menu.Item key="3" className="py-2" onClick={showModal}>
        <Link
          to="#"
          className=" text-dark-label text-sm capitalize font-normal font-bodyCommon">
          My Account
        </Link>
      </Menu.Item>
      <Menu.Item key="4" className="py-2">
        <Link
          to="/Login"
          className=" text-dark-label text-sm capitalize font-normal font-bodyCommon"
          onClick={() => handleLogout()}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <ToastContainer />
      <header>
        <div className="Header-Content w-full h-auto flex items-center justify-between bg-blue-dark shadow-sm fixed top-0 z-50 py-1">
          <nav className="flex items-center justify-between mx-2.5 transition-all w-86">
            <div className="Header_Logo">
              <a href="#">
                <figure className="m-0">
                  <NavLink to="/Dashboard" className="nav__logo">
                    <img src={Data.logo} alt="Logo" className="cl w-4/12" />
                  </NavLink>
                </figure>
              </a>
            </div>
            <div className="Profile-Wrapper grid grid-cols-gridRepeat items-center gap-4">
              <div className="Number_text  grid grid-cols-gridRepeat items-center gap-4 text-white">
                <a
                  href="tel:(888)-855-6337"
                  className="font-bold text-base text-white">
                  <p className="m-0 text-base capitalize font-bold font-bodyCommon">
                    (888)-855-6337{" "}
                  </p>
                </a>
                <span className="Qmark ">
                  <i className="fas fa-question-circle text-2xl text-white font-bold"></i>
                </span>
              </div>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Link
                  className="ant-dropdown-link dropdown-wrp relative"
                  onClick={(e) => e.preventDefault()}
                  to={""}>
                  {/* <DownOutlined /> */}
                  {displayImg ? (
                    <figure
                      className="w-16 h-16 overflow-hidden rounded-full border border-solid border-dark-textColor m-0 transition-all
                              hover:transition-all">
                      <img
                        src={displayImg}
                        alt="profile"
                        className="w-full h-full object-cover transition-all hover:scale-50"
                      />
                    </figure>
                  ) : (
                    <Avatar
                      className="bg-green-dark align-middle transition-all
                                     hover:opacity-90 hover:transition-all uppercase"
                      size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 50, xxl: 50 }}
                      gap={1}>
                      {displayName !== undefined
                        ? displayName.split(" ")[0][0]
                        : ""}
                      {displayName !== undefined
                        ? displayName.split(" ")[1]
                          ? displayName.split(" ")[1][0]
                          : ""
                        : ""}
                    </Avatar>
                  )}
                  {/* <Avatar
                    className="bg-green-dark align-middle transition-all
                     hover:opacity-90 hover:transition-all uppercase"
                    size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 50, xxl: 50 }}
                    gap={1}>
                    {userID?.user !== undefined
                      ? userID.user.name.split(" ")[0][0]
                      : "IV"}
                    {userID?.user !== undefined
                      ? userID.user.name.split(" ")[1]
                        ? userID.user.name.split(" ")[1][0]
                        : ""
                      : ""}
                  </Avatar> */}
                  {displayName ? (
                    <div
                      className="Profile-tooltip absolute top-16 -right-8 w-32 py-2
                bg-green-dark text-center rounded-md  transition-all hidden">
                      <div className="Profile-tooltip-content relative ">
                        <h3 className="text-sm text-dark-white1">
                          {displayName}
                        </h3>
                      </div>
                    </div>
                  ) : null}
                </Link>
              </Dropdown>
            </div>
          </nav>
        </div>
      </header>
      <div className="Account_Modal_Wrapper">
        {/* ----Add--User */}
        <>
          <Modal
            title="my Account settings"
            visible={isModalVisible}
            width="700px"
            style={{ margin: "0 auto 9rem" }}
            onCancel={handleCancel}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            maskClosable={false}
            className="Account_Modal font-primaryFont">
            <div className="Form_wrapper">
              <Form
                {...formItemLayout}
                form={form}
                name="account"
                onFinish={handleSubmitAdd}
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
                  ]}>
                  {/* <Input
                    type="number"
                    maxLength={10}
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    onKeyPress={(event) => {
                      const charCode = event.which
                        ? event.which
                        : event.keyCode;
                      if (charCode >= 48 && charCode <= 57) {
                        return true;
                      } else {
                        event.preventDefault();
                        return false;
                      }
                    }}
                    maxLength={10}
                    placeholder="number"
                    onChange={(e) => {
                      handlePhoneNumberChange(e.target.value);
                    }}
                  /> */}
                  <MaskedInput
                    type="text"
                    addonBefore={prefixSelector}
                    mask="111 111 1111"
                    name="phoneNumber"
                    onChange={(e) => {
                      handlePhoneNumberChange(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="user_name"
                  label="Username:"
                  rules={[
                    {
                      // type: "text",
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
                      getPopupContainer={(triggerNode) =>
                        triggerNode.parentElement
                      }
                      placeholder="select your Location"
                      defaultValue={LocationValue}
                      onChange={handleSelectChangeLocation}
                      className="">
                      {data?.GetUser?.locationsUsers?.map((locationUser) => (
                        <Option value={locationUser.id}>
                          {locationUser?.location?.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item className="w-full flex justify-end">
                    <ul className="addUnorder flex justify-end">
                      <li>
                        <Link
                          to="#"
                          className="text-green-dark font-bold capitalize text-sm transition-all hover:transition-all hover:text-dark-textColor">
                          Add Location
                        </Link>
                      </li>
                      <b className="bar text-green-dark font-bold capitalize text-sm mx-1.5">
                        /
                      </b>
                      <li>
                        <Link
                          to="#"
                          className="text-green-dark font-bold capitalize text-sm hover:text-dark-textColor transition-all hover:transition-all">
                          Merge Accounts
                        </Link>
                      </li>
                    </ul>
                  </Form.Item>
                </Form>
              </div>
            </div>
            {/* ---Tabs-- */}

            <div className="Tab_Wrapper">
              <Tabs defaultActiveKey="1" onChange={callback} id="tabWrp">
                <TabPane tab="Profile" key="1" className="tab1 tab-cmn">
                  <Profile
                    locationUserId={Number(LocationValue)}
                    clickMe={clickMe}
                  />
                </TabPane>
                <TabPane tab="Notification" key="2" className="tab2 tab-cmn">
                  <Notification
                    locationUserId={Number(LocationValue)}
                    clickMe={clickMe}
                  />
                </TabPane>
                <TabPane tab="Delegations" key="3" className="tab3 tab-cmn">
                  <Delegation
                    locationUserId={Number(LocationValue)}
                    clickMe={clickMe}
                  />
                </TabPane>
              </Tabs>
            </div>

            {/* ---Tabs---end--here--- */}
          </Modal>
        </>
      </div>
    </>
  );
}
