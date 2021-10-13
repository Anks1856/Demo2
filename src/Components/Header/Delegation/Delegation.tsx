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
import Data from "Components/Data/Data";
import {
  useAddDelegatedUserMutationMutation,
  useRemoveDelegatedUserMutationMutation,
  useUserDetailQueryQuery,
} from "generated/graphql";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";

export default function Delegation(props: any): JSX.Element {
  const [form] = Form.useForm();
  const { data, refetch } = useUserDetailQueryQuery({
    variables: {
      getLocationUserId: props.locationUserId,
    },
  });
  const [addDelegatedUserMutation] = useAddDelegatedUserMutationMutation();
  const [removeDelegatedUserMutation] =
    useRemoveDelegatedUserMutationMutation();
  const [delegatesArray, setDelegatesArray] = useState<any[]>([]);
  const [nonDelegatesArray, setNonDelegatesArray] = useState<any[]>([]);
  const [isAllDelegates, setIsAllDelegates] = useState(false);
  const [isAllNonDelegates, setIsAllNonDelegates] = useState(false);

  useEffect(() => {
    console.log("props", data);
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

  const handleCancel = () => {
    console.log("cancel handle");
    refetch({
      getLocationUserId: props.locationUserId,
    });
    handleSetData();
  };
  const handleSetData = () => {
    const delegate: any[] = [];
    const nonDelegate: any[] = [];
    data?.GetLocationUser?.nonDelegatedLocationUsers?.forEach((element) => {
      nonDelegate.push({
        id: element?.id,
        ischecked: false,
        user: element?.user?.name,
        role: element?.role?.name,
        key: "nonDelegated",
      });
    });
    setNonDelegatesArray(nonDelegate);
    data?.GetLocationUser?.delegatedUsers?.forEach((element) => {
      delegate.push({
        id: element?.delegatedLocationsUsers?.id,
        inputId: element?.id,
        ischecked: false,
        user: element?.delegatedLocationsUsers?.user?.name,
        role: element?.delegatedLocationsUsers?.role?.name,
        key: "delegated",
      });
    });
    setDelegatesArray(delegate);
  };

  const AddDelegates = () => {
    console.log("AddDelegates");
    let nonDelegateTemp: any[] = nonDelegatesArray;
    let delegateTemp: any[] = delegatesArray;
    nonDelegatesArray.forEach((element: any) => {
      if (element.ischecked) {
        element.ischecked = false;
        delegateTemp.push(element);
        nonDelegateTemp = nonDelegateTemp.filter(
          (ele) => ele.id !== element.id
        );
      }
    });
    nonDelegateTemp = nonDelegateTemp.map((nonDelegate) => {
      nonDelegate.ischecked = false;
      return nonDelegate;
    });
    delegateTemp = delegateTemp.map((delegate) => {
      delegate.ischecked = false;
      return delegate;
    });
    setDelegatesArray(delegateTemp);
    setNonDelegatesArray(nonDelegateTemp);
    remove_all_check();
  };

  const RemoveDelegates = () => {
    console.log("remove delegate");
    let nonDelegateTemp: any[] = nonDelegatesArray;
    let delegateTemp: any[] = delegatesArray;
    delegatesArray.forEach((element: any) => {
      console.log(element);
      if (element.ischecked) {
        element.ischecked = false;
        nonDelegateTemp.push(element);
        delegateTemp = delegateTemp.filter((ele) => ele.id !== element.id);
      }
    });
    nonDelegateTemp = nonDelegateTemp.map((nonDelegate) => {
      nonDelegate.ischecked = false;
      return nonDelegate;
    });
    delegateTemp = delegateTemp.map((delegate) => {
      delegate.ischecked = false;
      return delegate;
    });
    setDelegatesArray(delegateTemp);
    setNonDelegatesArray(nonDelegateTemp);
    remove_all_check();
  };

  const remove_all_check = () => {
    setIsAllNonDelegates(false);
    setIsAllDelegates(false);
    form.resetFields();
  };

  const handleDelegates = (id: number) => {
    console.log("delegatesArray:::", delegatesArray);
    const objIndex = delegatesArray.findIndex((obj) => obj.id === id);
    console.log("id", id, objIndex);
    delegatesArray[objIndex].ischecked = !delegatesArray[objIndex].ischecked;
    setDelegatesArray(delegatesArray);
  };

  const handleSave = () => {
    const nonDelegateTemp: any[] = [];
    const delegateTemp: any[] = [];
    delegatesArray.forEach((ele) => {
      if (ele.key === "nonDelegated") {
        delegateTemp.push({
          locationUserId: props.locationUserId,
          delegatedLocationUserId: ele.id,
        });
      }
    });
    nonDelegatesArray.forEach((ele) => {
      if (ele.key === "delegated") {
        nonDelegateTemp.push(ele.inputId);
      }
    });
    console.log(
      "nonDelegateTemp::",
      nonDelegateTemp,
      "delegateTemp:",
      delegateTemp
    );
    if (nonDelegateTemp.length > 0 && delegateTemp.length > 0) {
      removeDelegatedUserMutation({
        variables: {
          deleteDelegatedUserIds: nonDelegateTemp,
        },
      })
        .then((result: any) => {
          addDelegatedUserMutation({
            variables: {
              addDelegatedUserInput: delegateTemp,
            },
          })
            .then((result: any) => {
              notify(
                "success",
                "Update Successfully",
                "Data saved successfully."
              );
              handleCancel();
              // props.clickMe();
            })
            .catch((err: any) => {
              notify(
                "error",
                err.message,
                err !== undefined ? err.message : ""
              );
            });
        })
        .catch((err: any) => {
          notify("error", err.message, err !== undefined ? err.message : "");
        });
    } else if (nonDelegateTemp.length > 0) {
      removeDelegatedUserMutation({
        variables: {
          deleteDelegatedUserIds: nonDelegateTemp,
        },
      })
        .then((result: any) => {
          notify("success", "Update Successfully", "Data saved successfully.");
          handleCancel();
          // props.clickMe();
        })
        .catch((err: any) => {
          notify("error", err.message, err !== undefined ? err.message : "");
        });
    } else if (delegateTemp.length > 0) {
      addDelegatedUserMutation({
        variables: {
          addDelegatedUserInput: delegateTemp,
        },
      })
        .then((result: any) => {
          notify("success", "Update Successfully", "Data saved successfully.");
          handleCancel();
          // props.clickMe();
        })
        .catch((err: any) => {
          notify("error", err.message, err !== undefined ? err.message : "");
        });
    } else {
      notify("success", "Update Successfully", "Data saved successfully.");
      // props.clickMe();
    }
    // props.clickMe();
  };

  return (
    <>
      <div className="Profile_Wrapper Delegation_Wrapper">
        <Form form={form}>
          <Row className="flex justify-between">
            <Col
              className="rounded-lg  py-1 border border-solid border-dark-shadow"
              span={11}>
              <div className="header py-2 px-2 flex justify-between border-b border-solid border-gray-300 pb-1">
                <div className="left_header flex">
                  <Form.Item
                    name="ndall"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox
                      type="checkbox"
                      id="checkbox"
                      onClick={() => {
                        const temp: React.SetStateAction<any[]> = [];
                        nonDelegatesArray.map((nonDelegate, index) => {
                          form.setFieldsValue({
                            ["nd" + index]: !isAllNonDelegates,
                          });
                          temp.push({
                            ...nonDelegate,
                            ischecked: !isAllNonDelegates,
                          });
                          // return {
                          //   ...nonDelegate,
                          //   ischecked: !isAllNonDelegates,
                          // };
                        });
                        setNonDelegatesArray(temp);
                        setIsAllNonDelegates(!isAllNonDelegates);
                      }}></Checkbox>
                  </Form.Item>
                  <div className="flex items-center ml-1">
                    <select className="outline-none border-none">
                      <option value="1">{nonDelegatesArray.length}</option>
                    </select>
                    <p className="m-0">items</p>
                  </div>
                </div>
                <div className="right-item text-right">
                  <h5 className="font-bold capitalize text-sm text-right">
                    Non-Delegates
                  </h5>
                </div>
              </div>
              <ul className="delegate_Content px-2">
                {nonDelegatesArray.map((element: any, index: number) => {
                  return (
                    element && (
                      <li className="flex gap-1 items-center">
                        <Form.Item
                          name={["nd" + index]}
                          valuePropName="checked"
                          className="m-0 h-auto">
                          <Checkbox
                            type="checkbox"
                            id="checkbox"
                            value={element.ischecked}
                            onChange={() => {
                              let temp = nonDelegatesArray;
                              temp = temp.map((nonDelegate) => {
                                if (nonDelegate.id === element.id) {
                                  return {
                                    ...nonDelegate,
                                    ischecked: !nonDelegate.ischecked,
                                  };
                                } else {
                                  return nonDelegate;
                                }
                              });
                              setNonDelegatesArray(temp);
                            }}></Checkbox>
                        </Form.Item>
                        <h6 className="text-sm capitalize font-semibold ml-3">
                          {element.user} - {element.role}
                        </h6>
                      </li>
                      // <Form.Group className="delegate_item1">
                      //   <Form.Check
                      //     type="checkbox"
                      //     id={element?.id}
                      //     checked={element?.ischecked}
                      // onChange={() => {
                      //   let temp = nonDelegatesArray;
                      //   temp = temp.map((nonDelegate) => {
                      //     if (nonDelegate.id === element.id) {
                      //       return {
                      //         ...nonDelegate,
                      //         ischecked: !nonDelegate.ischecked,
                      //       };
                      //     } else {
                      //       return nonDelegate;
                      //     }
                      //   });
                      //   setNonDelegatesArray(temp);
                      // }}
                      //   />
                      //   <Form.Label>
                      //     {element.user} - {element.role}
                      //   </Form.Label>
                      // </Form.Group>
                    )
                  );
                })}
                {/* <li className="flex gap-1 items-center">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox type="checkbox" id="checkbox"></Checkbox>
                  </Form.Item>
                  <h6 className="text-sm capitalize font-semibold ml-3">
                    Val jones
                  </h6>
                </li>
                <li className="flex gap-1 items-center">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox type="checkbox" id="checkbox"></Checkbox>
                  </Form.Item>
                  <h6 className="text-sm capitalize font-semibold ml-3">
                    Bob jones
                  </h6>
                </li> */}
              </ul>
            </Col>
            <Col
              className="text-center flex items-center justify-center"
              span={2}>
              <div className="">
                <div
                  className="w-7 h-7 rounded-sm border border-solid border-dark-shadow text-center mx-auto mb-2
               bg-gray-100 hover:bg-gray-500 transition-all hover:transition-all cursor-pointer"
                  onClick={() => AddDelegates()}>
                  <RightOutlined />
                </div>
                <div
                  className="w-7 h-7 rounded-sm border border-solid border-dark-shadow text-center  mx-auto
              bg-gray-100 hover:bg-gray-500 transition-all hover:transition-all cursor-pointer"
                  onClick={() => RemoveDelegates()}>
                  <LeftOutlined />
                </div>
              </div>
            </Col>
            <Col
              className="rounded-lg py-1 border border-solid border-dark-shadow"
              span={11}>
              <div className="header py-2 px-2 flex justify-between border-b border-solid border-gray-300 pb-1">
                <div className="left_header flex">
                  <Form.Item
                    name="dall"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox
                      type="checkbox"
                      id="checkbox"
                      onClick={() => {
                        const temp: React.SetStateAction<any[]> = [];
                        delegatesArray.map((delegate, index) => {
                          form.setFieldsValue({
                            ["d" + index]: !isAllDelegates,
                          });
                          temp.push({
                            ...delegate,
                            ischecked: !isAllDelegates,
                          });
                          // return {
                          //   ...delegate,
                          //   ischecked: !isAllDelegates,
                          // };
                        });
                        setDelegatesArray(temp);
                        setIsAllDelegates(!isAllDelegates);
                      }}></Checkbox>
                  </Form.Item>
                  <div className="flex items-center ml-1">
                    <select className="outline-none border-none">
                      <option value="1">{delegatesArray.length}</option>
                    </select>
                    <p className="m-0">items</p>
                  </div>
                </div>
                <div className="right-item text-right">
                  <h5 className="font-bold capitalize text-sm text-right">
                    Delegates
                  </h5>
                </div>
              </div>
              <ul className="delegate_Content px-2">
                {delegatesArray.map((element: any, index: number) => {
                  return (
                    <li className="flex gap-1 items-center">
                      <Form.Item
                        name={["d" + index]}
                        valuePropName="checked"
                        className="m-0 h-auto">
                        <Checkbox
                          type="checkbox"
                          id="checkbox"
                          value={element.ischecked}
                          onChange={() => {
                            let temp = delegatesArray;
                            temp = temp.map((delegate) => {
                              if (delegate.id === element.id) {
                                return {
                                  ...delegate,
                                  ischecked: !delegate.ischecked,
                                };
                              } else {
                                return delegate;
                              }
                            });
                            setDelegatesArray(temp);
                          }}></Checkbox>
                      </Form.Item>
                      <h6 className="text-sm capitalize font-semibold ml-3">
                        {element.user} - {element.role}
                      </h6>
                    </li>
                  );
                })}
                {/* <li className="flex gap-1 items-center">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox type="checkbox" id="checkbox"></Checkbox>
                  </Form.Item>
                  <h6 className="text-sm capitalize font-semibold ml-3">
                    Bob jones
                  </h6>
                </li> */}
                {/* <li className="flex gap-1 items-center">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="m-0 h-auto">
                    <Checkbox type="checkbox" id="checkbox"></Checkbox>
                  </Form.Item>
                  <h6 className="text-sm capitalize font-semibold ml-3">
                    Val jones
                  </h6>
                </li> */}
              </ul>
            </Col>
          </Row>
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
              onClick={() => {
                handleSave();
              }}
              htmlType="submit"
              className="common-btn Login_btn relative  border-none outline-none mt-1 mb-1 px-9 hover:bg-gray-700 
                    hover:text-white h-10  bg-blue-dark rounded-full text-white capitalize">
              save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
