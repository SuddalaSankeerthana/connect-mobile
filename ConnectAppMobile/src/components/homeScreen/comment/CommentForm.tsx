import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import {styles} from '../../../styles/HomeScreenBodyStyles';
import {PostType} from '../Body';
import {Formstyles} from './CommentFormStyles';

const CommentForm = ({
  commentText,
  selectedUsername,
  setCommentText,
  post,
  parentCommentId,
  setParentCommentId,
}: {
  commentText: string;
  selectedUsername: string;
  post: PostType;
  setCommentText: (text: string) => void;
  parentCommentId: string;
  setParentCommentId: (text: string) => void;
}) => {
  const [inputText, setInputText] = useState(commentText);

  useEffect(() => {
    setInputText(commentText);
  }, [commentText]);

  const handleSend = async () => {
    const newCommentData = {
      UserId: '1',
      PostId: post.PostId,
      CommentMessage: commentText,
      ParentCommentId: parentCommentId,
    };

    try {
      if (commentText !== '') {
        const response = await fetch(
          'http://localhost:8080/homepage/post-comment',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCommentData),
          },
        );
        console.log('response ', await response.json());
        if (response.status == 201 || response.status == 200)
          console.log('Comment created successfully!');
      }
    } catch (error) {
      console.log('Failed to create comment', error);
    }
    setCommentText('');
    setParentCommentId('');
    setInputText('');
  };

  return (
    <View style={Formstyles.commentInputContainer}>
      <View style={Formstyles.profileImageContainer}>
        <Image
          source={{uri: post.ProfileImageAddress}}
          style={Formstyles.profileImage}
        />
      </View>
      <View style={Formstyles.inputContainer}>
        <TextInput
          placeholder={`Replying to ${post.Username}`}
          style={Formstyles.input}
          value={inputText}
          onChangeText={text => {
            setInputText(text);
            setCommentText(text);
          }}
        />
        <Pressable style={Formstyles.sendButton} onPress={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default CommentForm;
