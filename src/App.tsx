import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Layout, Input, Button, Avatar, Card, List, Divider } from 'antd';
import { getUser } from './api';

const { Header, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  
  const search = val => {
    getUser(val)
      .then(response => {
        console.log(response);
        setUser(response[0]);
        setRepos(response[1]);
      });
  };

  return (
    <Layout style={{height:"100vh"}}>
      <Header>
        <div className="logo">
          <Typography style={{ color: "white" }}>Github Finder</Typography>
        </div>
      </Header>
      <Content>
        <Row>
          <Col span={24}>
            <Card style={{ height: "90vh" }}>
            
            </Card>          
          </Col>
        </Row>
      </Content>
    </Layout>
  )
};

export default App;
