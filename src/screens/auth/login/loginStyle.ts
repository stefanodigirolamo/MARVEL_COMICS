import {StyleSheet} from 'react-native'

const loginStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3e3e3e',
    },
    logo: {
      height: 80,
      width: 80,
      marginTop: '5%',
      alignSelf: 'center',
      borderRadius: 6,
    },
    errorMessage: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30,
      marginTop: 25,
    },
    error: {
      color: '#fefefe',
      fontWeight: '400',
      fontSize: 13,
      textAlign: 'center',
    },
    form: {
      marginTop: 40,
      marginHorizontal: 30,
    },
    inputTitle: {
      fontSize: 10,
      textTransform: 'uppercase',
      color: '#fefefe',
    },
    input: {
      borderBottomColor: '#fefefe',
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: '#fefefe',
      marginTop: 10,
    },
    button: {
      marginHorizontal: 53,
      marginTop: 10,
      backgroundColor: '#c9082a',
      borderRadius: 5,
      height: 40,
      justifyContent: 'center',
    },
    buttonText: {
      fontWeight: '600',
      fontSize: 15,
      color: '#fefefe',
      textAlign: 'center',
    },
    greeting: {
      fontSize: 25,
      color: '#fefefe',
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 100,
    },
  });

  export default loginStyle


  