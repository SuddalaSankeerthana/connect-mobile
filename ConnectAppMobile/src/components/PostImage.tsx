import {Image, ImageBackground, View} from 'react-native';
import {styles} from '../styles/HomeScreenBodyStyles';
import React, {useRef} from 'react';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

export function PostImage({image}: {image: string}) {
  const doubleTapRef = useRef();
  return (
    <>
      <View>
        <GestureHandlerRootView>
          <TapGestureHandler waitFor={doubleTapRef}>
            <TapGestureHandler
              ref={doubleTapRef}
              numberOfTaps={2}
              onActivated={() => console.log('Double tap')}
              waitFor={doubleTapRef}>
              <View>
                <ImageBackground source={{uri: image}} style={styles.image}>
                  <Image
                    source={require('../assets/heart.png')}
                    style={{
                      width: 50,
                      height: 50,
                    }}></Image>
                </ImageBackground>
              </View>
            </TapGestureHandler>
          </TapGestureHandler>
        </GestureHandlerRootView>
      </View>
    </>
  );
}
