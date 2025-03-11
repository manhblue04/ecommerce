import { Layout } from "antd";
import "./LayoutDefault.css";
import logo from "../../images/logo.png";
import logoFold from "../../images/logo-fold.png";
import { SearchOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MailOutlined, LinkedinOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../components/Notify";
import MenuSider from "../../components/MenuSider";
import { formater } from "../../utils/fomater.js";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;


function LayoutDefault() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="layout-default">
        <div className="header__top">
          <div className="header__top-left">
            <span className="header__top-email">
              <MailOutlined /> hello@gmail.com
            </span>
            <span className="header__top-shipping">Miễn phí hóa đơn từ {formater(200000)}</span>
          </div>
          <div className="header__top-right">
            <div className="header__top-social">
              <FacebookOutlined />
              <InstagramOutlined />
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>
            <span className="header__top-login">Đăng nhập</span>
          </div>
        </div>
        <header className="header">
          <div className={"header__logo " + (collapsed && "header__logo--collapsed")}>
            <img src={collapsed ? logoFold : logo} alt="Logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <div className="header__collapse" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              <Notify />
            </div>
          </div>
        </header>
        <Layout>
          <Sider className="sider" collapsed={collapsed} theme="light">
            <MenuSider />
          </Sider>
          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutDefault;