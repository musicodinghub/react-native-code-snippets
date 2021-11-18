import React from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Input = ({ icon, placeholder, secureTextEntry }) => {
  return (
    <InputField>
      <View style={{ flexDirection: 'row' }}>
        <Icon source={icon} />
        <TextInput
          secureTextEntry={secureTextEntry ? true : false}
          placeholder={placeholder}
          placeholderTextColor="#BCE0FD"
          autoCapitalize="none"
          style={{
            marginLeft: 20,
            color: '#2699fb',
            fontSize: 14,
            lineHeight: 16,
          }}
        ></TextInput>
      </View>
    </InputField>
  );
};

const SocialAppIcon = ({ icon }) => {
  return (
    <SocialAppIconView>
      <Icon source={icon} />
    </SocialAppIconView>
  );
};

const SignUpOption2 = ({ params }) => (
  <Container>
    <StatusBar hidden={true} />
    <SignUpView>
      <Input
        icon={require('../../../assets/images/user_icon.png')}
        placeholder="Full name"
      />
      <Input
        icon={require('../../../assets/images/mail_icon.png')}
        placeholder="Email"
      />
      <Input
        icon={require('../../../assets/images/lock_icon.png')}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button>
        <ButtonText>CONTINUTE</ButtonText>
      </Button>
      <SocialAppGroup>
        <SocialAppIcon icon={require('../../../assets/images/facebook_icon.png')} />
        <SocialAppIcon icon={require('../../../assets/images/twitter_icon.png')} />
        <SocialAppIcon icon={require('../../../assets/images/google_icon.png')} />
      </SocialAppGroup>
      <HaveAccountText>Already have an account?</HaveAccountText>
    </SignUpView>
  </Container>
);

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const SignUpView = styled.View`
  height: 439px;
  margin-top: 136px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #fff;
`;
const InputField = styled.View`
  height: 48px;
  margin: 8px 24px;
  border-width: 1px;
  border-color: #bce0fd;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  justify-content: center;
  align-items: flex-start;
`;
const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
const Button = styled.TouchableOpacity`
  margin-top: 42px;
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
const SocialAppGroup = styled.View`
  margin-top: 56px;
  margin-left: 64px;
  margin-right: 64px;
  flex-direction: row;
  justify-content: space-between;
`;
const SocialAppIconView = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  border-width: 1px;
  border-color: #bce0fd;
  justify-content: center;
  align-items: center;
`;
const HaveAccountText = styled.Text`
  margin: 63px 60px 0px;
  font-size: 10px;
  line-height: 20px;
  color: #2699fb;
  text-align: center;
`;

export default SignUpOption2;
