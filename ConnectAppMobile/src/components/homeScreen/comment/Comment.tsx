import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {styles} from '../../../styles/HomeScreenBodyStyles';
import Modal from 'react-native-modal';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CommentDataType, ReplyDataType} from '../../../types/CommentDataType';
import {PostType} from '../Body';
import {fetchData} from '../../../utils/fetchData';
import CommentForm from './CommentForm';

const Comment = ({post}: {post: PostType}) => {
  const windowHeight = Dimensions.get('window').height;
  const [isModalVisible, setModalVisible] = useState(false);
  const [commentsData, setCommentsData] = useState<CommentDataType[]>([]);
  const [commentText, setCommentText] = useState('');
  const [selectedUsername, setSelectedUsername] = useState('');
  const [parentCommentId, setParentCommentId] = useState('');
  const [showcomments, setShowcomments]= useState(Number);

  const handleIconPress = async () => {
    setModalVisible(true);
    await fetchData();
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/homepage/get-comments?postId=${post.PostId}`,
        ).then(res => {
          return res.json();
        });

        const commentData: CommentDataType[] = response.comments;
        const array: CommentDataType[] = Object.entries(commentData).map(
          (entry: any) => {
            return entry;
          },
        );

        setCommentsData(array);
      } catch (error) {
        console.error('Error fetching the post details:', error);
      }
    };
    fetchData();
  }, [isModalVisible]);

  const handleComment = (username: string) => {
    setSelectedUsername(username);
    setCommentText(`@${username} `);
  };

  const handleShowComments=()=>{

  }

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
          animationOut="fadeOut"
          backdropColor="white">
          {commentsData.map((comment: any, index: number) => {
            const currentComment = comment[1];

            return (
              <View key={index}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image
                    source={{uri: currentComment.ProfileImageAddress}}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  />
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{paddingRight: 10, fontWeight: 'bold'}}>
                        {currentComment.Username}
                      </Text>
                      <Text>{currentComment.CommentMessage}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        handleComment(currentComment.Username);
                        setParentCommentId(currentComment.CommentId);
                      }}>
                      <Text>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setShowcomments(index)}>
                      <Text>View more comments......</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                      
                {showcomments=== index && currentComment.Replays && (
                  <View>
                    {currentComment.Replays.map((reply: ReplyDataType) => (
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          paddingLeft: 50,
                          padding: 10,
                        }}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Image
                            source={{uri: reply.ProfileImageAddress}}
                            style={{width: 30, height: 30, borderRadius: 50}}
                          />
                          <View
                            style={{display: 'flex', flexDirection: 'column'}}>
                            <View
                              style={{display: 'flex', flexDirection: 'row'}}>
                              <Text style={{paddingRight: 10}}>
                                {reply.Username}
                              </Text>
                              <Text>{reply.CommentMessage}</Text>
                            </View>

                            <TouchableOpacity
                              onPress={() => {
                                handleComment(reply.Username);
                                setParentCommentId(reply.ParentCommentId);
                              }}>
                              <Text>Reply</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
                <TouchableOpacity onPress={()=> setShowcomments(index)}>
                  <Text>Hide replies.....</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <CommentForm
            commentText={commentText}
            selectedUsername={selectedUsername}
            setCommentText={setCommentText}
            parentCommentId={parentCommentId}
            setParentCommentId={setParentCommentId}
            post={post}
          />
        </Modal>
      </ScrollView>
    </>
  );
};

export default Comment;
