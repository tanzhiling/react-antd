import React from "react";
import { withRouter } from "react-router-dom";
import {
  Table,
  Form,
  Row,
  DatePicker,
  Select,
  Col,
  Input,
  Button,
  Icon
} from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./index.less";
const { MonthPicker } = DatePicker;
const columns = [
  {
    key: "id",
    title: "规则编号",

    dataIndex: "id"
  },
  {
    key: "des",
    title: "描述",
    dataIndex: "des"
  },
  {
    key: "num",
    title: "服务调用次数",
    dataIndex: "num",
    align: "center",
    sorter: true
  },
  {
    key: "statu",
    title: "状态",
    dataIndex: "statu"
  },
  {
    key: "time",
    title: "更新时间",
    dataIndex: "time",
    sorter: true
  },
  {
    key: "action",
    title: "操作",
    dataIndex: "action",
    render: () => <a href="javascript:;">Delete</a>
  }
];
const FormItem = Form.Item;
class Goods extends React.Component {
  state = {
    selectedRowKeys: [],
    expand: false
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };
  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  onChange(pageNumber) {
    console.log("Page: ", pageNumber);
  }
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };
  getFields = () => {
    const count = this.state.expand ? 10 : 3;
    const { getFieldDecorator } = this.props.form;
    const data = [
      {
        label: "规则编号",
        node: <Input placeholder="请输入" />
      },
      {
        label: "使用状态",
        node: (
          <Select defaultValue="运行">
            <Select.Option value="运行">运行</Select.Option>
            <Select.Option value="关闭中">关闭中</Select.Option>
          </Select>
        )
      },
      {
        label: "调用次数",
        node: <Input placeholder="请输入" />
      },
      {
        label: "更新日期",
        node: (
          <DatePicker
            style={{ width: "100%" }}
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        )
      },
      {
        label: "使用状态",
        node: (
          <Select defaultValue="运行">
            <Select.Option value="运行">运行</Select.Option>
            <Select.Option value="关闭中">关闭中</Select.Option>
          </Select>
        )
      },
      {
        label: "使用状态",
        node: (
          <Select defaultValue="运行">
            <Select.Option value="运行">运行</Select.Option>
            <Select.Option value="关闭中">关闭中</Select.Option>
          </Select>
        )
      }
    ];
    const children = [];
    data.map((v, i) => {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? "block" : "none" }}>
          <FormItem
            label={v.label}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            {getFieldDecorator(v.label, {
              rules: [
                {
                  required: true,
                  message: `${v.label}不能为空！`
                }
              ]
            })(v.node)}
          </FormItem>
        </Col>
      );
    });
    return children;
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: `${i}`,
        id: `TradeCode ${i}`,
        des: `这是一段描述 ${i}`,
        num: i,
        statu: i,
        time: "2018-09-10 11:21:14"
      });
    }
    return (
      <div className="goods">
        <Form className="goods-search" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                {this.state.expand ? "收起" : "展开"}
                <Icon type={this.state.expand ? "up" : "down"} />
              </a>
            </Col>
          </Row>
        </Form>
        <Table
          rowKey="table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            onShowSizeChange: this.onShowSizeChange,
            onChange: this.onChange
          }}
        />
      </div>
    );
  }
}
export default withRouter(Form.create()(Goods));
