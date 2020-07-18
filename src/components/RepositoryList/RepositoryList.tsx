import React from "react";
import { List, Empty, Col } from "antd";
import { RepositoryType } from "../../types";
import { emptyContainer } from "../../style";

const RepositoryList = ({ repositories }: { repositories: Array<RepositoryType> }) => (
  <>
  {
    repositories?.length ? (
      <List
        className="repository-list"
        itemLayout="horizontal"
        dataSource={repositories}
        renderItem={(item: RepositoryType) => (
          <List.Item
            actions={[<a key="list-link" href={item.svn_url} target="_blank">view</a>]}
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

export default RepositoryList;
