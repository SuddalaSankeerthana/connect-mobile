import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../styles/HomeScreenBodyStyles';
import {Comment} from './comment/Comment';

export function LikesAndComments({likes_count}: {likes_count: number}) {

  return (
    <View style={styles.likesAndComment}>
      <View style={styles.heartIcon}>
        <FontAwesomeIcon icon={farHeart} size={27} />
      </View>
      <View>
        <Text>{likes_count}</Text>
      </View>
      {/* <TouchableOpacity onPress={handleCommentPress}>
        <View>
          <Image
            source={require('../assets/commentIcon.png')}
            style={styles.commentIcon}
          />
        </View>
      </TouchableOpacity>
      {commentWindow && <Comment handleCommentWindow={handleComment}/>} */}
      <Comment />
    </View>
  );
}