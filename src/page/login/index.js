import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginAction } from "reducers/login";
// import PropTypes from "prop-types";
import "./index.less";
const FormItem = Form.Item;
@connect(
  state => state.getIn(["login"]),
  dispatch => ({
    login: bindActionCreators(loginAction.login, dispatch)
  })
)
class Login extends React.Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.props.login({ username, password });
        this.props.history.push("/home");
      }
    });
  };
  componentDidMount() {}
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3>登录</h3>
          <FormItem>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入账号!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="账号"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            Or <a href="">注册!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
// Login.PropTypes = {};
export default withRouter(Form.create()(Login));
