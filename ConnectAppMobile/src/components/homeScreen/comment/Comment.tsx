import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../../styles/HomeScreenBodyStyles';
import  Modal  from 'react-native-modal';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Comment = () => {
  const windowHeight = Dimensions.get('window').height;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleIconPress}>
        <Image
          source={require('../../../assets/commentIcon.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <ScrollView>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={closeModal}
          animationIn="fadeIn"
          animationOut="fadeOut">
          <View style={[styles.modalContainer, {height: windowHeight * 0.5}]}>
            <Pressable onPress={closeModal} style={styles.closeIconContainer}>
              <View>
                <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} />
              </View>
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default Comment;


