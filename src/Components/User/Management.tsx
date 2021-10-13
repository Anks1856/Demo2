import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useQueryLazyQuery } from "generated/graphql";

export default function Management() {
  const history = useHistory();
  const [tags, setTags] = React.useState(["example tag"]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [SerachKey, setPasswordState] = useState("");
  const [userSearch, setUserSearch] = useState("");
  //const { data } = useQueryQuery();

  const [UserFunc, { data, loading, error }] = useQueryLazyQuery();

  const [customtoggle, setcustomtoggle] = useState("Move");

  const newhandleclick = () => {
    setcustomtoggle(customtoggle === "Move" ? "TransformItem" : "Move");
  };

  useEffect(() => {
    UserFunc({
      variables: {
        locationsUsersUserFilter: SerachKey,
      },
    });
    // getlogin();
  }, []);

  // const SerachFilter = async (event:any) => {
  const SerachFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(event.target.value);
    UserFunc({
      variables: {
        locationsUsersUserFilter: event.target.value,
      },
    });
  };

  const submitUserSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userSearch !== "") {
      console.log("CHECK----");
      UserFunc({
        variables: {
          locationsUsersUserFilter: userSearch,
        },
      });
    }
  };

  const [selected, setSelected] = useState([]);

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];

  return (
    <>
      <section className="Main_Content_Wrapper">
        <div className="Dashboard_Wrapper">
          <div className="Dash-Heading">
            <div className="mainsection">
              <div className="usersection">
                <h1>User Management</h1>
                <div className="input-section">
                  <form onSubmit={(e) => submitUserSearch(e)}>
                    <input
                      name="search"
                      value={userSearch}
                      onKeyPress={(event) => {
                        const charCode = event.which
                          ? event.which
                          : event.keyCode;
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
                      onChange={(e) => {
                        SerachFilter(e);
                      }}
                      type="search"
                    />
                  </form>
                  <span className="search-btn">
                    {" "}
                    <i className="fas fa-search"></i>
                  </span>
                  <button className="user-btn">Add User</button>
                </div>

                <div className="filter-section">
                  <ul>
                    <li>
                      {" "}
                      <i className="fas fa-sliders-h"></i>
                    </li>
                    <li>
                      Location <i className="fas fa-sort-down"></i>
                    </li>

                    {/* <li>Role <i className="fas fa-sort-down"></i></li>
                                    <li>Permission</li> */}
                  </ul>
                </div>
                {/* 
                <div className="filter-result-sestion">
                  <label className="result">
                    ABC Animal Hospital <i className="fas fa-times"></i>
                  </label>
                  <ReactTagInput
                    tags={tags}
                    placeholder="Organisation"
                    onChange={(newTags) => setTags(newTags)}
                  />
                </div> */}

                <div className="result-section">
                  <div className="active-inactive form-check form-switch">
                    <label>Show Only Active</label>
                    {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input> */}
                    <div
                      className={`custom-toggle-button ${customtoggle}`}
                      onClick={newhandleclick}>
                      <i className="fas fa-check"></i>
                      <i className="fas fa-circle"></i>
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                </div>

                {/* Accordion */}
                {data?.LocationsUsers.length === 0 ? (
                  <h6>No users yet</h6>
                ) : (
                  data?.LocationsUsers.map((element: any) => {
                    return (
                      <>
                        <div
                          key={element.id}
                          className="custom-user-list"
                          onClick={() => {
                            history.push(`/userprofile/${element.id}`);
                          }}>
                          <div className="user-accodion-header custom-accordion-header">
                            <ul>
                              <li>{element.user.name}</li>
                              <li>{element.location?.name}</li>
                              <li>{element.user.email}</li>
                              <li>
                                <i className="fas fa-user-md"></i>
                              </li>
                              <li>
                                <i className="fas fa-user-shield"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
                <div className="text-right mt-4">
                  <button className="common-btn">Add User</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </>
  );
}
