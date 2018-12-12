function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

      //create new button
      let button = document.createElement('button');

      //create text for button
      let buttonText = document.createTextNode('Delete');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      //add text to button
      button.appendChild(buttonText);

      //attach button to the li
      newLi.appendChild(button);

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';

      button.addEventListener('click', toDoList.removeChild(toDoList.li)
    );
 });

  }

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
