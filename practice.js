
//AÑADE LOS ENLACES FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAWb2Zhgt3b4JKTvVewa7CznpFAjIadnvw",
    authDomain: "pruebaclase93-ff5a4.firebaseapp.com",
    projectId: "pruebaclase93-ff5a4",
    storageBucket: "pruebaclase93-ff5a4.appspot.com",
    messagingSenderId: "1011358372818",
    appId: "1:1011358372818:web:4fb1e45bc50e3b03436e0b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
});
  }