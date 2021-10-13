import { Layout, Menu, Breadcrumb, Divider, Button } from "antd";
import {
  HomeOutlined,
  SnippetsFilled,
  CheckCircleFilled,
  RedoOutlined,
  LinkOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  HistoryOutlined,
  UsergroupAddOutlined,
  BarChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { on } from "stream";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Header from "./Header/Header";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DesktopOutlined from "@ant-design/icons/lib/icons/DesktopOutlined";
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined";
import PieChartOutlined from "@ant-design/icons/lib/icons/PieChartOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import Dashboard from "./Dashboard/Dashboard";
// import Demo from "./Demo/Demo";
import Create from "./Create/Create";
import { Login } from "./Login/Login";
import Approve from "./Approve/Approve";
// import ClientResults from "./Client/ClientResults";
import ClientProfile from "./Client/ClientProfile";
import ClientSearch from "./Client/Clientsearch";
import { getAuthToken } from "util/utilities";
import AuthRoute from "../route/authRoute";
import DashboardRoute from "../route/dashboardRoute";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Home(this: boolean) {
  const location: any = useLocation();
  const [collapsed, setonCollapse] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const ontoggle = () => {
    setonCollapse(!collapsed);
  };

  useEffect(() => {
    if (
      location.pathname === "/Login" ||
      location.pathname === "/user" ||
      location.pathname === "/add-user" ||
      location.pathname === "/ForgotPassword" ||
      location.pathname === "/" ||
      location.pathname.includes("/ResetPassword")
    ) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [location]);

  return (
    <>
      <div id="header_sidemenu">
        <AuthRoute />
        {isAuth ? (
          <Layout
            style={{ minHeight: "100vh" }}
            className="Sidebar_layout border-none">
            <Sider
              collapsible
              collapsed={collapsed}
              // onCollapse={ontoggle}
              className="Sidebar bg-dark-shadow "
              trigger={null}
              // breakpoint="lg"
              // collapsedWidth="0"
              // onBreakpoint={(broken) => {
              //   console.log(broken);
              // }}
              // onCollapse={(collapsed, type) => {
              //   console.log(collapsed, type);
              // }}
            >
              <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                className="bg-dark-shadow h-screen top-0 sticky">
                <div
                  onClick={ontoggle}
                  typeof="button"
                  className="menu-button bg-transparent text-left mx-auto ml-5 mt-2 border-none hover:bg-transparent text-2xl cursor-pointer p-1
                   ">
                  <MenuOutlined className="text-white font-semibold" />
                </div>
                <Divider className="mt-2 mb-3 border-none" />
                <Menu.Item
                  key="1"
                  icon={<i className="fas fa-home"></i>}
                  className="text-white font-bodyCommon">
                  <Link
                    to="/Dashboard"
                    className="font-medium text-white font-bodyCommon">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<i className="fas fa-file-prescription "></i>}
                  className="text-white">
                  <Link to="/Create" className="font-medium text-white">
                    Create
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<CheckCircleFilled />}
                  className="text-white">
                  <Link to="/Approve" className="font-medium text-white">
                    Approve
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={<i className="fas fa-sync"></i>}
                  className="text-white">
                  <Link to="/Renew" className="font-medium text-white">
                    Renew
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="5"
                  icon={<i className="fas fa-link"></i>}
                  className="text-white">
                  <Link to="/Link" className="font-medium text-white">
                    Link
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="6"
                  icon={<i className="fas fa-users"></i>}
                  className="text-white">
                  <Link to="/ClientSearch" className="font-medium text-white">
                    Clients
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<i className="fas fa-history"></i>}
                  title="History"
                  className="border-gray-600 text-white bg-dark-shadow">
                  <Menu.Item key="7">
                    <Link to="#" className="font-medium text-white">
                      History1
                    </Link>{" "}
                  </Menu.Item>
                  <Menu.Item key="8">
                    {" "}
                    <Link to="#" className="font-medium text-white">
                      History2
                    </Link>{" "}
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to="#" className="font-medium text-white">
                      History3
                    </Link>{" "}
                  </Menu.Item>
                </SubMenu>
                <Menu.Item
                  key="10"
                  icon={<i className="fas fa-chart-bar"></i>}
                  className="text-white">
                  <Link to="/Clients" className="font-medium text-white">
                    Reports
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub2"
                  icon={<i className="fas fa-cog"></i>}
                  title="Settings"
                  className="border-gray-600 text-white font-medium bg-dark-shadow">
                  <Menu.Item key="11">
                    <Link
                      to="/PracticeSearch"
                      className="font-medium text-white">
                      Practice Setup
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <Link to="#" className="font-medium text-white">
                      Settings 2
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header />
              <Content style={{ margin: "0 16px" }}>
                <DashboardRoute />
              </Content>
            </Layout>
          </Layout>
        ) : null}
      </div>
    </>
  );
}

interface PrivateRouteProps {
  component: React.FC;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = getAuthToken();
  return (
    <Route
      {...rest}
      render={() =>
        token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
            }}
          />
        )
      }
    />
  );
};

const AlreadyLoggedInRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = getAuthToken();
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <Redirect
            to={{
              pathname: "/Dashboard",
            }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
};
