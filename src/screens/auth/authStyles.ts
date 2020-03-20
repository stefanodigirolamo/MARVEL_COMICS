import {StyleSheet} from 'react-native'

const loginStyle = StyleSheet.create({
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
    inputContainer: {
      marginVertical: '5%',
    },
    inputTitle: {
      fontSize: 10,
      textTransform: 'uppercase',
      color: '#fefefe',
      marginHorizontal: '10%',
      paddingVertical: '5%'
    },
    input: {
      borderBottomColor: '#fefefe',
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: '#fefefe',
      marginTop: 10,
      marginHorizontal: '10%'
    },
  });

  export default loginStyle


  