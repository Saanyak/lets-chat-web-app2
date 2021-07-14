var firebaseConfig = {
  apiKey: "AIzaSyCsdt_3tRRRdOPL3Af-eS3PgpGvaQC2BYI",
  authDomain: "lets-chat-web-app-4a2da.firebaseapp.com",
  projectId: "lets-chat-web-app-4a2da",
  storageBucket: "lets-chat-web-app-4a2da.appspot.com",
  messagingSenderId: "723838462056",
  appId: "1:723838462056:web:02834a03531a9d7ac033dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_room() {
  var roomname = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
    purpose : "adding room"
  });
}