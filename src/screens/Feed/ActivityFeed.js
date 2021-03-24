import React, { useState } from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

const ActivityFeed = ({ params }) => {

  const [data, setData] = useState(new Array(10).fill({
    id: 1,
    userName: 'Name Surname',
    avatar: 'https://musicoding.com/content/images/apps/avatar.png',
    content: 'Eiusmod tempor quis ex aliquip non ipsum minim reprehenderit esse quis deserunt eiusmod proident id. Aliqua laborum pariatur amet pariatur sunt anim. Irure irure ex exercitation ipsum. Consequat duis aliqua nisi mollit eiusmod id adipisicing pariatur aliquip enim ad quis. Consequat dolore sint nisi dolore in. Ipsum reprehenderit amet ipsum amet adipisicing cillum id labore sit elit nisi ex tempor sit. Magna voluptate sunt esse nisi nostrud consectetur ea non laboris amet adipisicing.',
    timeAgo: '1h ago'
  }));

  const _renderItem = ({item}) => {
    return (
      <Card>
        <CardContent>
          <Header>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar source={{uri:item.avatar}} />
              <UserName>{item.userName}</UserName>
            </View>
            <Time>{item.timeAgo}</Time>
          </Header>
          <Content>
            <ContentText>{item.content}</ContentText>
          </Content>
          <Image></Image>
          <Footer>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon source={{uri:'https://musicoding.com/content/images/apps/like_icon.png'}}/>
              <Number>609</Number>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 32}}>
                <Icon source={{uri:'https://musicoding.com/content/images/apps/comments_icon.png'}}/>
                <Number>120</Number>
              </View>
            </View>
            <Share>{'SHARE'}</Share>
          </Footer>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Container>
      <StatusBar hidden={true} />
      <NavBar>
        <Icon source={{uri: 'https://musicoding.com/content/images/apps/menu_icon.png'}}/>
        <Title>{'ACTIVITY FEED'}</Title>
        <Icon source={{uri: 'https://musicoding.com/content/images/apps/search_icon.png'}}/>
      </NavBar>
      <FlatList keyExtractor={(_, index) => index} data={data} renderItem={_renderItem}/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f1f9ff;
`;
const NavBar = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
const Title = styled.Text`
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
`;
const Card = styled.View`
  margin: 8px;
  background-color: #fff;
`;
const CardContent = styled.View`
  margin: 32px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
const UserName = styled.Text`
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 8px;
`;
const Time = styled.Text`
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
`;
const Content = styled.View`
  margin: 16px 0px;
  height: 80px;
`;
const ContentText = styled.Text`
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
`;
const Image = styled.View`
  height: 170px;
  background-color: #BCE0FD;
`;
const Footer = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`;
const Number = styled.Text`
  margin-left: 8px;
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
`;
const Share = styled.Text`
  color: #2699fb;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
`;
export default ActivityFeed;
