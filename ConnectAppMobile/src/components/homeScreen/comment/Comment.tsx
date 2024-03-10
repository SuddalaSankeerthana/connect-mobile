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

import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CommentDataType, ReplyDataType} from '../../../types/CommentDataType';
import {PostType} from '../Body';
import CommentForm from './CommentForm';
import Modal from 'react-native-modal';
import {getHostName} from '../../../utils/getHostName';

const Comment = ({post}: {post: PostType}) => {
  const windowHeight = Dimensions.get('window').height;
  const [isModalVisible, setModalVisible] = useState(false);
  const [commentsData, setCommentsData] = useState<CommentDataType[]>([]);
  const [commentText, setCommentText] = useState('');
  const [selectedUsername, setSelectedUsername] = useState('');
  const [parentCommentId, setParentCommentId] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyId, setShowReplyId] = useState<number | null>(null);
  const [updateComments, setUpdateComments] = useState(false);

  const handleIconPress = async () => {
    setModalVisible(true);
    // await fetchCommentsData();
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const response = await fetch(
          `http://${getHostName()}:8080/homepage/get-comments?postId=${
            post.PostId
          }`,
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
    fetchCommentsData();
  }, [isModalVisible, updateComments]);

  const handleComment = (username: string) => {
    setSelectedUsername(username);
    setCommentText(`@${username} `);
  };

  const handleViewComments = (index: number) => {
    setShowReplies(true);
    setShowReplyId(index);
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
          <View style={[styles.modalContainer, {height: windowHeight * 0.85}]}>
            <Pressable onPress={closeModal} style={styles.closeIconContainer}>
              <View>
                <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} />
              </View>
            </Pressable>
            <View>
              <View
                style={{
                  height: windowHeight * 0.6,
                  width: windowHeight * 0.35,
                }}>
                <ScrollView>
                  <View style={{height: '100%'}}>
                    {commentsData.map((comment: any, index: number) => {
                      const currentComment = comment[1];
                      return (
                        <View key={index}>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              paddingVertical: 8,
                            }}>
                            <Image
                              source={{uri: currentComment.ProfileImageAddress}}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                                marginRight: 10,
                              }}
                            />
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}>
                              <View
                                style={{display: 'flex', flexDirection: 'row'}}>
                                <Text
                                  style={{
                                    paddingRight: 10,
                                    fontWeight: 'bold',
                                  }}>
                                  {currentComment.Username}
                                </Text>
                                <Text>{currentComment.CommentMessage}</Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => {
                                  handleComment(currentComment.Username);
                                  setParentCommentId(currentComment.CommentId);
                                }}>
                                <Text style={{color: 'dodgerblue', padding: 5}}>
                                  Reply
                                </Text>
                              </TouchableOpacity>
                              {showReplyId != index &&
                                currentComment.Replays && (
                                  <TouchableOpacity
                                    onPress={() => {
                                      handleViewComments(index);
                                      setShowReplyId(index);
                                    }}>
                                    <Text
                                      style={{color: 'grey', paddingLeft: 5}}>
                                      _____view more replies
                                    </Text>
                                  </TouchableOpacity>
                                )}
                            </View>
                          </View>
                          {currentComment.Replays &&
                            showReplyId == index &&
                            showReplies && (
                              <View>
                                {currentComment.Replays.map(
                                  (
                                    reply: ReplyDataType,
                                    replyIndex: number,
                                  ) => (
                                    <View
                                      key={replyIndex}
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        paddingLeft: 50,
                                        paddingBottom: 10,
                                      }}>
                                      <View
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                        }}>
                                        <Image
                                          source={{
                                            uri: reply.ProfileImageAddress,
                                          }}
                                          style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 50,
                                            marginRight: 10,
                                          }}
                                        />
                                        <View
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                          }}>
                                          <View
                                            style={{
                                              display: 'flex',
                                              flexDirection: 'row',
                                            }}>
                                            <Text
                                              style={{
                                                paddingRight: 10,
                                                fontWeight: 'bold',
                                              }}>
                                              {reply.Username}
                                            </Text>
                                            <Text
                                              style={{
                                                display: 'flex',
                                              }}>
                                              {reply.CommentMessage}
                                            </Text>
                                          </View>

                                          <TouchableOpacity
                                            onPress={() => {
                                              handleComment(reply.Username);
                                              setParentCommentId(
                                                reply.ParentCommentId,
                                              );
                                            }}>
                                            <Text style={{color: 'dodgerblue'}}>
                                              Reply
                                            </Text>
                                          </TouchableOpacity>
                                        </View>
                                      </View>
                                    </View>
                                  ),
                                )}
                              </View>
                            )}
                          {showReplyId == index && (
                            <TouchableOpacity
                              onPress={() => {
                                setShowReplyId(null);
                                setShowReplies(false);
                              }}>
                              <Text
                                style={{
                                  paddingLeft: 50,
                                  paddingBottom: 10,
                                  color: 'grey',
                                }}>
                                Hide replies.....
                              </Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
            <CommentForm
              commentText={commentText}
              selectedUsername={selectedUsername}
              setCommentText={setCommentText}
              parentCommentId={parentCommentId}
              setParentCommentId={setParentCommentId}
              post={post}
              setUpdateComments={setUpdateComments}
              handleIconPress={handleIconPress}
            />
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default Comment;
