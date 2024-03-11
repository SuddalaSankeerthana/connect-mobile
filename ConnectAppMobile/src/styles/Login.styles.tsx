import {Platform, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
 mainContainer: {
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
 },
 rectangle: {
  height: '100%',
  width: '100%',
 },
 vectorStyle:
 {
  height:90,
  width:150,
 },
 caption:
 {
    color:Platform.OS==='android'?'black':'black'
 },
 vectorContainer:
 {
// backgroundColor:'black',
// marginTop:120,
width:200,
 },
 loginMainContainer: {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'center',
  width: '85%',
  height: '70%',
  paddingTop:'50%',
  alignContent: 'space-between',
 },
 vectorStyle2:
 {
height:150,
width:200,
marginTop:165,
marginLeft:120
 },
 backgroundEffect:
 {
width:'95%',
height:'110%',

 },
 logoTitle: {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  alignContent: 'space-between',
  paddingBottom:10
 },
 logo: {
  width: 35,
  height: 35,
  marginRight: '1%',
 },
 title: {
  fontWeight: '800',
  color: '#43A5EB',
  fontSize: 20,
 },
 subtitle: {
  color: '#43A5EB',
  fontSize: 12,
  margin: 2,
 },
 container: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:'20%',
 },
 connect: {
  color: 'black',
  fontWeight: '600',
  paddingBottom: '7%',
  fontSize: 25,
 },
 inputField: {
  backgroundColor: '#43A5EB12',
  width: 250,
 },
 inputLabels: {
  color: '#646060',
  margin: 5,
 },
 email: {
  height: '10%',
 },
 password: {
  height: '10%',
 },
 loginButton: {
  display: 'flex',
  textAlign: 'center',
  backgroundColor: '#2E97E2',
  color: 'aliceblue',
  fontWeight: '400',
  marginTop: 50,
  marginBottom: 20,
  marginLeft:50,
  padding: 10,
  width: 120,
 },
 noAccount: {
  display: 'flex',
  flexDirection: 'row',
 },
 signUp: {
  color: '#43A5EB',
 },
 emailIcon: {
  width: 20,
  height: 10,
  alignSelf: 'center',
  margin: '2%',
 },
 passwordIcon: {
  width: 20,
  height: 15,
  alignSelf: 'center',
  margin: '2%',
 },
 input: {
  display: 'flex',
  flexDirection: 'row',
  height: 40,
 },
 iconContainer: {
  display: 'flex',
  backgroundColor: '#43A5EB12',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 3,
  height: 40,
 },
});