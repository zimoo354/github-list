import React from "react";
import { Affix, Card, Avatar, Typography } from "antd";
import { PushpinOutlined, BankOutlined, CloudOutlined } from "@ant-design/icons";
import { UserType } from "../../types";
import { icon } from "./styles";

const { Title, Paragraph } = Typography;

const { Meta } = Card;

const icons = {
  location: PushpinOutlined,
  company: BankOutlined,
  blog: CloudOutlined,
};

const UserProfile = ({ user }: { user: UserType }) => (
  <Affix offsetTop={64}>
    <Card title={user.login} extra={<a href={user.html_url} target="_blank">view profile</a>} style={{ height: "100%" }}>
      <Avatar size={280} style={{ display: "block", margin: "0 auto 24px auto" }} src={user.avatar_url} />
      <Title level={2}>{user.name}</Title>
      <Title level={4} type="secondary">{user.login}</Title>
      <Paragraph>{user.bio}</Paragraph>
      {
        Object.keys(icons).map(key => {
          if (user[key]) {
            const CurrentIcon = icons[key];
            return (
              <>
                {
                  user[key] && (
                    <Typography>
                      <CurrentIcon style={icon} />
                      {(key == "blog")
                        ? <a href={user[key]} target="_blank">{user[key]}</a>
                        : user[key]}
                    </Typography>
                  )
                }
              </>
            );            
          }
        })
      }
    </Card>  
  </Affix>
);

export default UserProfile;
