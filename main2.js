function myfunc(event){
    event.preventDefault();
    var Name=document.getElementById("name").value;
    var Email=document.getElementById("email").value;

    //localStorage.setItem('Name',Name);
    //localStorage.setItem('Email',Email);
    var obj={
        Name,
        Email

    }
    localStorage.setItem(obj.Email,JSON.stringify(obj))
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    var parentElem=document.getElementById('my-form');
    var ChildElem=document.createElement('li');
    ChildElem.textContent=obj.Name+'-'+obj.Email;
    parentElem.appendChild(ChildElem)
}