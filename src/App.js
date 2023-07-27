import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import firebaseConfig from './services/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const App=()=> {
  // useEffect(() => {
  //   firestore()
  //     .collection('users')
  //     .add({
  //       name: 'Ada Lovelace',
  //       age: 30,
  //     })
  //     .then(() => {
  //       console.log('User added!');
  //     });
  // }, []);
  // return null;
}

export default App;