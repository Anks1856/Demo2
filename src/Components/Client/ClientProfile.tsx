import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { stateArr } from "../../util/State";
import Data from "Components/Data/Data";
import { Button, Modal, Form, notification, Input, Select } from "antd";
import {
  useGetClientProfileLazyQuery,
  Client,
  useUpdateClientMutation,
} from "../../generated/graphql";
import MaskedInput from "antd-mask-input";
import { classNames } from "react-select/src/utils";
import AddModal from "./AddModal";

type OptionType = {
  value: string;
  label: string;
};

const State = [
  { value: "NE", label: "NE" },
  { value: "OH", label: "OH" },
  { value: "brandName2", label: "brandName2" },
];

export default function ClientProfile() {
  const [visible, setVisible] = useState(false);
  const [isVisible, isSetVisible] = useState(false);
  const [form] = Form.useForm();
  const [phoneArray, setPhoneArray]: any[] = useState([]);
  const [selectedPhoneType, setSelectedPhoneType] = useState(1);

  const [AddressArray, setAddressArray]: any[] = useState([]);
  const [selectedAddressType, setselectedAddressType] = useState(1);
  const showModal = () => {
    getClientProfile(Number(params?.clientId));
    setVisible(true);
  };
  const AddshowModal = () => {
    // getClientProfile(Number(params?.clientId));
    isSetVisible(true);
  };
  const PatientAddModal = (props: any) => {
    // AddShowModal
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }} onChange={changePhonetype}>
        {phoneArray.map((element: any) => {
          return <Option value={element.phoneTypeId}>{element.name}</Option>;
        })}
      </Select>
    </Form.Item>
  );

  const prefixSelectorAddress = (
    <Form.Item name="prefixAddress" noStyle className="Addressdrop">
      <Select
        style={{ width: 100 }}
        onChange={changeAddresstype}
        className="add-select bg-transparent">
        {AddressArray.map((element: any) => {
          return <Option value={element.addressTypeId}>{element.name}</Option>;
        })}
      </Select>
    </Form.Item>
  );

  function changeAddresstype(value: any) {
    const selectedAddressType = AddressArray.find(
      (element: any) => element.addressTypeId === value
    );

    form.setFieldsValue({
      Address: selectedAddressType.address,
      city: selectedAddressType.city,
      State: stateArr.find((e) => selectedAddressType.state === e.value)?.value,
      zipCode: selectedAddressType.zip,
    });
    setselectedAddressType(value);
  }

  function handlePhoneNumberChange(value: any) {
    const index = phoneArray.findIndex(
      (ele: any) => ele.phoneTypeId === selectedPhoneType
    );
    const newState = [...phoneArray];
    newState[index].phoneNumber = value;
    setPhoneArray(newState);
  }

  function handleAddressChange(value: any, Fieldname: string) {
    console.log(value, "value", Fieldname, "Fieldname");

    const index = AddressArray.findIndex(
      (ele: any) => ele.addressTypeId === selectedAddressType
    );
    const newState = [...AddressArray];
    switch (Fieldname) {
      case "address":
        newState[index].address = value;
        break;
      case "city":
        newState[index].city = value;
        break;
      case "zip":
        newState[index].zip = value;
        break;
      case "state":
        newState[index].state = value;
        break;
      default:
        break;
    }

    setAddressArray(newState);
  }

  const handleDropdownChange = async (event: any) => {
    console.log(event);
  };

  const handleSubmit = async (event: any) => {
    const result = phoneArray;
    const resultAddressArray = AddressArray;
    result.forEach((a: any) => delete a.name);
    resultAddressArray.forEach((a: any) => delete a.name);
    console.log(
      clientData,
      "handleSubmitclientDataclientDataclientDataclientData"
    );

    await UpdateclientProfile({
      variables: {
        updateClientId: Number(params?.clientId),
        updateClientInput: {
          name: clientData?.name,
          email: clientData?.email,
          birthdate: clientData?.birthdate,
          drivingLicense: clientData?.drivingLicense,
          pimsId: clientData?.pimsId,
          isActive: clientData?.isActive == "true" ? true : false,
        },
        updateClientClientPhones: result,
        updateClientClientAddress: resultAddressArray,
      },
    })
      .then((Data: any) => {
        console.log("Data", Data);
        getClientProfile(Number(params?.clientId));
        dataSet();
        setVisible(false);
        notify("success", "Update Successfully", "Update Client Profile");
      })
      .catch((error: any) => {
        notify(
          "error",
          "Error update client profile",
          error !== undefined ? error.message : ""
        );
      });
  };

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

    // const selectedValue = phoneArray.find(
    //   (element: any) => element.phoneTypeId === value
    // );
    // form.setFieldsValue({
    //   phone: selectedValue.phoneNumber,
    // });
    // setSelectedPhoneType(value);
  }

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const params: { clientId?: number | string } = useParams();

  //const [StateDropdown, setStateDropdown] = useState({});
  // const [clientData, setClientData] = useState<Client>();
  const [clientData, setClientData]: any[] = useState();

  const [clientProfile, { data, loading, error }] =
    useGetClientProfileLazyQuery();

  console.log(data, "isActiveisActiveisActiveisActive");

  const [UpdateclientProfile] = useUpdateClientMutation();

  // useEffect(() => {
  //   const client = data?.GetClient;
  //   client && setClientData(client);
  // }, [data]);

  useEffect(() => {
    getClientProfile(Number(params?.clientId));
  }, []);

  const getClientProfile = async (event: number) => {
    await clientProfile({
      variables: {
        getClientId: event,
      },
    });
    dataSet();
  };

  useEffect(() => {
    //dataSet();
  }, [data]);

  function isValidNumber(number: any) {
    return 1 <= number && number <= 10;
  }

  const dataSet = () => {
    const ClientDetails = data?.GetClient;
    const phonetemp: any[] = [];
    const Addresstemp: any[] = [];
    ClientDetails && setClientData(ClientDetails);
    data?.PhoneTypes.forEach((ele) => {
      const value = ClientDetails?.clientPhones?.find(
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

    data?.AddressTypes.forEach((ele) => {
      const value = ClientDetails?.clientAddress?.find(
        (element) => element.addressTypeId === ele.id
      );
      if (value) {
        Addresstemp.push({
          addressTypeId: ele.id,
          name: ele.description,
          address: value.address,
          city: value.city,
          state: stateArr.find((e) => value.state === e.value)?.value,
          zip: value.zip,
        });
      } else {
        Addresstemp.push({
          addressTypeId: ele.id,
          name: ele.description,
          address: "",
          city: "",
          state: "",
          zip: "",
        });
      }
    });

    setSelectedPhoneType(phonetemp[0]?.phoneTypeId);
    setPhoneArray(phonetemp);
    form.setFieldsValue({
      phone: phonetemp[0]?.phoneNumber,
      prefix: phonetemp[0]?.phoneTypeId,
    });

    setselectedAddressType(Addresstemp[0]?.addressTypeId);
    setAddressArray(Addresstemp);
    form.setFieldsValue({
      Address: Addresstemp[0]?.address,
      city: Addresstemp[0]?.city,
      State: stateArr.find((e) => Addresstemp[0]?.state === e.value)?.value,
      zipCode: Addresstemp[0]?.zip,
      prefixAddress: Addresstemp[0]?.addressTypeId,
    });
  };

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

  // const handleSubmitUpdate = async (event: any) => {
  //   event.preventDefault();
  //   await UpdateclientProfile({
  //     variables: {
  //       updateClientId: Number(params?.clientId),
  //       updateClientInput: {
  //         name: clientData?.name,
  //         email: clientData?.email,
  //         //phoneNumber: clientData?.phoneNumber,
  //         //phoneNumber2: null,
  //         // address: clientData?.address,
  //         // city: clientData?.city,
  //         // state: clientData?.state,
  //         // zip: clientData?.zip,
  //         drivingLicense: clientData?.drivingLicense,
  //         birthdate: clientData?.birthdate,
  //       },
  //     },
  //   })
  //     .then((Data: any) => {
  //       console.log("Data", Data);
  //       setVisible(false);
  //       notify("success", "Update Successfully", "Update Client Profile");
  //     })
  //     .catch((error: any) => {
  //       notify(
  //         "error",
  //         "Error update client profile",
  //         error !== undefined ? error.message : ""
  //       );
  //     });
  // };
  // --validation-----//

  return (
    <>
      <div className="client-profile w-9/12 m-auto mt-32">
        <div className=" align-middle">
          <div className="flex ">
            <div className="flex-1 flex items-center ">
              <Link
                to="/Clientsearch"
                className="border border-solid border-dark-textColor rounded-2xl text-dark-textColor px-4 py-1 float-left font-bold hover:text-dark-textColor common-btn">
                <i className="fas fa-arrow-left"></i> Back
              </Link>
            </div>

            <div className="flex-1 ">
              <h1 className="text-4xl text-center font-bodyCommon">Clients</h1>
            </div>

            <div className="flex-1 "></div>
          </div>
          <div className="bg-white mt-4 pb-4">
            <div className="bg-orange-light p-4 text-base">
              <div className="inline-block align-middle bold mr-8">
                {data?.GetClient ? data.GetClient.name : ""}
              </div>
              <div className="inline-block align-middle font-bold-sm w-7/12">
                {data?.GetClient ? data.GetClient.email : ""}
              </div>
            </div>
            <div className=" text-center grid gap-x-4 grid-cols-2 p-4 ">
              <div className="shadow-cus text-left p-4 relative">
                <h3 className="text-xl font-bold text-dark-textColor mb-4 font-bodyCommon">
                  Patients
                </h3>
                <div className="edit-btn-div text-right fixed bottom-5  md:absolute right-4">
                  <Button
                    className=" common-btn edit-btn bg-dark-textColor  rounded-2xl text-white hover:shadow-none hover:text-white hover:border-gray-300"
                    onClick={AddshowModal}>
                    <span className=" px-2 text-white hover:shadow-none hover:text-white hover:border-gray-300">
                      Add Patient
                    </span>
                  </Button>
                </div>
              </div>

              <div className="shadow-cus text-left p-4">
                <h3 className="text-xl font-bold text-dark-textColor mb-4 font-bodyCommon">
                  Profile
                </h3>
                <div className="">
                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Name
                    </label>
                    <span>{data?.GetClient ? data.GetClient.name : ""}</span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Email
                    </label>
                    <span>{data?.GetClient ? data.GetClient.email : ""}</span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Phone
                    </label>
                    <span>
                      {" "}
                      {
                        data?.GetClient?.clientPhones?.find(
                          (element: any) => element.phoneTypeId === 1
                        )?.phoneNumber
                      }
                      {/* {data?.GetClient?.clientPhones
                        ? data?.GetClient?.clientPhones[0]?.phoneNumber
                        : ""} */}
                    </span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Address
                    </label>
                    <span>
                      {
                        data?.GetClient?.clientAddress?.find(
                          (element: any) => element.addressTypeId === 1
                        )?.address
                      }
                      {", "}
                      {
                        data?.GetClient?.clientAddress?.find(
                          (element: any) => element.addressTypeId === 1
                        )?.city
                      }
                      {", "}
                      {
                        data?.GetClient?.clientAddress?.find(
                          (element: any) => element.addressTypeId === 1
                        )?.state
                      }
                      {", "}
                      {
                        data?.GetClient?.clientAddress?.find(
                          (element: any) => element.addressTypeId === 1
                        )?.zip
                      }
                      {/* {data?.GetClient?.clientAddress
                        ? data?.GetClient?.clientAddress[0]?.address
                        : ""}{" "}
                      {data?.GetClient?.clientAddress
                        ? data?.GetClient?.clientAddress[0]?.city
                        : ""}{" "}
                      {data?.GetClient?.clientAddress
                        ? data?.GetClient?.clientAddress[0]?.state
                        : ""}{" "}
                      {data?.GetClient?.clientAddress
                        ? data?.GetClient?.clientAddress[0]?.zip
                        : ""} */}{" "}
                    </span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Driver's License
                    </label>
                    <span>
                      {data?.GetClient ? data.GetClient.drivingLicense : ""}
                    </span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Birthday
                    </label>
                    <span>
                      {data?.GetClient ? data.GetClient.birthdate : ""}
                    </span>
                  </div>

                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      PIMS ID
                    </label>
                    <span> {data?.GetClient ? data.GetClient.pimsId : ""}</span>
                  </div>
                  <div className="detail-row pl-2 border-b-2 border-solid border-grey-light py-1">
                    <label className="w-4/12 text-dark-textColor font-bold inline-block">
                      Active
                    </label>
                    <span>
                      {" "}
                      {data?.GetClient
                        ? data.GetClient.isActive === true
                          ? "Yes"
                          : "No"
                        : ""}
                    </span>
                  </div>
                </div>

                <div className="edit-btn-div text-right">
                  <Button
                    className="edit-btn bg-dark-textColor text-white rounded-2xl mt-4 common-btn   hover:shadow-none hover:text-white hover:border-gray-300"
                    onClick={showModal}>
                    <span className="common-btn px-2 text-white hover:shadow-none hover:text-white hover:border-gray-300">
                      Edit
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="shadow-cus mx-4 px-4 py-2 pb-12">
              <h3 className="text-xl font-bold text-dark-textColor mb-0 font-bodyCommon">
                Order History
              </h3>
              <div className="w-11/12 mx-auto shadow-cus p-4 my-4 hidden">
                abcd
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        //onOk={form.submit}
        onCancel={handleCancel}
        className="clientprofile-modal"
        width="700px"
        maskClosable={false}
        footer={null}>
        <h6 className="text-dark-textColor text-xl font-bodyCommon font-bold mb-8 pl-12">
          Edit Client Profile
        </h6>
        <Form
          form={form}
          onFinish={handleSubmit}
          //onFinish={handleSubmit}
          labelCol={{ span: 7 }}
          autoComplete="off"
          initialValues={{
            Clientname: data?.GetClient ? data.GetClient.name : "",
            email: data?.GetClient ? data.GetClient.email : "",
            Active: data?.GetClient
              ? data.GetClient.isActive == true
                ? "true"
                : "false"
              : "",
            PIMS: data?.GetClient ? data.GetClient.pimsId : "",
            //phone: data?.GetClient ? data.GetClient.phoneNumber : "",
            // Address: data?.GetClient ? data.GetClient.address : "",
            // city: data?.GetClient ? data.GetClient.city : "",
            // zipCode: data?.GetClient ? data.GetClient.zip : "",
            DrivingLicense: data?.GetClient
              ? data.GetClient.drivingLicense
              : "",
            Birthday: data?.GetClient ? data.GetClient.birthdate : "",
            // State: data?.GetClient
            //   ? stateArr.find((e) => clientData?.state === e.value)
            //   : "",
          }}
          className="text-dark-label">
          <Form.Item
            name="Clientname"
            label="Name:"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            className="mb-2">
            <Input
              name="Clientname"
              value={clientData?.name || ""}
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    name: e.target.value,
                  });
              }}
              placeholder="Client Name"
              type="text"
              className="border-dark-shadow rounded "
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email:"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            className="mb-2">
            <Input
              name="email"
              value={clientData?.email || ""}
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    email: e.target.value,
                  });
              }}
              placeholder="email"
              type="text"
              className="border-dark-shadow rounded "
            />
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
            ]}
            className="mb-2">
            <MaskedInput
              name="phone"
              type="text"
              mask="111 111 1111"
              addonBefore={prefixSelector}
              // onKeyPress={(event) => {
              //   const charCode = event.which ? event.which : event.keyCode;
              //   if (charCode >= 48 && charCode <= 57) {
              //     return true;
              //   } else {
              //     event.preventDefault();
              //     return false;
              //   }
              // }}
              //value={name}
              // onChange={(e) => {
              //   setUserNameState(e.target.value);
              // }}
              //value={clientData?.phoneNumber || ""}
              style={{ width: "100%" }}
              placeholder="Number"
              maxLength={10}
              onChange={(e) => {
                handlePhoneNumberChange(e.target.value);
              }}
              className="border-dark-shadow rounded-tl-none rounded-bl-none edit-phone-input"
              // onChange={(e) => {
              //   clientData &&
              //     setClientData({
              //       ...clientData,
              //       phoneNumber: e.target.value,
              //     });
              // }}
            />
          </Form.Item>

          <Form.Item
            name="Address"
            label="Address:"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            className="mb-0">
            <Input
              name="Address"
              addonBefore={prefixSelectorAddress}
              onChange={(e) => {
                handleAddressChange(e.target.value, "address");
              }}
              value={clientData?.address || ""}
              placeholder="Address"
              type="text"
              className="border-dark-shadow rounded rounded-tl-none rounded-bl-none edit-phone-input"
            />
          </Form.Item>
          <div className="w-71 block ml-auto custom-address mt-2">
            <Form.Item
              name="city"
              label={null}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              className="mb-2 w-2/5 inline-block">
              <Input
                name="city"
                onChange={(e) => {
                  handleAddressChange(e.target.value, "city");
                }}
                value={clientData?.city || ""}
                placeholder="City"
                type="text"
                className=" border-dark-shadow rounded"
              />
            </Form.Item>
            <Form.Item
              name="State"
              label={null}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              className="mb-2 w-2/5 inline-block">
              <Select
                value={
                  stateArr.find((e) => clientData?.state === e.value)?.value
                }
                onChange={(e) => {
                  handleAddressChange(e, "state");
                }}
                options={stateArr}
                className="Address_Select1"></Select>
            </Form.Item>
            <Form.Item
              name="zipCode"
              label={null}
              rules={[
                {
                  pattern: /^[0-9 ]*$/,
                  message: "Invalid",
                },
                {
                  required: true,
                  message: "Invalid",
                },
              ]}
              className="mb-2 w-1/5 inline-block">
              <Input
                name="zipCode"
                onChange={(e) => {
                  handleAddressChange(e.target.value, "zip");
                }}
                onKeyPress={(event) => {
                  const charCode = event.which ? event.which : event.keyCode;
                  if (charCode >= 48 && charCode <= 57) {
                    return true;
                  } else {
                    event.preventDefault();
                    return false;
                  }
                }}
                value={clientData?.zip || ""}
                placeholder="zipCode"
                type="text"
                maxLength={5}
                className="border-dark-shadow rounded "
              />
            </Form.Item>
          </div>

          <Form.Item
            name="DrivingLicense"
            label="Driver's License:"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            className="mb-2">
            <Input
              name="DrivingLicense"
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    drivingLicense: e.target.value,
                  });
              }}
              maxLength={20}
              value={clientData?.drivingLicense || ""}
              placeholder="DrivingLicense"
              type="text"
              className="border-dark-shadow rounded "
            />
          </Form.Item>
          <Form.Item
            name="Birthday"
            label="Birthday:"
            rules={[
              {
                required: true,
                message: "Please provide a valid client Birthday",
              },
            ]}
            className="mb-2">
            <Input
              name="Birthday"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    birthdate: e.target.value,
                  });
              }}
              //max={new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
              // max={new Date().toLocaleDateString()}
              value={clientData?.birthdate || ""}
              placeholder="Birthday"
              type="date"
              className="border-dark-shadow rounded "
            />
          </Form.Item>
          <Form.Item
            name="PIMS"
            label="PIMS ID:"
            rules={[
              {
                required: false,
                message: "Please provide a valid client PIMS",
              },
            ]}
            className="mb-2">
            <Input
              name="PIMS"
              maxLength={20}
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    pimsId: e.target.value,
                  });
              }}
              value={clientData?.pimsId || ""}
              placeholder="PIMS"
              type="text"
              className="border-dark-shadow rounded "
            />
          </Form.Item>
          <Form.Item
            name="Active"
            label="Active:"
            rules={[
              {
                required: false,
                message: "Please provide a valid client Active",
              },
            ]}
            className="mb-2">
            {/* <Input
              name="Active"
              placeholder="Active"
              type="text"
              className="border-dark-shadow rounded "
            /> */}
            <Select
              // value={clientData?.isActive === true ? "true" : "false"}
              value="true"
              className="border-dark-shadow
              rounded border"
              // style={{ width: 120 }}
              //onChange={handleDropdownChange}>
              onChange={(e) => {
                clientData &&
                  setClientData({
                    ...clientData,
                    isActive: e,
                  });
              }}>
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </Form.Item>
          <Form.Item className="flex justify-end w-full text-right m-auto mt-4">
            <Button
              onClick={handleCancel}
              className=" common-btn relative outline-none mt-1 mb-1 px-8  hover:border-solid shadow-none border-none
              h-9 text-blue-dark hover:border-dark-textColor rounded-full mr-3 hover:border hover:text-white capitalize ">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              onSubmit={form.submit}
              className="Login_btn relative border-none
              outline-none mt-1 mb-1 px-9 hover:bg-gray-700 hover:text-white
              h-10 bg-blue-dark rounded-full text-white capitalize">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/*<<<<<----- Add Modal------->>>>>> */}
      <AddModal />
      {/* <<<<<-----Add Modal----End--here------->>>>>> */}
    </>
  );
}
