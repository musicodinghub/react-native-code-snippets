import React from 'react';
import { StatusBar, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <InputField>
      <TextInput
        secureTextEntry={secureTextEntry ? true : false}
        placeholder={placeholder}
        placeholderTextColor="#BCE0FD"
        autoCapitalize="none"
        style={{
          marginLeft: 20,
          color: '#2699FB',
          fontSize: 14,
          lineHeight: 16,
        }}
      ></TextInput>
    </InputField>
  );
};
const SignUpOption1 = ({ params }) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <SignUpView>
        <TitleView>
          <TitleText>Create an Account</TitleText>
        </TitleView>
        <Input placeholder="Full name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <PrivacyText>
          By creating an account you agree to our Terms of Service and Privacy
          Policy
        </PrivacyText>
      </SignUpView>
      <Button>
        <ButtonText>CONTINUTE</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f1f9ff;
`;
const TitleView = styled.View`
  margin-top: 48px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #2699fb;
  font-weight: bold;
`;
const PrivacyText = styled.Text`
  margin: 20px 60px;
  font-size: 10px;
  line-height: 20px;
  color: #2699fb;
  text-align: center;
`;
const SignUpView = styled.View`
  height: 439px;
  margin-top: 100px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #fff;
`;
const InputField = styled.View`
  height: 48px;
  margin: 8px 24px;
  border-color: #bce0fd;
  border-width: 1px;
  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.TouchableOpacity`
  margin-top: 56px;
  height: 48px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 4px;
  background-color: #2699fb;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
`;

export default SignUpOption1;
