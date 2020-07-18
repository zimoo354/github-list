import React, { useState } from "react";
import "antd/dist/antd.css";
import { Row, Col, Layout, Empty, Spin } from 'antd';
import { getUser } from './api';
import { Header, RepositoryList, UserProfile } from "./components";
import { layout, content, repositoriesContainer, emptyContainer } from "./style";

const { Content } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearch, setHasSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState(null);
  
  const search = (val: string) => {
    setIsLoading(true);
    setHasSearch(true);
    getUser(val)
      .then(response => {
        setUser(response[0]);
        setRepositories(response[1]);
        setIsLoading(false);
      });
  };

  const renderContent = () => {
    if (hasSearch && user) {
      return (
        <>
          <Col span={6}>
            {
              user && (
                <UserProfile user={user} />
              )
            }
          </Col>
          <Col span={18} style={repositoriesContainer}>
            <RepositoryList repositories={repositories} />
          </Col>
        </>        
      )
    }

    return (
      <Col span={24} style={emptyContainer}>
        {
          isLoading ? (
              <Spin size="large" />
            ) : (
            <Empty
              description={ hasSearch
                ? "The search term you provided doesn't has results"
                : "Please write a search term and hit enter"
              }
            />
          )
        }
      </Col>
    )
  };

  return (
    <Layout style={layout}>
      <Header handleSearch={search} />
        <Content style={content}>
        <Row>
          {
            renderContent()
          }
        </Row>
      </Content>
    </Layout>
  )
};

export default App;
