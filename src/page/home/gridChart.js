import React from "react";
import { Row, Col, Icon } from "antd";
const GridChart = ({ list, ...props }) => {
  return (
    <Row className="home-header-grid">
      <Col
        className="home-header-grid-left"
        span={8}
        style={{ background: list.bgColor }}
      >
        <Icon type={list.icon} theme="outlined" />
      </Col>
      <Col className="home-header-grid-right" span={16}>
        <div>{list.value}</div>
        <p>{list.title}</p>
      </Col>
    </Row>
  );
};

export default GridChart;
