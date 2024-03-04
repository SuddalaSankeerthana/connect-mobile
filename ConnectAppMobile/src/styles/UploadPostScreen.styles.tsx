import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  uploadText: {
    fontWeight: 'bold',
  },
  crossIcon: {
    alignItems: 'flex-end',
    width: 20,
    height: 20,
    position: 'absolute',
    left: 150,
    bottom:1,
  },
  uploadIcon: {
    alignItems: 'center',
    marginTop: 300,
    marginVertical: 5,
  },
  supportedFormatsText: {
    color: 'rgba(103, 103, 103, 1)',
  },
  uploadImageText: {
    marginVertical: 5,
  },
  blueBox: {
    backgroundColor: 'rgba(238, 246, 255, 1)',
    alignItems: 'center',
    borderColor: 'blue',
    width: 300,
    height: 200,
    padding: 20,
    },
    SafeAreaView: {
     flex:1
  }
});