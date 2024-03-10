import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postConitainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#43A5EB21',
    borderBlockEndColor: 'black',
    borderRadius: 30,
    paddingTop: 10,
    margin: 25,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 20,
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
    marginBottom: -10,
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
    borderRadius: 20,
  },
  containerStyle: {
    paddingTop: -20,
  },
  inDotStyle: {
    backgroundColor: 'grey',
  },
  dotStyle: {
    width: 10,
    borderRadius: 18,
    backgroundColor: '#0074FF',
  },
  imageContainer: {
    height: 350,
    width: 300,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    color: 'white',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
  },
  commentProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentUsername: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentMessage: {
    color: '#333',
  },
  commentContent: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  commentText: {
    fontSize: 14,
  },
  replyText: {
    color: 'blue',
  },
  repliesContainer: {
    marginLeft: 40,
    marginTop: 10,
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  replyContent: {
    marginLeft: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    position: 'absolute',
    bottom: 10
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImageCommentId: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderColor: '#ccc',
    borderRadius: 20,
  },
});
