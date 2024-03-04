import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UploadPostScreen } from './src/screens/UploadPostScreen';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UploadPostScreen />
    </SafeAreaView>
  );
}
