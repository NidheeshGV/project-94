
var ffirebaseConfig = {
  apiKey: "AIzaSyCKFHQY8E8fiR-0E5wdoiWDxPPMJGWhRts",
  authDomain: "class-93-3b2c9.firebaseapp.com",
  databaseURL: "https://class-93-3b2c9-default-rtdb.firebaseio.com",
  projectId: "class-93-3b2c9",
  storageBucket: "class-93-3b2c9.appspot.com",
  messagingSenderId: "1033646695273",
  appId: "1:1033646695273:web:f16aca751a95aa659cd3f8"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}