import React from 'react';
import {SafeAreaView, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { styles } from '../styles/Login.styles';

function Caption(props:any): React.JSX.Element {
  return (
    <>
      <View>
      <Text style={props.style} onPress={props.onPress}>{props.text} </Text>
    </View>
    </>
  );
}

export default Caption;
