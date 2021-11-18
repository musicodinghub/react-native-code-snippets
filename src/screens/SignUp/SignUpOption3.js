import React from 'react';
import { View, Image, StatusBar, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Input = ({ icon, placeholder, secureTextEntry }) => {
  return (
    <InputField>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          secureTextEntry={secureTextEntry ? true : false}
          placeholder={placeholder}
          placeholderTextColor="#BCE0FD"
          autoCapitalize="none"
          style={{
            marginLeft: 24,
            color: '#2699FB',
            fontSize: 14,
            lineHeight: 16,
          }}
        />
      </View>
    </InputField>
  );
};

const SignUpOption3 = ({ params }) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Box>
        <TitleText>MUSIC CODING</TitleText>
      </Box>
      <SignUpView>
        <Input placeholder="Full name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button>
          <ButtonText>CONTINUTE</ButtonText>
        </Button>
        <Button color="#fff">
          <Image
            source={require('../../../assets/images/facebook_icon.png')}
            style={{ width:16, height:16, position: 'relative', right: 51 }}
          />
          <ButtonText color="#2699fb">LOGIN WITH FACEBOOK</ButtonText>
        </Button>
      </SignUpView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Box = styled.View`
  height: 169px;
  background-color: #2699fb;
  justify-content: flex-end;
  align-items: center;
`;
const TitleText = styled.Text`
  font-size: 30px;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 24px;
`;
const SignUpView = styled.View`
  height: 439px;
  margin-top: 40px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #fff;
`;
const InputField = styled.View`
  height: 48px;
  margin: 12px 20px;
  border-color: #bce0fd;
  border-width: 1px;
  border-radius: 48px;
  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.TouchableOpacity`
  margin-top: 42px;
  height: 48px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 48px;
  border-width: 2px;
  border-color: #2699fb;
  background-color: ${(props) => (props.color ? props.color : '#2699fb')};
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
`;
const ButtonText = styled.Text`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
`;
export default SignUpOption3;
