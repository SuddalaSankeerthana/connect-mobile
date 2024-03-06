import React from 'react';
import {Button, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Body} from '../components/Body';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <Body />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
