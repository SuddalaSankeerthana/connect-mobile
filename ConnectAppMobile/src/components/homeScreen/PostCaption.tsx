import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/HomeScreenBodyStyles';

export function Caption({description}: {description: string}) {
  return (
    <View style={styles.captionContainer}>
      <Text>{description}</Text>
    </View>
  );
}