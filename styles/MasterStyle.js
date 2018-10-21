import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  maincontainer: {
  	flex: 1,
    padding: 10,
    backgroundColor: "#303F9F",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
  	width: 250, 
  	height: 50,
  	backgroundColor: 'lightblue',
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop: 15
  },

  bottomcontainer: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  },
  stretch: {
    flex: 1,
    position: 'absolute',
    width: "100%",
    height: 480,
    bottom: 0
  },
  datePicker:{
    color: "white",
    fontSize: 20
  }
});