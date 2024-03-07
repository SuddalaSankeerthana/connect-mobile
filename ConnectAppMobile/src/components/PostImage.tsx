import {Image, ImageBackground, View} from 'react-native';
import {styles} from '../styles/HomeScreenBodyStyles';
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import LikeButton from './LikeButton';
import {LikesContext} from './LikeContext';

export function PostImage({image}: {image: string}) {
  const likeContext = useContext(LikesContext);
  const onDoubleTap = () => {
    setIsShow(true);
    if (!likeContext.likeStatus) {
      likeContext.setLikesCount(likeContext.likesCount + 1);
      likeContext.setLikeStatus(!likeContext.likeStatus);
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
              <View>
                <ImageBackground
                  testID="post-image"
                  source={{uri: image}}
                  style={styles.image}>
                  {isShow ? (
                    <Image
                      source={require('../assets/heart.png')}
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
