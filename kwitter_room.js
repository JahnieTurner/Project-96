// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBj4R-md8VeVgKHSxNnxtDvdnCF2lSjrok",
      authDomain: "kwitter-a3485.firebaseapp.com",
      databaseURL: "https://kwitter-a3485-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3485",
      storageBucket: "kwitter-a3485.appspot.com",
      messagingSenderId: "186202324458",
      appId: "1:186202324458:web:142ede6d310e366000c693"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome " + user_name + "!"

function AddRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            adding: room_name
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div> <br>"
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function RedirectToRoomName(name) {
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}