import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../styles/HomeScreenBodyStyles';
import {Comment} from './comment/Comment';
import { PostDetails } from '../seeder/PostDetails';

export function LikesAndComments({
  likes_count,
  postDetails,
}: {
  likes_count: number;
  postDetails: PostDetails;
}) {
  const [handleComment, setHandleComment] = useState(false);
  const [commentWindow, setCommentWindow] = useState(false);

  const handleCommentPress = () => {
    setCommentWindow(!commentWindow);
  };

  return (
    <View style={styles.likesAndComment}>
      <TouchableOpacity>
        <View style={styles.heartIcon}>
          <FontAwesomeIcon icon={farHeart} size={27} />
        </View>
      </TouchableOpacity>
      <View>
        <Text>{likes_count}</Text>
      </View>
      <Comment postDetails={postDetails} />
    </View>
  );
}