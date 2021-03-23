import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SignUpOption1, SignUpOption2, SignUpOption3 } from './src/screens/SignUp/';

export default function App() {
  return (
    <SignUpOption1/>
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
