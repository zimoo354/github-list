import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Affix, Row, Col, Typography, Layout, Input, Button, Avatar, Card, List, Divider } from 'antd';
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
    <Layout style={{height:"auto"}}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row>
          <Col span={16}>
            <Typography style={{ color: "white" }}>Github Finder</Typography>
          </Col>
          <Col span={8}>
            <Search placeholder="enter github username here..." onSearch={search} />
          </Col>          
        </Row>
      </Header>
      <Content style={{ background: "white" }}>
        <Row>
          {
            user && repos && (
              <>
          <Col span={6}>
            <Affix offsetTop={64}>
              <Card title={user.login} extra={<a href={user.html_url} target="_blank">view profile</a>} style={{ height: "100%" }}>
                <Avatar size={120} style={{ display: "block", margin: "0 auto 24px auto" }} src={user.avatar_url} />
                <Meta
                  title={user.login}
                  description={user.bio}
                />
              </Card>  
            </Affix>      
          </Col>
          <Col span={18} style={{ padding: "0 24px" }}>
            <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={repos}
              renderItem={item => (
                <List.Item
                  actions={[<a key="list-loadmore-edit" href={item.svn_url}>view</a>]}
                >
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />                  
          </Col>
              </>
            )
          }
        </Row>
      </Content>
    </Layout>
  )
};

export default App;
