import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB9G8Fk7lmfCizm41CE3pdFNTt1KtTKHAI",
    authDomain: "gallery-8b527.firebaseapp.com",
    databaseURL: "https://gallery-8b527.firebaseio.com",
    projectId: "gallery-8b527",
    storageBucket: "gallery-8b527.appspot.com",
    messagingSenderId: "276003887059"
  };

firebase.initializeApp(config)

const database = firebase.database();

export {database}