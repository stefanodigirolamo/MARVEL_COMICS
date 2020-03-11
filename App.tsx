import React from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
