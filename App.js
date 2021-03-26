import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SignUpOption1, SignUpOption2, SignUpOption3 } from './src/screens/SignUp/';
import { ActivityFeed } from './src/screens/Feed';
import { ProfileOption1, ProfileOption2 } from './src/screens/Profile';

export default function App() {
  return (
    <ProfileOption2/>
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
