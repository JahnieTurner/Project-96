const firebaseConfig = {
      apiKey: "AIzaSyBj4R-md8VeVgKHSxNnxtDvdnCF2lSjrok",
      authDomain: "kwitter-a3485.firebaseapp.com",
      databaseURL: "https://kwitter-a3485-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3485",
      storageBucket: "kwitter-a3485.appspot.com",
      messagingSenderId: "186202324458",
      appId: "1:186202324458:web:142ede6d310e366000c693"
};

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("username")
room_name = localStorage.getItem("room_name")

function Send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function Logout() {
      window.location = "index.html"
}