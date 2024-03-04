import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UploadPostScreen } from './src/screens/UploadPostScreen';
import { styles } from './src/styles/UploadPostScreen.styles';


export default function App() {
  return (
    <SafeAreaView
      style={styles.SafeAreaView}
    >
      <UploadPostScreen />
    </SafeAreaView>
  );
}
