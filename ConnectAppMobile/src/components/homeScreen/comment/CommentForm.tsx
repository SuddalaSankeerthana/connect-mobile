import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext, useEffect, useState} from 'react';
import {Image, Pressable, View, Text, TextInput} from 'react-native';
import {styles} from '../../../styles/HomeScreenBodyStyles';
import {PostType} from '../Body';
import {CurrentUserContext} from '../../CurrentContext';
import {getHostName} from '../../../utils/getHostName';

const CommentForm = ({
  commentText,
  selectedUsername,
  setCommentText,
  post,
  parentCommentId,
  setParentCommentId,
  setUpdateComments,
  handleIconPress,
}: {
  commentText: string;
  selectedUsername: string;
  post: PostType;
  setCommentText: (text: string) => void;
  parentCommentId: string;
  setParentCommentId: (text: string) => void;
  setUpdateComments: any;
  handleIconPress: () => void;
}) => {
  const [inputText, setInputText] = useState(commentText);
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    setInputText(commentText);
  }, [commentText]);

  const handleSend = async () => {
    const newCommentData = {
      UserId: currentUser.user.userId,
      PostId: post.PostId,
      CommentMessage: commentText,
      ParentCommentId: parentCommentId,
    };

    try {
      if (commentText !== '') {
        const response = await fetch(
          `http://${getHostName()}:8080/homepage/post-comment`,
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
    setUpdateComments((value: boolean) => !value);
    handleIconPress();
  };

  return (
    <View style={styles.commentInputContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{uri:currentUser.user.profile }}
          style={styles.profileImageCommentId}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={`Replying to ${post.Username}`}
          style={styles.input}
          value={inputText}
          onChangeText={text => {
            if (text == '') setParentCommentId('');
            setInputText(text);
            setCommentText(text);
          }}
        />
        <Pressable style={styles.sendButton} onPress={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default CommentForm;
