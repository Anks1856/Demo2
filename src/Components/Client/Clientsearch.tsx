import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Input, Space, Button, Row, Col, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import {
  useGetClientLocationByLocationIdLazyQuery,
  ActiveFilterType,
  useGetClientLocationByLocationIdQuery,
} from "generated/graphql";

//import ReactPaginate from "react-paginate";
//import ReactPaginate from "react-paginate";

export default function ClientSearch() {
  const { Search } = Input;
  const onSearch = (value: any) => console.log(value);

  const [searchKey, setSearchKet] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [clientSearch, setClientSearch] = useState("");
  const [clientActive, setclientActive] = useState(ActiveFilterType.All);

  const [clientSerachFunc, { data, loading, error, refetch }] =
    useGetClientLocationByLocationIdLazyQuery();

  const [customtoggle, setcustomtoggle] = useState("Move");

  const SwitchHandleClick = (event: any) => {
    setclientActive(
      event === true ? ActiveFilterType.Active : ActiveFilterType.All
    );
    // submitClientSearch();
    //setcustomtoggle(customtoggle === "Move" ? "TransformItem" : "Move");
  };

  useEffect(() => {
    if (location.pathname) {
      refetch && refetch();
    }
  }, [location.pathname]);
  // const { data , refetch } = useGetUserQuery({
  //   skip: userID === null,
  //   variables: {
  //     getUserId: userID ? userID.user.id : null,
  //   },
  // });

  useEffect(() => {
    if (clientSearch.length >= 3) {
      clientSerachFunc({
        variables: {
          getClientLocationByLocationIdClientFilter: clientSearch,
          getClientLocationByLocationIdLocationId: -1,
          getClientLocationByLocationIdActiveFilterType: clientActive,
        },
      });
    }
  }, [clientActive, clientSearch, clientSerachFunc]);

  const SerachFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientSearch(event.target.value);
    if (event.target.value.length >= 3) {
      clientSerachFunc({
        variables: {
          getClientLocationByLocationIdClientFilter: clientSearch,
          getClientLocationByLocationIdLocationId: -1,
          getClientLocationByLocationIdActiveFilterType: clientActive,
        },
      });
    }
  };

  const submitClientSearch = () => {
    if (clientSearch.length >= 3) {
      clientSerachFunc({
        variables: {
          getClientLocationByLocationIdClientFilter: clientSearch,
          getClientLocationByLocationIdLocationId: -1,
          getClientLocationByLocationIdActiveFilterType: clientActive,
        },
      });
    }
    // if (clientSearch !== "") {
    //   console.log("CHECK----");
    //   clientSerachFunc({
    //     variables: {
    //       getClientLocationByLocationIdClientFilter: clientSearch,
    //       getClientLocationByLocationIdLocationId: -1,
    //       getClientLocationByLocationIdActiveFilterType: clientActive,
    //     },
    //   });
    // }
  };

  return (
    <>
      <div className="input-wrap mt-32 w-3/4 mx-auto">
        <h1 className="text-center color-primary font-bold my-4 text-3xl">
          Clients
        </h1>
        <div className="items-center mt-10 w-11/12 flex  mx-auto">
          <div className="w-11/12">
            <Search
              placeholder="Search Client"
              onSearch={onSearch}
              className="client_Search rounded-sm border-dark-textColor border"
              enterButton
              onChange={(e) => {
                SerachFilter(e);
              }}
              onKeyPress={(event) => {
                const charCode = event.which ? event.which : event.keyCode;
                if (
                  (charCode > 64 && charCode < 91) ||
                  (charCode > 96 && charCode < 123) ||
                  charCode === 8 ||
                  charCode === 32 ||
                  (charCode >= 48 && charCode <= 57) ||
                  charCode === 13
                ) {
                  return true;
                } else {
                  event.preventDefault();
                  return false;
                }
              }}
            />{" "}
          </div>
          <div className="w-1/12 text-right">
            <Button
              type="default"
              className="common-btn ml-4 py-1 px-4 rounded-3xl bg-dark-textColor hover:shadow-none text-white hover:text-white hover:border-gray-300">
              Add Client
            </Button>{" "}
          </div>
        </div>
        <div className="mt-4 mb-3  w-11/12 text-right mx-auto pt-8">
          <p className="inline-block mr-4 font-primaryFont font-bold">
            Show Only Active
          </p>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            //defaultChecked
            className=""
            onChange={SwitchHandleClick}
          />
          {/* <Col span={24} className="text-right"></Col> */}
        </div>

        {/* {!data?.GetClientLocationByLocationId &&
        clientSearch.length >= 3 &&
        !loading ? (
          <h1>No record found.....</h1>
        ) : (
          ""
        )} */}
        {!data?.GetClientLocationByLocationId || clientSearch.length <= 2 ? (
          <Row>
            <Col span={24}>
              <div className="client-default bg-white text-center my-4  py-12 px-4 border-none rounded shadow-clientbox">
                <label>
                  <i className="fas fa-users text-dark-textColor text-5xl"></i>
                </label>
                <h2 className="my-2 text-3xl text-green-dark font-bold">
                  Find Your Client
                </h2>
                <p className="font-bold mb-4 text-dark-textColor text-base font-primaryFont">
                  Search for a client to see results here or
                </p>
                <Button className="common-btn rounded-2xl py-1 px-4 bg-dark-textColor text-white hover:shadow-none hover:text-white hover:border-gray-300">
                  Add New Client
                </Button>{" "}
                {/* <button className="common-btn">Add New Client</button> */}
              </div>
            </Col>
          </Row>
        ) : (
          data?.GetClientLocationByLocationId?.map((element) => {
            if (clientSearch.length >= 3) {
              return (
                <>
                  <div className="mt-2 mb-2  w-11/12  mx-auto shadow-clientbox font-bodyCommon ">
                    <div
                      className="client-result-header flex cursor-pointer bg-white py-2 px-4"
                      onClick={() => {
                        history.push(`/ClientProfile/${element?.clientId}`);
                      }}>
                      <div className="w-2/6 font-bold color-primary text-base">
                        {element?.client?.name}
                      </div>

                      <div className="w-3/6 font-normal color-primary text-base">
                        <span> {element?.client?.email}</span>

                        <br />

                        {/* <span>{element?.client?.phoneNumber}</span> */}
                      </div>

                      <div className="w-1/6 text-right items-center font-bold text-xl  pr-4">
                        <span>
                          <i className="fas fa-chevron-right color-primary"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            } else {
              return "";
            }
          })
        )}
      </div>
      {/* </div>

  </div> */}

      {/* <section className="Main_Content_Wrapper">
    <div className="Dashboard_Wrapper">
      <div className="Dash-Heading">
        <div className="container"> */}

      {/* </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
