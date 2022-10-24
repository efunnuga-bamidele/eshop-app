import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSnYwhi1ysdAd5IQxQNfoScdoy59zG3Bg",
    authDomain: "eshop-ab85c.firebaseapp.com",
    projectId: "eshop-ab85c",
    storageBucket: "eshop-ab85c.appspot.com",
    messagingSenderId: "720973385099",
    appId: "1:720973385099:web:98a2f6e586208b9976b38e"
  };

  //initialize firebase
  initializeApp(firebaseConfig)

  //initialize auth
  const auth = getAuth()


  export { auth }