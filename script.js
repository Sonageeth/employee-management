function login(){
    //to set username in local storage
    var username = document.getElementById('uname').value
    console.log(username); //value
    localStorage.setItem('Username',username)
    //redirect to home
    window.location='./login.html'
}