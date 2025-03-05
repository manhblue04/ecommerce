import { memo, useState } from "react"
import { Layout } from "antd";
import logo from "../../../../assets/users/images/logo.png";
import logoFold from "../../../../assets/users/images/logo-fold.png";
import {SearchOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import "./MasterLayout.css";
import MenuSider from "../../../../components/MenuSider";

const { Footer, Sider, Content } = Layout;



function MasterLayout({ children, ...props }) {
    const[collapsed, setCollaped] = useState(false);

    return (
        <div {...props}>
            <Layout className="master-layout">
                <header className="header">
                    <div className={"header__logo " + (collapsed && "header__logo--collapsed")}>
                        <img src={collapsed ? logoFold : logo} alt="Logo" />
                    </div >
                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse" onClick={() => setCollaped(!collapsed)}>
                            <MenuUnfoldOutlined/>
                            </div>
                            <div className="header__search">
                            <SearchOutlined />
                            </div>
                        </div>
                        <div className="header__nav-right">
                            noi dung
                        </div>
                    </div>
                </header>
                <Layout>
                    <Sider className="sider" collapsed={collapsed} theme="light">
                        <MenuSider/>
                    </Sider>
                    <Content className="content">
                        {children}
                    </Content>
                </Layout>
                <Footer className="footer">
                    aaaaaaa
                </Footer>
            </Layout>

        </div>
    )
}
export default memo(MasterLayout);