import React from "react";
import {
  Row,
  Col,
  Badge,
  Tabs,
  Popover,
  Menu,
  Dropdown,
  Avatar,
  Icon
} from "antd";
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
const content = (
  <Tabs
    defaultActiveKey="1"
    onChange={callback}
    style={{ width: 320, overflow: "hidden" }}
    tabBarGutter={40}
  >
    <TabPane tab="通知(5)" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="消息(5)" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="代办(5)" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
const menu = (
  <Menu>
    <Menu.Item style={{ paddingLeft: 10 }}>
      <a>
        <Icon
          type="user"
          style={{ fontSize: 16, marginRight: 10 }}
          theme="outlined"
        />
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item style={{ paddingLeft: 10 }}>
      <a>
        <Icon
          type="poweroff"
          style={{ fontSize: 16, marginRight: 10 }}
          theme="outlined"
        />
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
const AppHeader = ({ ...props }) => {
  return (
    <Row className="app-header">
      <Row className="app-header-right">
        <Col span={8}>
          <span className="app-header-right-span">
            <Popover placement="bottomRight" content={content} trigger="click">
              <Badge count={12}>
                <Icon type="bell" style={{ fontSize: 24 }} theme="outlined" />
              </Badge>
            </Popover>
          </span>
        </Col>
        <Col span={16}>
          <Dropdown overlay={menu} placement="bottomCenter">
            <span className="app-header-right-span">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <i style={{ fontSize: 14 }}>Serati Ma</i>
            </span>
          </Dropdown>
        </Col>
      </Row>
    </Row>
  );
};

export default AppHeader;
