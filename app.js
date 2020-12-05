const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

function attachListItemButtons(li){
  let remove = document.createElement('button');
  remove.className = "remove";
  remove.textContent = 'Remove';
  li.appendChild(remove);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
}
// adds buttons to each list element already in place
for(let i = 0; i < lis.length;i++){
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if(event.target.className == 'remove'){
      let li = event.target.parentElement;
      console.log(event.target.parentElement);
      let ul = li.parentElement;
      ul.removeChild(li);
    }
    if(event.target.className == 'up'){
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevLi){
        ul.removeChild(li);
        ul.insertBefore(li, prevLi);
      }
    }
    if(event.target.className == 'down'){
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if(nextLi){
        ul.removeChild(nextLi);
        ul.insertBefore(nextLi, li);
      }
    }
  }
});


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';                        
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
    
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerText = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementById('list-task');
  let li = document.createElement('li');
  li.textContent = addItemInput.value + ' ';
  li.className = 'list-item';
  li.style = "display: block;";
  addItemInput.value = '';
  attachListItemButtons(li);
  ul.appendChild(li);
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementById('list-task');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
  
  
  
  