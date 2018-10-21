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
  	height: 50,
    borderRadius: 30,
  	justifyContent: 'center',
    backgroundColor: "#7986CB",
    alignItems: 'stretch',
  	marginTop: 15,
    textAlign: "center",
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
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  }
});