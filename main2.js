function myfunc(event){
    event.preventDefault();
    var Name=document.getElementById("name").value;
    var Email=document.getElementById("email").value;

    localStorage.setItem('Name',Name);
    localStorage.setItem('Email',Email);
}