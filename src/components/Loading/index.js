import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { commonAction } from "reducers/common";
import "./index.less";
@connect(
  state => state.getIn(["loading"]),
  dispatch => ({
    updateLoading: bindActionCreators(commonAction.updateLoading, dispatch)
  })
)
@withRouter
class Loading extends Component {
  componentWillUpdate() {
    this.props.updateLoading(false);
  }
  componentDidUpdate(){
    this.props.updateLoading(false);
  }
  componentWillReceiveProps() {
    // this.props.updateLoading(true);
  }
  componentWillUnmount(){
    this.props.updateLoading(false);
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.location.pathname != nextProps.location.pathname) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <Spin
        tip="LOADING"
        wrapperClassName="Loading_wrap"
        spinning={this.props.loading}
      >
        {this.props.children}
      </Spin>
    );
  }
}

export default Loading;
