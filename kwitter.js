function Login() {
    username = document.getElementById("text_input_username").value
localStorage.setItem("username", username)
window.location="kwitter_room.html"
}