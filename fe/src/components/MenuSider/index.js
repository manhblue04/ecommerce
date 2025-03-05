import { Menu } from "antd";
import { ManOutlined, WomanOutlined, SkinOutlined } from "@ant-design/icons";
function MenuSider() {
  const items = [
    {
      label: "Menu 1",
      icon: <ManOutlined />,
      key: "Menu-1",
      children: [
        {
          label: "Menu 1-1",
          key: "Menu-1-1"

          // label: <Link to="/hoodi">Ao hoodi</Link>,
          // key: "/hoodi"
        }, 
        {
          label: "Menu 1-2",
          key: "Menu-1-2"
        }, 
        {
          label: "Menu 1-3",
          key: "Menu-1-3"
        }
      ]
    },
    {
      label: "Menu 2",
      icon: <WomanOutlined />,
      children: [
        {
          label: "Menu 2-1",
          key: "Menu-2-1"
        }, 
        {
          label: "Menu 2-2",
          key: "Menu-2-2"
        }, 
        {
          label: "Menu 2-3",
          key: "Menu-2-3"
        }
      ]
    },
    {
      label: "Menu 3",
      icon: <SkinOutlined />,
      children: [
        {
          label: "Menu 3-1",
          key: "Menu-3-1"
        }, 
        {
          label: "Menu 3-2",
          key: "Menu-3-2"
        }, 
        {
          label: "Menu 3-3",
          key: "Menu 3-3"
        }
      ]
      
    }
  ];

  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["Menu-1-1"]}
        defaultOpenKeys={["Menu-1"]}
      />
    </>

  )
}
export default MenuSider;