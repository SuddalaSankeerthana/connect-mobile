import React from 'react';
import {Text, View} from 'react-native';

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
