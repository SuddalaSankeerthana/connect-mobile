// import React, {useCallback, useRef} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// import {
//   TapGestureHandler,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';

// const AnimatedImage = Animated.createAnimatedComponent(Image);

// function App() {
//   const scale = useSharedValue(0);
//   const opacity = useSharedValue(1);

//   const doubleTapRef = useRef();

//   const rStyle = useAnimatedStyle(() => ({
//     transform: [{scale: Math.max(scale.value, 0)}],
//   }));

//   const rTextStyle = useAnimatedStyle(() => ({
//     opacity: opacity.value,
//   }));

//   const onDoubleTap = useCallback(() => {
//     scale.value = withSpring(1, undefined, isFinished => {
//       if (isFinished) {
//         scale.value = withDelay(500, withSpring(0));
//       }
//     });
//   }, []);

//   const onSingleTap = useCallback(() => {
//     opacity.value = withTiming(0, undefined, isFinished => {
//       if (isFinished) {
//         opacity.value = withDelay(500, withTiming(1));
//       }
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
//         <TapGestureHandler
//           maxDelayMs={250}
//           ref={doubleTapRef}
//           numberOfTaps={2}
//           onActivated={onDoubleTap}>
//           <Animated.View>
//             <ImageBackground
//               source={require('./assets/image.jpeg')}
//               style={styles.image}>
//               <AnimatedImage
//                 source={require('./assets/heart.png')}
//                 style={[
//                   styles.image,
//                   {
//                     shadowOffset: {width: 0, height: 20},
//                     shadowOpacity: 0.35,
//                     shadowRadius: 35,
//                   },
//                   rStyle,
//                 ]}
//                 resizeMode={'center'}
//               />
//             </ImageBackground>
//             <Animated.Text style={[styles.turtles, rTextStyle]}>
//               🐢🐢🐢🐢
//             </Animated.Text>
//           </Animated.View>
//         </TapGestureHandler>
//       </TapGestureHandler>
//     </View>
//   );
// }

// export default () => {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <App />
//     </GestureHandlerRootView>
//   );
// };

// const {width: SIZE} = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: SIZE,
//     height: SIZE,
//   },
//   turtles: {fontSize: 40, textAlign: 'center', marginTop: 30},
// });
import React, {Component} from 'react';
import {View} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
export class PressBox extends Component {
  doubleTapRef = React.createRef();
  onDoubleTap = (event: {nativeEvent: {state: number}}) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Hey single tap!');
    }
  };
  render() {
    return (
      <TapGestureHandler
        onHandlerStateChange={this.onDoubleTap}
        waitFor={this.doubleTapRef}>
        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: '#28b5b5',
              marginTop: 22,
            }}
          />
        </TapGestureHandler>
      </TapGestureHandler>
    );
  }
}
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
