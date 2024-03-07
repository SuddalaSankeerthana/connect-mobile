import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles/HomeScreenBodyStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-native-modal';
import CommentForm from './CommentForm';
import {
  CommentType,
  currentUserData,
  PostDetails,
} from '../../seeder/PostDetails';

interface CommentProps {
  postDetails: PostDetails;
}

export const Comment: React.FC<CommentProps> = ({postDetails}) => {
  const windowHeight = Dimensions.get('window').height;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCommentSubmit = (commentText: string) => {
    console.log('Comment submitted:', commentText);
  };


  return (
    <>
      <TouchableOpacity onPress={handleIconPress}>
        <Image
          source={require('../../assets/commentIcon.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <ScrollView>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={closeModal}
          animationIn="fadeIn"
          animationOut="fadeOut">
          <View style={[styles.modalContainer, {height: windowHeight * 0.8}]}>
            <Pressable onPress={closeModal} style={styles.closeIconContainer}>
              <View>
                <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} />
              </View>
            </Pressable>
          </View>
          <CommentForm userProfile={currentUserData.profilePic} 
          userName={postDetails.name} 
          />
        </Modal>
      </ScrollView>
    </>
  );
};
