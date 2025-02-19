import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyA0-BtBrKT-f80qn6bxPVn0QI328A_E5MQ",
  // authDomain: "ticketly-32629.firebaseapp.com",
  // projectId: "ticketly-32629",
  // storageBucket: "ticketly-32629.appspot.com",
  // messagingSenderId: "1002791695132",
  // appId: "1:1002791695132:web:7553372c769c1c367240d9",
  // measurementId: "G-9QCW7H7MRC"

//   apiKey: "AIzaSyCbTeR2nW0ji5wBtNRfujstbufDwOslByQ",
//  authDomain: "eventhubaitr.firebaseapp.com",
//  projectId: "eventhubaitr",
//  storageBucket: "eventhubaitr.appspot.com",
//  messagingSenderId: "591999821796",
//  appId: "1:591999821796:web:108d9068b33195ee3409f1",
//  measurementId: "G-7Z8P27C26Y"

apiKey: "AIzaSyCgiCeBlTFc0igrLSOySQhV8k7tkpnSRRA",
  authDomain: "local-community12.firebaseapp.com",
  databaseURL: "https://local-community12-default-rtdb.firebaseio.com",
  projectId: "local-community12",
  storageBucket: "local-community12.appspot.com",
  messagingSenderId: "156747922712",
  appId: "1:156747922712:web:1d8efb586d966b1cc8326d",
  measurementId: "G-C2EHKF2DES"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
