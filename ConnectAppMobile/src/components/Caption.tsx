import React from 'react';
import {SafeAreaView, Text, View, Image, Button} from 'react-native';

function Caption(props:any): React.JSX.Element {
  return (
    <View>
      <Text >{props.text}</Text>
    </View>
  );
}

export default Caption;
