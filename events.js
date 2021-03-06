// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()

  // Your turn! Create a new function called `two`, then call it from here.
  two();
  three();
  four();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE
function two () {
  // Find element with id two
  var two = document.getElementById('two');

  // Add event listener to it
  two.addEventListener('mouseenter', makeGreen);

  // Change color to white when mouseleave
  two.addEventListener('mouseleave', makeWhite);
}
// CREATE FUNCTION three HERE
function three() {
  // Find element with id three
  var three = document.getElementById('three');

  // Add event listener to it
  three.addEventListener('mouseenter', makeOrange);

  // Change color to white when mouseleave
  three.addEventListener('mouseleave', makeWhite);
}
// CREATE FUNCTION four HERE
function four() {
  var four = document.getElementById('four');
  four.addEventListener('click', toggleBlack);
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeOrange(evt) {
  evt.target.style.backgroundColor = 'orange'
}

function toggleBlack(evt) {
  if (evt.target.style.backgroundColor != 'black') {
    evt.target.style.backgroundColor = 'black';
  } else {
    evt.target.style.backgroundColor = 'white';
  }
}
