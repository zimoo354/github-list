import React, { useState } from "react";
import { observer } from 'mobx-react';
import "antd/dist/antd.css";
import { Row, Col, Layout, Empty, Spin } from 'antd';
import { Header, RepositoryList, UserProfile } from "./components";
import { layout, content, repositoriesContainer, emptyContainer } from "./style";
import ProfileStore from "./models/ProfileStore";

const { Content } = Layout;

const profileStore = ProfileStore.create();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearch, setHasSearch] = useState(false);
  
  const search = (val: string) => {
    setIsLoading(true);
    setHasSearch(true);
    profileStore.getProfile(val, () => {
      setIsLoading(false);
    });
  };

  const renderContent = () => {
    if (hasSearch && profileStore.user) {
      return (
        <>
          <Col xs={24} md={6}>
            {
              profileStore.user && (
                <UserProfile user={profileStore.user} />
              )
            }
          </Col>
          <Col xs={24} md={18} style={repositoriesContainer}>
            <RepositoryList repositories={profileStore.repositories} />
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

export default observer(App);
