/** 
 * React Native Code Snippets - Contact List UI Example 
 * 
 * TODO:
 * [] 1. Prepare
 * [] 2. Install dependencies components 'react-native-sectionlist-contacts'
 * [] 3. Copy the reusable styled object
 * [] 4. Build the header NavBar, you can handle it using React Navigation instead in a real App 
 * [] 5. Define the dummy contact records
 * [] 6. Build the contact list using react-native-sectionlist-contacts
 * [] 7. Style the contact list
 * 
 * */
import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import SectionListContacts from 'react-native-sectionlist-contacts';

const BACKWARD_ARROW = require('../../../assets/images/backward_arrow_icon.png');

const AVATAR = require('../../../assets/images/avatar.png');

const NavBar = () => {
  return (
    <NavBarView>
      <Icon source={BACKWARD_ARROW} />
      <Text bold>CONTACT</Text>
      <View style={{ width: 16 }}></View>
    </NavBarView>
  );
};

const _renderHeader = (params) => {
  return (
    <SectionView>
      <Text size='14px' height='16px' bold style={{marginLeft: 24}}>{params.key}</Text>
    </SectionView>
  );
};

const _renderItem = (item, index, section) => {
  return (
    <View>
      <Line />
      <Block>
        <Avatar source={AVATAR} />
        <Content>
          <Text align="left" size="14px" bold>{item.firstname} {item.lastname}</Text>
          <Text align="left" size="10px">{item.address}</Text>
        </Content>
      </Block>
    </View>
  );
};

const ContactOption1 = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'Anderson',
      firstname: 'Bill',
      lastname: 'Anderson',
      address: 'San Francisco, CA'
    },
    {
      name: 'Aaron',
      firstname: 'Milton',
      lastname: 'Aaron',
      address: 'San Francisco, CA'
    },
    {
      name: 'Alex',
      firstname: 'Michale',
      lastname: 'Alex',
      address: 'San Francisco, CA'
    },
    {
      name: 'Baarda',
      firstname: 'Will',
      lastname: 'Baarda',
      address: 'San Francisco, CA'
    },
    {
      name: 'Ballard',
      firstname: 'Bruce',
      lastname: 'Ballard',
      address: 'San Francisco, CA'
    },
    {
      name: 'Barlow',
      firstname: 'Michael',
      lastname: 'Barlow',
      address: 'San Francisco, CA'
    },
    {
      name: 'Haro',
      firstname: 'Anna',
      lastname: 'Haro',
      address: 'San Francisco, CA'
    },
    {
      name: 'Calvin',
      firstname: 'David',
      lastname: 'Calvin',
      address: 'San Francisco, CA'
    },
    {
      name: 'David',
      firstname: 'Carl',
      lastname: 'David',
      address: 'San Francisco, CA'
    },
    {
      name: 'Elaine',
      firstname: 'Mary',
      lastname: 'Elaine',
      address: 'San Francisco, CA'
    },
    {
      name: 'Felix',
      firstname: 'David',
      lastname: 'Felix',
      address: 'San Francisco, CA'
    },
    { name: '**&&&&', firstname: '**', lastname: '&&&&', address: 'San Francisco, CA' },
    { name: '1122', firstname: '11', lastname: '22', address: 'San Francisco, CA' },
    { name: '2233', firstname: '22', lastname: '33', address: 'San Francisco, CA' },
  ]);
  return (
    <Container>
      <NavBar />
      <SectionListContacts
        sectionListData={contacts}
        initialNumToRender={contacts.length}
        otherAlphabet="#"
        renderHeader={_renderHeader}
        renderItem={_renderItem}
        letterViewStyle={{}}
        letterTextStyle={{color:'#2699fb', fontSize:14, lineHeight: 30, fontWeight: 'bold' }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f1f9ff;
`;
const NavBarView = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#2699fb')};
  font-size: ${(props) => (props.size ? props.size : '14px')};
  line-height: ${(props) => (props.height ? props.height : '24px')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-align: ${(props) => (props.align ? props.align : 'center')}; ;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
const Line = styled.View`
  border-style: solid;
  border-width: 1px;
  border-color: #bce0fd;
  margin-right: 32px;
`;
const Block = styled.View`
  height: 73px;
  flex-direction: row;
  padding: 16px 24px;
`;
const Content = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 16px;
`;
const SectionView = styled.View`
  height: 28px;
  background-color: #BCE0FD;
  align-items: flex-start;
  justify-content: center;
  margin-right: 32px;
`;

export default ContactOption1;
