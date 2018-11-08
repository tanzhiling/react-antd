import React from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Card, Icon } from "antd";
import GridChart from "./gridChart";
import TabChart from "./tabChart";
import ContentChart from './contentChart'
import "./index.less";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const cardList = [
      {
        title: "新增用户",
        value: 801,
        icon: "user-add",
        bgColor: "#2d8cf0"
      },
      {
        title: "累积点击",
        value: 2342,
        icon: "user-add",
        bgColor: "#19be6b"
      },
      {
        title: "新增问答",
        value: 142,
        icon: "user-add",
        bgColor: "#ff9900"
      },
      {
        title: "分享统计",
        value: 657,
        icon: "user-add",
        bgColor: "#ed3f14"
      },
      {
        title: "新增互动",
        value: 12,
        icon: "user-add",
        bgColor: "#e46cbb"
      },
      {
        title: "新增页面",
        value: 11,
        icon: "user-add",
        bgColor: "#9a66e4"
      }
    ];
    return (
      <div className="home">
        <Row className="home-header" gutter={16}>
          {cardList.map((card, index) => {
            return (
              <Col span={4} key={index}>
                <GridChart list={card} />
              </Col>
            );
          })}
        </Row>
        <Row className="home-tab">
          <TabChart />
        </Row>
        <Row className="home-content" gutter={16}>
         <ContentChart/>
        </Row>
      </div>
    );
  }
}
export default withRouter(Home);
