 
 
    (function(){
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDocNVDFFd5iGSBMemV2DY032hrGmVntXw",
    authDomain: "destiny-college-985e7.firebaseapp.com",
    databaseURL: "https://destiny-college-985e7.firebaseio.com",
    projectId: "destiny-college-985e7",
    storageBucket: "destiny-college-985e7.appspot.com",
    messagingSenderId: "678266188322",
    appId: "1:678266188322:web:f146ce2c0d33b321"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   //Link the variables to their respective elements
   const email_txt = document.getElementById("email_txt");
   const password_txt = document.getElementById("password_txt");
   const login_btn = document.getElementById("login_btn");
 

    //Add event listener to login button
  login_btn.addEventListener("click", e=>{

    //Pass the values of the form fields to the variables
    const email = email_txt.value;
    const pass = password_txt.value;
 
    const auth = firebase.auth();
 
    //Sign in to account
    const promise = auth.signInWithEmailAndPassword(email,pass)
    .catch(function(error){
       var errorCode = error.code;
       
       if(errorCode == "auth/invalid-email"){
          window.alert("Invalid Email");
       } else if(errorCode == "auth/user-not-found"){
          window.alert("User not found. Please sign Up.");
       } else if(errorCode == "auth/wrong-password"){
          window.alert("Wrong Password!");
       }
       
       window.alert(errorCode);
    });
 
    //Check for authentication State changes
   firebase.auth().onAuthStateChanged(function(user){
      if(user){
          window.location = "homepage.html"
      }else {
         window.alert('User logged out!');
      }
   });
 
   });
}()); 

