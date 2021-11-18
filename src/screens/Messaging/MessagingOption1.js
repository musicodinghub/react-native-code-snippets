import React, { useRef, useState } from 'react';
import { View, StatusBar, Image, TextInput, FlatList, KeyboardAvoidingView, TouchableOpacity,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';

const NavBar = ({navigation}) => {
  return (
    <NavBarView>
      <Image source={require('../../../assets/images/backward_arrow_icon.png')} style={{width: 16, height: 16}} />
      <Text bold>John Doe</Text>
      <View style={{width:16}}></View>
    </NavBarView>
  )
}

const MessagingOption1 = ({
    navigation,
}) => {
  const flatListRef = useRef();
  const [msg, setMsg] = useState('');
  const [msgList, setMsgList] = useState([{
      id: 1, sent: true, msg: 'Qui dolor deserunt sindo culpa fugiat culpa.', avatar: require('../../../assets/images/avatar.png')
    },{
      id: 2, sent: false, msg: 'Aliqua minim commodo proident amet do minim amet sit.', avatar: require('../../../assets/images/avatar2.png')
    },{
      id: 3, sent: true, msg: 'Est officia excepteur duis laborum est ullamco elit.', avatar: require('../../../assets/images/avatar.png')
    },{
      id: 4, sent: true, msg: 'Officia elit aliquip enim tempor excepteur sunt voluptate incididunt ut ullamco duis.', avatar: require('../../../assets/images/avatar.png')
    }
  ])

  const _renderItem = ({item, index}) => {
    return item.sent ? (
      <View>
        {msgList.length - 1 === index? (
        <Text size='14px' color='#2699fb' bold style={{paddingVertical: 14, paddingHorizontal: 14}}>
        {moment().format('dddd, mm:ss a')}
        </Text>
        ):(<View/>)}
        <MessageItemView style={{marginLeft: 55}}> 
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
            <View style={{backgroundColor: '#2699fb', width: 240}}>
              <Text size='14px' color='#fff' align='left' style={{paddingVertical: 14, paddingHorizontal: 14}}>{item.msg}</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <TriangleRight/>
            <Image source={item.avatar} style={{width:40, height: 40, borderRadius: 40}}/>
          </View>
        </MessageItemView>
      </View>
    ): (
      <View>
        {msgList.length - 1 === index? (
        <Text size='14px' color='#2699fb' bold style={{paddingVertical: 14, paddingHorizontal: 14}}>
        {moment().format('dddd, hh:mm:ss a')}
        </Text>
        ):(<View/>)}
      <MessageItemView style={{marginLeft: 24}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <Image source={item.avatar} style={{width:40, height: 40, borderRadius: 40}}/>
          <TriangleLeft/>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
          <View style={{backgroundColor: '#fff', width: 240}}>
            <Text size='14px' color='#2699fb' align='left' style={{paddingVertical: 14, paddingHorizontal: 14}}>{item.msg}</Text>
          </View>
        </View>
      </MessageItemView>
      </View>
    )
  }

  const _onClickSend = () => {
    if (msg.length > 0) {
      let messages = msgList;
      messages.push({
        id: Math.floor((Math.random() * 9999) + 1),
        sent: true,
        msg: msg,
        avatar: require('../../../assets/images/avatar.png')
      })
      setMsgList(messages);
      Keyboard.dismiss();
    }
    setTimeout(()=> {
      _autoReply();
    }, 1000);
  }
  const _autoReply = () => {
    if (msg.length > 0) {
      let messages = msgList;
      messages.push({
        id: Math.floor((Math.random() * 9999) + 1),
        sent: false,
        msg: msg,
        avatar: require('../../../assets/images/avatar2.png')
      })
      setMsg('');
      setMsgList(messages);
    }
  }

  return (
    <Container>
      <StatusBar hidden={true}/>
      <NavBar navigation={navigation}/>
      <KeyboardAvoidingView behavior={'padding'} style={{flex:1}}>
        <FlatList keyExtractor={(_, index)=>''+index} data={msgList} renderItem={_renderItem}
          extraData={msgList}
          ref={flatListRef}
          onContentSizeChange={()=>flatListRef?.current?.scrollToEnd()}
        />
        <InputView>
          <InputField>
            <TextInput
              style={{color: '#2699fb', fontSize: 14, lineHeight: 16, marginRight: 20}}
              placeholder='Say something...'
              placeholderTextColor='#BCE0FD'
              autoCapitalize='none'
              returnKeyType='send'
              value={msg}
              onChangeText={msg => setMsg(msg)}
              onSubmitEditing={()=>{_onClickSend()}}
            ></TextInput>
            <TouchableOpacity onPress={()=>_onClickSend()}>
            <Image source={require('../../../assets/images/backward_arrow_icon.png')}/>
            </TouchableOpacity>
          </InputField>
        </InputView>
      </KeyboardAvoidingView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f1f9ff;
`;
const NavBarView = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;
const Text = styled.Text`
  color: ${(props)=>(props.color ? props.color: '#2699fb')};
  font-size: ${(props)=>(props.size ? props.size: '14px')};
  line-height: ${(props)=>(props.height ? props.height: '24px')};
  font-weight: ${(props)=>(props.bold ? 'bold': 'normal')};
  text-align: ${(props)=>(props.align ? props.align : 'center')};;
`;
const MessageItemView = styled.View`
  margin-bottom: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;
const TriangleRight = styled.View`
  border-style: solid;
  border-width: 8px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #2699fb;
  border-right-color: transparent;
`;
const TriangleLeft = styled.View`
  border-style: solid;
  border-width: 8px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: #fff;
`;
const InputView = styled.View`
  width: 375px;
  height: 56px;
  background-color: #fff;
  align-self: flex-end;
`;
const InputField = styled.View`
  margin: 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export default MessagingOption1;
