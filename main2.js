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
    var ChildElem=document.createElement('form');
    ChildElem.textContent=obj.Name+'-'+obj.Email;
    var deleteBtn=document.createElement('input')
    var editBtn=document.createElement('input')
    editBtn.type='button'
    editBtn.value='Edit'
    deleteBtn.type='button'
    deleteBtn.value='Delete'
    deleteBtn.onClick=()=>
    {
        localStorage.removeItem(obj.Email)
        parentElem.removeChild(ChildElem)
    }
    ChildElem.appendChild(deleteBtn)
    parentElem.appendChild(ChildElem)
}

