import React from "react";
import {
  Row,
  Col,
  Radio,
  Card,
  Menu,
  Dropdown,
  Icon,
  Table,
  Divider,
  Tag
} from "antd";
import { Chart, Tooltip, Axis, Legend, Pie, Coord } from "viser-react";
const DataSet = require("@antv/data-set");
const sourceData = [
  { item: "家用电器", count: 18 },
  { item: "食用酒水", count: 21 },
  { item: "个护健康", count: 17 },
  { item: "服饰箱包", count: 13 },
  { item: "母婴产品", count: 9 },
  { item: "其他", count: 9 }
];

const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".0%"
  }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const data = dv.rows;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        搜索条件1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        搜索条件2
      </a>
    </Menu.Item>
  </Menu>
);
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];
const tableData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"]
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"]
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"]
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"]
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"]
  }
];
const ContentChart = ({ list, ...props }) => {
  return (
    <Row>
      <Col className="home-content-left" span={12}>
        <Card
          style={{ marginRight:20, background: "#fff" ,minHeight:450}}
          title="线上热门搜索"
          bodyStyle={{ padding: "10px 24px" }}
          extra={
            <Dropdown overlay={menu}>
              <Icon
                type="ellipsis"
                theme="outlined"
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          }
        >
          <Table
            columns={columns}
            dataSource={tableData}
            bordered
            size="small"
          />
        </Card>
      </Col>
      <Col className="home-content-right" span={12}>
        <Card
          title="销售额类占比"
          extra={
            <div>
              <Dropdown overlay={menu}>
                <Icon
                  type="ellipsis"
                  theme="outlined"
                  style={{ cursor: "pointer" }}
                />
              </Dropdown>
              <div className="home-content-right-tab">
                <Radio.Group defaultValue="全部渠道">
                  <Radio.Button value="全部渠道">全部渠道</Radio.Button>
                  <Radio.Button value="线上">线上</Radio.Button>
                  <Radio.Button value="门店">门店</Radio.Button>
                </Radio.Group>
              </div>
            </div>
          }
        >
          <Chart forceFit height={300} padding="auto" data={data} scale={scale}>
            <Tooltip showTitle={false} />
            <Axis position="left" />
            <Legend
              dataKey="item"
              layout="vertical"
              position="right-center"
              textStyle={{
                fontSize: "16", // 文本大小
                rotate: 0 // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
              }}
            />
            <Coord type="theta" radius={0.75} innerRadius={0.6} />
            <Pie
              position="percent"
              color="item"
              style={{ stroke: "#fff", lineWidth: 1 }}
              label={[
                "percent",
                {
                  offset: -20,
                  textStyle: {
                    rotate: 0,
                    textAlign: "center",
                    shadowBlur: 2,
                    shadowColor: "rgba(0, 0, 0, .45)"
                  }
                }
              ]}
            />
          </Chart>
        </Card>
      </Col>
    </Row>
  );
};

export default ContentChart;
