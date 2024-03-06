import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    
  },

  loginMainContainer:{
     display: 'flex',
     justifyContent: 'center',
     flexDirection: 'column',
     alignItems: 'center',
     alignSelf: 'center',
     width:'85%',
     height: '70%',
     alignContent: 'space-between'
  },
  logoTitle:{
     display:'flex',
     alignItems:'center',
     flexDirection: 'row',
     alignContent: 'space-between',     
  },
  logo:{
    width: 35,
    height: 35,
    marginRight: "1%",
  },
  title:{
    fontWeight: '800',
    color: '#43A5EB',
    fontSize: 20
  },
  subtitle:{
    color: '#43A5EB',
    fontSize: 10,
    margin: 2

  },
  container:
  {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: '10%',

  },
  connect:{
    color: 'black',
    fontWeight: '600',
    marginBottom: '7%',
    fontSize: 20,
  },
  inputField:{
   backgroundColor: '#43A5EB12',
   width: 250
  },

  inputLabels:{
    color: '#646060',
    margin: 5
  },
  email:{
    height: '10%',
  },
  password:{
    height: '10%',
  },
  loginButton:{
   display:'flex',
   textAlign: 'center',
   backgroundColor: '#2e97e2',
   color: 'aliceblue',
   fontWeight: '400',
   marginTop: 30,
   marginBottom: 20,
   padding: 10,
   width: 120,
  },
  noAccount:{
   display: 'flex',
   flexDirection: 'row',
  },
  signUp:{
    color: '#43A5EB'
  },
  emailIcon:{
    width: 20,
    height: 10,
    alignSelf: 'center',
    margin: '2%',
  },
  passwordIcon:{
    width: 20,
    height: 15,
    alignSelf: 'center',
    margin: '2%',
  },
  input:{
    display: 'flex',
    flexDirection: 'row',
    height: 40,
  },
  iconContainer:{
    display: 'flex',
    backgroundColor: '#43A5EB12',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 40,
  },
});

