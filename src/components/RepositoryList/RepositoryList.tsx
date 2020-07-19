import React from "react";
import { List, Empty, Col, Typography } from "antd";
import { RepositoryType } from "../../types";
import { emptyContainer } from "../../style";
import { observer } from 'mobx-react';

const { Text } = Typography;

const RepositoryList = ({ repositories }: { repositories: Array<RepositoryType> }) => (
  <>
  {
    repositories?.length ? (
      <List
        style={{
          marginTop: 64,
        }}
        className="repository-list"
        itemLayout="horizontal"
        dataSource={repositories}
        renderItem={(item: RepositoryType) => (
          <List.Item
            actions={[
              <Text copyable={{ text: item.clone_url }}>clone url</Text>,
              <a key="repo-link" href={item.svn_url} target="_blank">view</a>,
            ]}
          >
            <List.Item.Meta
              title={<a href={item.svn_url} target="_blank">{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />      
    ) : (
      <Col span={24}>
        <Empty description="This user does not have any repository" style={emptyContainer} />        
      </Col>
    )
  }
  </>
);

export default observer(RepositoryList);
