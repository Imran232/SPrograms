//var item=document.querySelector('.list-group-item');
//item.style.color='green';
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';
//var Thirditem=document.querySelector('.list-group-item:nth-child(3)');
//Thirditem.style.color='#0000';
//var odd=document.querySelectorAll('.li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
 //   odd[i].style.backgroundColor='#00ff00';
//}
var itemList=document.querySelector('#items');
//parentNode

//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello';

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textcontent='Hello1';

var newDiv=document.createElement('div');

newDiv.className='hello';

newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);