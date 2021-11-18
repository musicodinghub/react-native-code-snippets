import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SignUpOption1, SignUpOption2, SignUpOption3 } from './src/screens/SignUp/';
import { ActivityFeed } from './src/screens/Feed';
import { ProfileOption1, ProfileOption2 } from './src/screens/Profile';
import { MessagingOption1 } from './src/screens/Messaging';
import { DrawerMenu } from './src/screens/Menu';
import { ContactOption1, ContactOption2 } from './src/screens/Contact';

export default function App() {
  return (
    <MessagingOption1/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
