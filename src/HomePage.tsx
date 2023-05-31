import React, { useEffect, useState } from "react";
import { Card, Col, Layout, Menu, Row, Space, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { BooksTable } from ".";

const { Header, Content, Sider } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="1">User 1</Menu.Item>
              <Menu.Item key="2">User 2</Menu.Item>
              <Menu.Item key="3">User 3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Devices">
              <Menu.Item key="4">Device 1</Menu.Item>
              <Menu.Item key="5">Device 2</Menu.Item>
              <Menu.Item key="6">Device 3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Notifications"
            >
              <Menu.Item key="7">Notification 1</Menu.Item>
              <Menu.Item key="8">Notification 2</Menu.Item>
              <Menu.Item key="9">Notification 3</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <Space>
                    <small>Số lượng sách</small>
                  </Space>
                  <Typography.Title>100</Typography.Title>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Space>
                    <small>Số lượng thành viên</small>
                  </Space>
                  <Typography.Title>20</Typography.Title>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Space>
                    <small>Số lượt mượn sách</small>
                  </Space>
                  <Typography.Title>5</Typography.Title>
                </Card>
              </Col>
            </Row>
            <Row>
              <BooksTable />
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomePage;
