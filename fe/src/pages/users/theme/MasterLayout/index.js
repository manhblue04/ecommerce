import { memo } from "react"
import { Layout } from "antd";
import logo from "../../../../assets/users/images/logo.png";
const { Footer, Sider, Content } = Layout;


function MasterLayout({ children, ...props }) {
    return (
        <div {...props}>
            <Layout className="master-layout">
                <header className="header">
                    <div className="header__logo">
                        <img src={logo} alt="Logo" />
                    </div >
                    <div className="header__nav">
                        <div className="header__nav-left">

                        </div>
                        <div className="header__nav-left">

                        </div>
                    </div>
                </header>
                <Layout>
                    <Sider>
                        Sider
                    </Sider>
                    <Content>
                        {children}
                    </Content>
                </Layout>
                <Footer>
                    aaaaaaa
                </Footer>
            </Layout>

        </div>
    )
}
export default memo(MasterLayout);