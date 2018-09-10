import React from "react";
import { Row, Col, Tabs, List, DatePicker } from "antd";
import { Chart, Tooltip, Axis, Bar } from "viser-react";
const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;
function callback(key) {
  console.log(key);
}
function onChange(date, dateString) {
  console.log(date, dateString);
}
const operations = (
  <div className="home-tab-extra">
    <a>今日</a>
    <a>本周</a>
    <a>本月</a>
    <a>全年</a>
    <RangePicker onChange={onChange} />
  </div>
);

const data = [
  { year: "1951 年", sales: 38 },
  { year: "1952 年", sales: 52 },
  { year: "1956 年", sales: 61 },
  { year: "1957 年", sales: 145 },
  { year: "1958 年", sales: 48 },
  { year: "1959 年", sales: 38 },
  { year: "1960 年", sales: 38 },
  { year: "1962 年", sales: 38 }
];
const listData = [
  {
    value:'323,234'
  },
  {
    value:'323,234'
  },
  {
    value:'323,234'
  },
  {
    value:'323,234'
  },
  {
    value:'323,234'
  },
  {
    value:'323,234'
  }
];
const scale = [
  {
    dataKey: "sales",
    tickInterval: 20
  }
];
const content = (
  <Row>
    <Col span={16}>
      <p style={{ marginBottom: 20 }}>访问量趋势</p>
      <Chart forceFit height={400} padding="auto" data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Bar position="year*sales" />
      </Chart>
    </Col>
    <Col span={8} style={{ paddingLeft: 32 }}>
      <p style={{ marginBottom: 20 }}>门店访问量排名</p>
      <List
      split={false}
      dataSource={listData}
      renderItem={(item,index) => (<List.Item>
        <Col span={3}><span style={{display:'inline-block',background:'#314659',borderRadius:'100%',width:20,height:20,color:'#fff',textAlign:'center',lineHeight:'20px'}}>{index} </span></Col>
        <Col span={15}>工专路 {index} 号店</Col>
        <Col span={6}>{item.value}</Col>
      </List.Item>)}
    />
    </Col>
  </Row>
);
const TabChart = ({ list, ...props }) => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
      tabBarExtraContent={operations}
    >
      <TabPane tab="销售额" key="1">
        {content}
      </TabPane>
      <TabPane tab="访问量" key="2">
        {content}
      </TabPane>
    </Tabs>
  );
};

export default TabChart;
