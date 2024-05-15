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
