import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postConitainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#43A5EB21',
    borderBlockEndColor: 'black',
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 40,
    marginTop: 70,
    marginBottom: -45,
    height: 370,
    width: 300,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  dotContainer: {
    marginBottom: -15,
  },
  carousel: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  paginationDot: {
    color: '#0074FF',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pagination: {
    height: 30,
    top: 10,
    display: 'flex',
    alignItems: 'center',
  },
  likeCount: {
    top: 2,
  },
  likeButtonEmpty: {
    marginRight: 2,
  },
  logOutContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Nunito',
  },
  headerProfileContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  headerProfile: {
    height: 30,
    width: 30,
    borderRadius: 20,
    margin: 5,
  },
  addIcon: {
    color: 'white',
  },
  menuBar: {
    color: 'white',
    margin: 2,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 'auto',
    padding: 5,
  },
  logo: {
    height: 25,
    width: 25,
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
    color: 'white',
    marginLeft: 2,
  },
  logoAndTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginEnd: 'auto',
  },
  header: {
    height: 60,
    backgroundColor: '#43A5EB',
    display: 'flex',
    flexDirection: 'row',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  captionContainer: {
    display: 'flex',
    justifyContent: 'center',
    left: 37,
    paddingTop: 25,
    paddingLeft: 12,
    paddingBottom: 20,
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
    top: 15,
    marginLeft: 10,
    paddingLeft: 30,
  },
  heartIcon: {
    padding: 2,
    marginTop: -3,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    marginBottom: -10,
    top: 10,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    marginRight: 5,
    marginLeft: 20,
    borderRadius: 25,
  },
  image: {
    height: 200,
    width: 250,
    left: 0,
    marginTop: 40,

    borderRadius: 20,
  },
  containerStyle: {
    paddingVertical: 20,

    marginTop: -45,
  },
  inDotStyle: {
    backgroundColor: 'grey',
  },
  likeButtonRed: {
    color: 'red',
    borderColor: 'black',
    marginRight: 2,
  },
  dotStyle: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    height: 250,
    width: 300,
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
