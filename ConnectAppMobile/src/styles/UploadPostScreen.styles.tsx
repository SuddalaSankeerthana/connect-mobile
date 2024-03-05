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
    bottom: 1,
  },
  uploadIcon: {
    alignItems: 'center',
    marginVertical: 5,
  },
  supportedFormatsText: {
    color: 'rgba(103, 103, 103, 1)',
  },
  uploadImageText: {
    marginVertical: 5,
  },
  blueBox: {
    height: 120,
    width: 300,
    display: 'flex',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#B2CFF1',
    backgroundColor: '#EEF6FF',
    marginTop:290,
    justifyContent: 'center',
    alignItems:'center'

  },
  SafeAreaView: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 350,
  },
  selectedImage: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'cover',
  },
  textInputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 70,
    marginLeft: 20,
    width: '90%',
    height: 50,
    bottom: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
