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
  Avatar,
} from "antd";
import MaskedInput from "antd-mask-input";
import Data from "Components/Data/Data";
import { stateArr } from "../../../util/State";

import {
  useUserDetailQueryQuery,
  useSaveProfileDetailsMutation,
  useUploadImageMutationMutation,
  useRemoveProfilePictureMutationMutation,
} from "generated/graphql";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Profile(props: any): JSX.Element {
  const [form] = Form.useForm();
  const cursor = {
    cursor: "not-allowed",
  };

  const { data, refetch } = useUserDetailQueryQuery({
    variables: {
      getLocationUserId: props.locationUserId,
    },
  });
  const [uploadImageMutationMutation] = useUploadImageMutationMutation();
  const [saveProfileDetailsMutation] = useSaveProfileDetailsMutation();
  const [removeProfilePictureMutation] =
    useRemoveProfilePictureMutationMutation();

  const [displayName, setDisplayname] = useState("");
  // const [title, setTitle] = useState("Dr.");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [role, setRole] = useState("");
  // const [vetNumber, setVetNumber] = useState("");
  // const [vetDate, setVetDate] = useState("");
  // const [vetState, setVetState] = useState("");
  // const [deaValue, setDeaValue] = useState("");
  // const [deaDate, setDeaDate] = useState("");
  const [useImage, setUserImage] = useState("");
  const [newImage, setNewImage] = useState("");
  // const [validatedAdd, setValidated] = useState(false);
  const [phoneArray, setPhoneArray]: any[] = useState([]);
  const [selectedPhoneType, setSelectedPhoneType] = useState(1);

  useEffect(() => {
    console.log("useeffect");
    handleSetData();
  }, [data, props]);

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

  const handleSetData = () => {
    const User = data?.GetLocationUser;

    const phonetemp: any[] = [];
    data?.PhoneTypes.forEach((ele) => {
      const value = User?.locationUserPhones?.find(
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
      displayName: User?.displayName,
      title: User?.title,
      email: User?.email,
      role: User?.role?.name,
      vetLicense: User?.vetLicenseNumber,
      Vet_license_date: User?.vetLicenseExpiration,
      LocationSnipt: User?.vetLicenseState,
      DEALicense: User?.deaLicense,
      DEA_license_date: User?.deaLicenseExpiration,
      phone: phonetemp[0]?.phoneNumber,
      prefix: phonetemp[0]?.phoneTypeId,
    });

    const displayName = data?.GetLocationUser?.displayName;
    displayName === null || displayName === undefined
      ? setDisplayname("")
      : setDisplayname(displayName);

    // const titleTemp = data?.GetLocationUser?.title;
    // titleTemp === null || titleTemp === undefined
    //   ? setTitle("Dr.")
    //   : setTitle(titleTemp);

    // const emailTemp = data?.GetLocationUser?.email;
    // emailTemp === null || emailTemp === undefined
    //   ? setEmail("")
    //   : setEmail(emailTemp);

    // const phoneNoTemp = data?.GetLocationUser?.phoneNumber;
    // phoneNoTemp === null || phoneNoTemp === undefined
    //   ? setPhoneNo("")
    //   : setPhoneNo(phoneNoTemp);

    // const roleTemp = data?.GetLocationUser?.role?.name;
    // roleTemp === null || roleTemp === undefined
    //   ? setRole("")
    //   : setRole(roleTemp);

    // const VetNoTemp = data?.GetLocationUser?.vetLicenseNumber;
    // VetNoTemp === null || VetNoTemp === undefined
    //   ? setVetNumber("")
    //   : setVetNumber(VetNoTemp);

    // const VetDateTemp = data?.GetLocationUser?.vetLicenseExpiration;
    // VetDateTemp === null || VetDateTemp === undefined
    //   ? setVetDate("")
    //   : setVetDate(VetDateTemp);

    // const VetStateTemp = data?.GetLocationUser?.vetLicenseState;
    // VetStateTemp === null || VetStateTemp === undefined
    //   ? setVetState("")
    //   : setVetState(VetStateTemp);

    // const deaNoTemp = data?.GetLocationUser?.deaLicense;
    // deaNoTemp === null || deaNoTemp === undefined
    //   ? setDeaValue("")
    //   : setDeaValue(deaNoTemp);

    // const deaDateTemp = data?.GetLocationUser?.deaLicenseExpiration;
    // deaDateTemp === null || deaDateTemp === undefined
    //   ? setDeaDate("")
    //   : setDeaDate(deaDateTemp);

    const photoTemp =
      data?.GetLocationUser?.profilePictureThumbnailPresignedUrl;
    photoTemp === null || photoTemp === undefined
      ? setUserImage("")
      : setUserImage(photoTemp);

    setNewImage("");
  };

  const handleSave = async (value: any) => {
    const result = phoneArray;
    result.forEach((a: any) => delete a.name);
    saveProfileDetailsMutation({
      variables: {
        updateLocationUserId: props.locationUserId,
        updateLocationUserInput: {
          displayName: value.displayName,
          title: value.title,
          email: value.email,
          vetLicenseNumber: value.vetLicense,
          vetLicenseExpiration: value.Vet_license_date,
          vetLicenseState: value.LocationSnipt,
          deaLicense: value.DEALicense,
          deaLicenseExpiration: value.DEA_license_date,
        },
        updateLocationUserLocationUserPhones: result,
      },
    })
      .then((data: any) => {
        console.log("data", data);
        if (newImage) {
          console.log("image is avilable");
          uploadImageMutationMutation({
            variables: {
              singleUploadInput: {
                locationUserId: props.locationUserId,
                file: newImage,
              },
            },
          })
            .then((data) => {
              notify(
                "success",
                "Update Successfully",
                "Updated user detail successfully"
              );
              handleCancel();
            })
            .catch((error) => {
              notify(
                "error",
                error.message,
                error !== undefined ? error.message : ""
              );
            });
        } else {
          notify(
            "success",
            "Update Successfully",
            "Updated user detail successfully"
          );
          handleCancel();
        }
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

  const handleSaveProfile = (value: any) => {
    console.log("value::::", value);
    // uploadImageMutationMutation({
    //   variables: {
    //     singleUploadInput: {
    //       locationUserId: props.locationUserId,
    //       file: newImage,
    //     },
    //   },
    // })
    //   .then((data) => {
    //     notify(
    //       "success",
    //       "Update Successfully",
    //       "Updated user detail successfully"
    //     );
    //   })
    //   .catch((error) => {
    //     notify(
    //       "error",
    //       error.message,
    //       error !== undefined ? error.message : ""
    //     );
    //   });
  };

  const handleRemoveProfile = () => {
    removeProfilePictureMutation({
      variables: {
        removeLocationUserProfilePictureLocationUserId: props.locationUserId,
      },
    })
      .then((data) => {
        handleCancel();
        setNewImage("");
        setUserImage("");
        notify("success", "Remove Successfully", "Profile removed sucessfully");
      })
      .catch((error) => {
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
        // handleSetData();
      })
      .catch((error) => {
        notify(
          "error",
          error.message,
          error !== undefined ? error.message : ""
        );
      });
  };

  const handleProfileChange = (event: any) => {
    // upload_profile_pic
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setUserImage(e.target.result);
      setNewImage(event.target.files[0]);
      event.target.value = null;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  //-----Ant----Design----Fucntionn------->>>>>>
  const { Option } = Select;

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

  // function changePhonetype(value: any) {
  //   console.log("value", selectedPhoneType, "new::", value);
  //   const selectedValue = phoneArray.find(
  //     (element: any) => element.phoneTypeId === value
  //   );
  //   form.setFieldsValue({
  //     phone: selectedValue.phoneNumber,
  //   });
  //   setSelectedPhoneType(value);
  // }
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

  const vetLicense = (
    <Form.Item
      name="vetLicense"
      noStyle
      rules={[
        {
          required: true,
          message: "This field is required",
        },
      ]}>
      <Input
        type="text"
        maxLength={20}
        placeholder="License"
        style={{ width: 100 }}
      />
    </Form.Item>
  );
  const LocationSnipt = (
    <Form.Item
      name="LocationSnipt"
      noStyle
      className="LocationSnipt rounded-tl-none rounded-bl-none"
      rules={[
        {
          required: true,
          message: "Please provide your vet license state!",
        },
      ]}>
      <Select
        style={{ width: 100 }}
        defaultValue="RT"
        className="Location1"
        getPopupContainer={(triggerNode) => triggerNode.parentElement}>
        {stateArr.map((element) => (
          <Option value={element.value}>{element.value}</Option>
        ))}
        {/* <Option value="NE">NE</Option>
        <Option value="RT">RT</Option>
        <Option value="LS">LS</Option> */}
      </Select>
    </Form.Item>
  );

  const DEALicense = (
    <Form.Item
      name="DEALicense"
      noStyle
      className="DEALicense"
      rules={[
        {
          required: true,
          message: "This field is required",
        },
      ]}>
      <Input
        type="text"
        maxLength={20}
        placeholder="License"
        style={{ width: 100 }}
      />
    </Form.Item>
  );
  //-----Ant----Design----Fucntionn------->>>>>>

  return (
    <>
      {console.log()}
      <div className="Profile_Wrapper w-full">
        <div className="Profile_header grid grid-cols-gridTemp items-center gap-4">
          <div className="profile_Title text-center">
            <h2 className="text-dark-label font-bold text-right text-base">
              Your Photo:
            </h2>
          </div>
          <div className="header_content grid gap-4 grid-cols-gridMax items-center">
            {useImage === "" ? (
              <Avatar
                className="bg-green-dark align-middle uppercase  border border-solid border-dark-textColor"
                size={62}
                gap={1}>
                {displayName !== undefined
                  ? displayName.split(" ")[0][0]
                  : "IV"}
                {displayName !== undefined
                  ? displayName.split(" ")[1]
                    ? displayName.split(" ")[1][0]
                    : ""
                  : ""}
              </Avatar>
            ) : (
              <figure
                className="w-16 h-16 overflow-hidden rounded-full border border-solid border-dark-textColor m-0 transition-all
            hover:transition-all">
                <img
                  src={useImage}
                  alt="profile"
                  className="w-full h-full object-cover transition-all hover:scale-50"
                />
              </figure>
            )}
            <figcaption>
              <ul className="profile_unorder flex justify-between flex-wrap gap-2">
                <li className=" w-6/12 text-sm text-dark-label font-bold overflow-hidden relative">
                  <a href="#" className="text-green-dark w-max inline-block">
                    <input
                      type="file"
                      name="upload_profile_pic"
                      id="upload"
                      className="upload-box"
                      placeholder="Upload File"
                      onChange={(e) => {
                        handleProfileChange(e);
                      }}
                    />
                    <span
                      className="label relative z-0 inline-block w-full cursor-pointer text-green-dark 
                   py-1 capitalize text-sm">
                      {" "}
                      Upload New Photo{" "}
                    </span>
                  </a>
                </li>
                <li
                  className=" w-2/5 text-sm text-dark-label font-bold overflow-hidden relative"
                  onClick={handleRemoveProfile}>
                  <Link to="#" className="text-green-dark w-max inline-block  ">
                    Remove Photo
                  </Link>
                </li>
                <li className="ds w-full font-normal">
                  Photos help your team recognize you
                </li>
              </ul>
            </figcaption>
          </div>
        </div>
        <div className="profile-Form mt-6">
          <Form
            {...formItemLayout}
            form={form}
            name="account"
            onFinish={handleSave}
            scrollToFirstError>
            <Form.Item
              name="displayName"
              label="Display Name:"
              rules={[
                {
                  pattern: /^[a-zA-Z ]*$/,
                  message: "Should be only alphabets",
                },
                {
                  required: true,
                  message: "This field is required",
                },
              ]}>
              <Input
                type="text"
                maxLength={30}
                placeholder="please enter display name"
                className=""
              />
            </Form.Item>
            <Form.Item
              name="title"
              label="Title:"
              className="profileSelect_wrp"
              rules={[
                {
                  message: "The input is not valid title!",
                },
                {
                  required: true,
                  message: "Please provide your title!",
                },
              ]}>
              <Select
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
                // onChange={handleChange}
                className="profile_title">
                <Option value="Dr.">Dr.</Option>
                <Option value="Mr.">Mr.</Option>
                <Option value="Mrs.">Mrs.</Option>
                <Option value="Miss.">Miss.</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="email"
              label="Email:"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Email is required",
                },
              ]}>
              <Input maxLength={30} placeholder="please enter email" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone:"
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
                onKeyPress={(event) => {
                  const charCode = event.which ? event.which : event.keyCode;
                  if (charCode >= 48 && charCode <= 57) {
                    return true;
                  } else {
                    event.preventDefault();
                    return false;
                  }
                }}
                style={{ width: "100%" }}
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
              name="role"
              label="Role:"
              // rules={[
              //   {
              //     message: "The input is not valid role!",
              //   },
              //   {
              //     required: true,
              //     message: "Please provide your role!",
              //   },
              // ]}
            >
              <Input
                type="text"
                maxLength={30}
                placeholder="please enter role"
                disabled={true}
                // className="bg-dark-grey1"
                // style={{ background: "f5f5f5!important" }}
              />
            </Form.Item>
            <Form.Item
              name="Vet_license_date"
              label="Vet License:"
              className="VetRt"
              rules={[
                {
                  required: true,
                  message: "Please provide your Vet License date!",
                },
              ]}>
              <Input
                type="date"
                // maxLength={10}
                max={new Date().toISOString().split("T")[0]}
                addonBefore={vetLicense}
                addonAfter={LocationSnipt}
                style={{ width: "100%" }}
                placeholder="date"
              />
            </Form.Item>
            <Form.Item
              name="DEA_license_date"
              label="DEA License:"
              rules={[
                {
                  required: true,
                  message: "Please provide your DEA license date!",
                },
              ]}>
              <Input
                type="date"
                addonBefore={DEALicense}
                max={new Date().toISOString().split("T")[0]}
                style={{ width: "100%" }}
                placeholder="date"
              />
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
