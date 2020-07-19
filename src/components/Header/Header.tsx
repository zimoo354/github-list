import React from "react";
import { Layout, Row, Col, Typography, Input } from "antd";
import { SearchProps } from "antd/lib/input";

const { Header: AntdHeader } = Layout;
const { Search } = Input;

const Header = ({ handleSearch }) => {
  return (
    <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row>
        <Col xs={0} md={16}>
          <Typography style={{ color: "white" }}>Github Finder</Typography>
        </Col>
        <Col xs={24} md={8}>
          <Search placeholder="enter github username here..." onSearch={handleSearch} />
        </Col>          
      </Row>
    </AntdHeader>    
  )
};

export default Header;
