import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, BackTop, Breadcrumb, Icon } from "antd";
import { Route, withRouter, Link } from "react-router-dom";
import AppHeader from "./appHeader";
import Loading from "components/Loading";
import routerConfig from 'config/routes'
import menuList from 'config/menu'
import "./index.less";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
@withRouter
class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }} className="app">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="app-logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {menuList &&
              menuList.map(menu => {
                return menu.children ? (
                  <SubMenu
                    key={menu.key}
                    title={
                      <span>
                        <Icon type={menu.icon} />
                        <span>{menu.title}</span>
                      </span>
                    }
                  >
                    {menu.children &&
                      menu.children.map(c_menu => {
                        return (
                          <Menu.Item key={c_menu.key}>
                            <Link to={c_menu.path}>{c_menu.title} </Link>
                          </Menu.Item>
                        );
                      })}
                  </SubMenu>
                ) : (
                  <Menu.Item key={menu.key}>
                    <Link to={menu.path}>
                      <Icon type={menu.icon} />
                      <span>{menu.title}</span>
                    </Link>
                  </Menu.Item>
                );
              })}
          </Menu>
        </Sider>
        <Layout>
          <AppHeader />
          <Content style={{ margin: 16 }}>
            <div style={{ padding: 24, minHeight: 500 }}>
              <Loading>
                {routerConfig.map((item, i) => (
                  <Route
                    key={i}
                    path={item.path}
                    component={item.component}
                    exact
                  />
                ))}
              </Loading>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        <BackTop />
      </Layout>
    );
  }
}
export default App;
