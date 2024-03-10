import {Image, ImageBackground, View} from 'react-native';
import {styles} from '../../styles/HomeScreenBodyStyles';
import React, {useContext, useRef, useState} from 'react';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

import {LikeContext} from './LikeContext';
import {updateLikeStatus} from '../../handlers/handlerLike';
import {PostContext} from './PostContext';
import {CurrentUserContext} from '../CurrentContext';

export function PostImage({image}: {image: string}) {
  const likeContext: any = useContext(LikeContext);
  const postContext = useContext(PostContext);
  const currentUser = useContext(CurrentUserContext);
  const onDoubleTap = () => {
    setIsShow(true);
    if (!likeContext.likeStatus) {
      likeContext.setLikesCount(likeContext.likesCount + 1);
      updateLikeStatus(
        likeContext.setLikeStatus,
        likeContext.likeStatus,
        postContext.PostId,
        currentUser.user.userId,
      );
    }
    setTimeout(() => {
      setIsShow(false);
    }, 1500);
    console.log('Double tap');
  };
  const doubleTapRef = useRef();
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <View>
        <GestureHandlerRootView>
          <TapGestureHandler waitFor={doubleTapRef}>
            <TapGestureHandler
              ref={doubleTapRef}
              numberOfTaps={2}
              onActivated={onDoubleTap}
              waitFor={doubleTapRef}>
              <View >
                <ImageBackground
                  testID="post-image"
                  source={{uri: image}}
                  resizeMode="cover"
                  imageStyle={{borderRadius:20}}
                  style={styles.image}>
                  {isShow ? (
                    <Image
                      source={require('../../assets/heart.png')}
                      style={{
                        width: 100,
                        height: 100,
                      }}></Image>
                  ) : (
                    <View></View>
                  )}
                </ImageBackground>
              </View>
            </TapGestureHandler>
          </TapGestureHandler>
        </GestureHandlerRootView>
      </View>
    </>
  );
}
