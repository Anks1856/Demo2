import React, { useState, useEffect } from "react";
import { Tabs, Tab, Modal, Button, Form } from "react-bootstrap";
import Data from "../Data/Data";
import { useParams, Link, useHistory } from "react-router-dom";
import Notification from "../Header/Notification/notification";
import Delegation from "../Header/Delegation/Delegation";
import Profile from "../Header/Profile/profile";
import { useUserDetailQueryQuery } from "generated/graphql";
import { log } from "console";

export default function Userprofile(props: any): JSX.Element {
  const params: { userId?: number | string } = useParams();
  const history = useHistory();
  const [Addshow, setAddShow] = useState(false);
  console.log(props.location, "props.locationprops.location");

  const { data, refetch } = useUserDetailQueryQuery({
    variables: {
      getLocationUserId: Number(params.userId),
    },
  });
  const [editKey, setEditkey] = useState("Profile");
  // const [validatedAdd, setValidated] = useState(false);
  // const [currentTab, setCurrentTab] = useState('tab1');

  const AddClose = () => {
    setAddShow(false);
    refetch({
      getLocationUserId: Number(params.userId),
    });
  };
  const HandleAddShow = (key: string) => {
    setAddShow(true);
    setEditkey(key);
  };

  useEffect(() => {
    // console.log("props", params.userId);
  });

  return (
    <>
      {data ? (
        <section className="Main_Content_Wrapper">
          <div className="Dashboard_Wrapper">
            <div className="Dash-Heading">
              <div className="mainsection">
                <div className="usersection profilesection">
                  <Link to="/usermanagement" className="backbtn">
                    <i className="fas fa-arrow-left"></i> Back
                  </Link>
                  <h1>User Management</h1>
                  <div className="user-inner-wrapper">
                    <div>
                      <div className="user-accodion-header custom-accordion-header">
                        <ul className="User_Unorder">
                          <li className="bold">
                            {data.GetLocationUser?.user?.name}
                          </li>
                          <li>{data.GetLocationUser?.user?.email}</li>
                          <li>{data.GetLocationUser?.location?.name}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="user-accordion-details">
                      <div className="top-row">
                        <div className="user-card">
                          <h3>Profile</h3>
                          <figure className="img-div">
                            <img src={Data.profile1} alt="progile" />
                          </figure>
                          <div className="detail-row">
                            <label>Name</label>
                            <span>{data.GetLocationUser?.displayName}</span>
                          </div>

                          <div className="detail-row">
                            <label>Title</label>
                            <span>{data.GetLocationUser?.title}</span>
                          </div>

                          <div className="detail-row">
                            <label>Email</label>
                            <span>{data.GetLocationUser?.email}</span>
                          </div>

                          <div className="detail-row">
                            <label>Phone</label>
                          </div>

                          <div className="detail-row">
                            <label>Role</label>
                            <span>{data.GetLocationUser?.role?.name}</span>
                          </div>

                          <div className="detail-row">
                            <label>Vet License</label>
                            <span>
                              {data.GetLocationUser?.vetLicenseNumber} -{" "}
                              {data.GetLocationUser?.vetLicenseExpiration?.replaceAll(
                                "-",
                                "/"
                              )}{" "}
                              - {data.GetLocationUser?.vetLicenseState}
                            </span>
                          </div>

                          <div className="detail-row">
                            <label>DEA License</label>
                            <span>
                              {data.GetLocationUser?.deaLicense} -{" "}
                              {data.GetLocationUser?.deaLicenseExpiration?.replaceAll(
                                "-",
                                "/"
                              )}
                            </span>
                          </div>

                          <div className="edit-btn-div">
                            <Button
                              className="edit-btn"
                              onClick={() => {
                                HandleAddShow("Profile");
                              }}>
                              Edit
                            </Button>
                          </div>
                        </div>

                        <div className="user-card">
                          <h3>Notifications</h3>
                          <div className="notification-sec">
                            <Form>
                              <Form.Group
                                className="check1"
                                controlId="formBasicCheckbox">
                                <Form.Check
                                  type="checkbox"
                                  label="pending auth"
                                  checked={
                                    data.GetLocationUser?.isPendingAuth === null
                                      ? true
                                      : data.GetLocationUser?.isPendingAuth
                                  }
                                />
                              </Form.Group>
                            </Form>
                            <div className="notification-row">
                              <label>Email Address</label>
                              <span>
                                {data.GetLocationUser?.notificationEmail}{" "}
                              </span>
                            </div>
                          </div>

                          <div className="edit-btn-div">
                            <Button
                              className="edit-btn"
                              onClick={() => {
                                HandleAddShow("Notification");
                              }}>
                              Edit
                            </Button>
                          </div>
                        </div>
                        <div className="user-card">
                          <h3>Delegate Users</h3>

                          <ul>
                            {data.GetLocationUser?.delegatedUsers?.map(
                              (element: any) => {
                                return (
                                  <li>
                                    {element.delegatedLocationsUsers.user.name}{" "}
                                    -{" "}
                                    {element.delegatedLocationsUsers.role.name}
                                  </li>
                                );
                              }
                            )}
                          </ul>

                          <div className="edit-btn-div">
                            <Button
                              className="edit-btn"
                              onClick={() => {
                                HandleAddShow("Delegations");
                              }}>
                              Edit
                            </Button>
                          </div>
                        </div>
                        <div className="user-card">
                          <h3>Delegation Permission</h3>
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading</h1>
      )}
      <Modal
        show={Addshow}
        onHide={AddClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="Account_modal Commn_Modal">
        <Modal.Header>
          <Modal.Title>User management </Modal.Title>
          <div className="Close-Btn" onClick={AddClose}>
            <i className="fas fa-times"></i>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="Tab_Wrapper">
            <Tabs defaultActiveKey={editKey} id="controlled-tab-example">
              <Tab eventKey="Profile" title="Profile" className="tab1 tab-cmn">
                <Profile
                  locationUserId={Number(params.userId)}
                  clickMe={AddClose}
                />
              </Tab>
              <Tab
                eventKey="Notification"
                title="Notification"
                className="tab2 tab-cmn">
                <Notification
                  locationUserId={Number(params.userId)}
                  clickMe={AddClose}
                />
              </Tab>
              <Tab
                eventKey="Delegations"
                title="Delegations"
                className="tab3 tab-cmn">
                <Delegation
                  locationUserId={Number(params.userId)}
                  clickMe={AddClose}
                />
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
