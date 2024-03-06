import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postConitainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#43A5EB21',
    borderBlockEndColor:'black',
    borderRadius: 30,
    paddingTop: 10,
    margin: 25,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },

captionContainer:
{
 display:'flex',
 justifyContent:'center',
 paddingTop:0,
 paddingBottom:20,
 paddingLeft:20,
},
  commentIcon: {
    height: 24,
    width: 28,
    marginLeft: 2,
    marginTop: 1.5,
  },
  likesAndComment: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -20,
    marginLeft: 10,
    marginBottom: 10,
    padding: 5,
  },
  heartIcon: {
    padding: 2,
    marginTop: -3,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    marginBottom:-10,
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    marginRight: 5,
    marginLeft: 20,
    borderRadius: 25,
  },
  image: {
    height: 300,
    width: 280,
    marginRight: 30,
    borderBlockEndColor:'black',
    borderRadius:20
  },
  imageContainer: {
    height: 350,
    width: 300,
    marginRight:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});