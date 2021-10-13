import React, { useState } from "react";
import Close from "../Close";
// import logo from '..//../images/logo.png';
import Collapse from "react-bootstrap/Collapse";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [toggleState, setToggleState] = useState("off");
  const [toggleState2, setToggleSetting] = useState("off");

  const [openSetting, setOpenSetting] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === "off" ? "Rotate" : "off");
  };

  const toggle2 = () => {
    setToggleSetting(toggleState2 === "off" ? "Rotate" : "off");
  };

  return (
    <>
      <section className="SideBar_Wrapper">
        <aside>
          <div className="logo-wrp">
            <Link to="#" className="logo">
              <Close />
            </Link>
          </div>
          <div className="Side-Items">
            <ul className="item-unorder">
              <li className="item1 item-cmn01" title="Home">
                <NavLink to="./Dashboard" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-home"></i>
                    </span>
                    <h3 className="item-text">Home</h3>
                  </div>
                </NavLink>
              </li>
              <li className="item2 item-cmn01" title="Create">
                <NavLink to="./Create" title="Create" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-file-prescription"></i>
                    </span>
                    <h3> Create </h3>
                  </div>
                </NavLink>
              </li>
              <li className="item3 item-cmn01" title="Approve">
                <NavLink to="./Approve" title="Approve" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <h3> Approve </h3>
                  </div>
                </NavLink>
              </li>
              <li className="item4 item-cmn01" title="Renew">
                <NavLink to="/renew" title="Renew" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-sync"></i>
                    </span>
                    <h3> Renew </h3>
                  </div>
                </NavLink>
              </li>
              <li className="item5 item-cmn01" title="Link">
                <NavLink to="/link" title="Link" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-link"></i>
                    </span>
                    <h3> Link </h3>
                  </div>
                </NavLink>
              </li>
              <li className="item6 item-cmn01" title="Client">
                <NavLink to="/Client" title="Client" className="item-anchor">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <h3> Client </h3>
                  </div>
                </NavLink>
              </li>
              <li className="item7 item-cmn01" title="History">
                <div
                  className={`ToggleHeading ${toggleState}`}
                  onClick={toggle}>
                  <a
                    href="#"
                    className="item-anchor-wrp"
                    onClick={() => setOpen(!open)}
                    aria-controls="Arcodian-Wrapper1"
                    aria-expanded={open}>
                    <div className="dash-item">
                      <span className="fab-icon">
                        <i className="fas fa-history"></i>
                      </span>
                      <h3 className="item-text">History</h3>
                      <span className="fab-icon-arrow">
                        <i className="fas fa-sort-down"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <Collapse in={open}>
                  <div id="Arcodian-Wrapper1" className="Arcodian-Wrapper">
                    <li className="Arcodian-item1">
                      <NavLink
                        to="/History1"
                        title="History1"
                        className="item-anchor">
                        <div className="dash-item">
                          <span className="fab-icon">
                            <i className="fab fa-hacker-news-square"></i>
                          </span>
                          <h3>History1 </h3>
                        </div>
                      </NavLink>
                    </li>
                    <li className="Arcodian-item2">
                      <NavLink
                        to="/History2"
                        title="History2"
                        className="item-anchor">
                        <div className="dash-item">
                          <span className="fab-icon">
                            <i className="fab fa-hacker-news-square"></i>
                          </span>
                          <h3> History2 </h3>
                        </div>
                      </NavLink>
                    </li>
                  </div>
                </Collapse>
              </li>

              <li className="item8 item-cmn01">
                <NavLink to="/report" className="item-anchor" title="Report">
                  <div className="dash-item">
                    <span className="fab-icon">
                      <i className="fas fa-chart-bar"></i>
                    </span>
                    <h3 className="item-text">Report</h3>
                  </div>
                </NavLink>
              </li>

              <li className="item9 item-cmn01" title="Settings">
                <div
                  className={`ToggleHeading ${toggleState2}`}
                  onClick={toggle2}>
                  <a
                    href="#"
                    className="item-anchor-wrp"
                    onClick={() => setOpenSetting(!openSetting)}
                    aria-controls="Arcodian-Wrapper2"
                    aria-expanded={openSetting}>
                    <div className="dash-item">
                      <span className="fab-icon">
                        <i className="fas fa-cog"></i>
                      </span>
                      <h3 className="item-text">Settings</h3>
                      <span className="fab-icon-arrow">
                        <i className="fas fa-sort-down"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <Collapse in={openSetting}>
                  <div id="Arcodian-Wrapper2" className="Arcodian-Wrapper">
                    <li className="Arcodian-item1">
                      <NavLink
                        to="/usermanagement"
                        title="Create User"
                        className="item-anchor">
                        <div className="dash-item">
                          <span className="fab-icon">
                            <i className="far fa-user"></i>
                          </span>
                          <h3> Create User </h3>
                        </div>
                      </NavLink>
                    </li>
                    <li className="Arcodian-item2">
                      <NavLink
                        to="/Delegate"
                        title="Delegate User"
                        className="item-anchor">
                        <div className="dash-item">
                          <span className="fab-icon">
                            <i className="fas fa-user-minus"></i>
                          </span>
                          <h3> Delegate User </h3>
                        </div>
                      </NavLink>
                    </li>
                  </div>
                </Collapse>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
