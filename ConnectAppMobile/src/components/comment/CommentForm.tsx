import React from 'react';
import {View, Image, Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../styles/HomeScreenBodyStyles';

interface CommentFormProps {
  userProfile: string;
  userName: string
}

const CommentForm: React.FC<CommentFormProps> = ({userProfile, userName}) => {
  return (
    <View style={styles.commentFormContainer}>
      <Image source={{uri: userProfile}} style={styles.currentUserProfile} />
      <View style={styles.commentInputContainer}>
        <TextInput
          placeholder={`Replying to @ ${userName}`}
          style={styles.replyInput}
            // value={commentText}
            // onChangeText={handleChange}
        />
        <Pressable style={styles.postButton}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default CommentForm;
