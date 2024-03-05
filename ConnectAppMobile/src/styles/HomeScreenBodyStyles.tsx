import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postConitainer: {
    height: 400,
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#43A5EB21',
    borderRadius: 30,
    padding:10,
    margin: 30,
    marginBottom:0,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    alignItems:'center',
   
  },
  profileImage: {
    height: 50,
    width: 50,
    marginRight:5,
   marginLeft:20,
    borderRadius:25
  },
  image: {
    height: 250,
    width: 300,
    marginRight:30
  },
  imageContainer: {
    height: 300,
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  homeContainer: {
   
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
});
