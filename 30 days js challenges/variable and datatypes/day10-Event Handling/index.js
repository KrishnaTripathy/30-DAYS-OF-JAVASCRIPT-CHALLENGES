// Activity 1 : Basic Event Handling 

// 1. Add a click event listener to a button that changes the text content of a paragraph.

let btn = document.getElementById("btn");
let paragraph = document.getElementById("myParagraph");
btn.addEventListener('click', ()=>{
  paragraph.textContent = 'my new paragraph';
})

// 2. Add a double-click event listener to an image that toggles its visibility.

let img = document.getElementById("img");
img.addEventListener("dblclick", () =>{
  img.classList.toggle('hidden');
});



// Activity 2 : Mouse Events

// 1.Add a mouseover event listener to an element that changes its background color.

let color = document.getElementById("color");
color.addEventListener("mouseover",()=>{
    color.style.backgroundColor = 'lightblue';
})


// 2. Add a mouseout event listener to an element that resets its background color.

color.addEventListener("mouseout",()=>{
    color.style.backgroundColor = "green";
});



// Activity 3 : Keyboard Events 

// 1.Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.getElementById("input");

input.addEventListener('keydown',(event)=>{
    console.log(`key pressessed: ${event.key}`);
})

// Inside the callback function, event is an object that contains information about the event. event.key contains the value of the key that was pressed.
// keydown event is triggered whenever a key is pressed while the input field is focused.


// 2.Add a keyup event listener to an input field that displays the current value in a paragraph.

const input1 = document.getElementById("input");
const paragraph1 =document.getElementById("myParagraph");

input1.addEventListener("keyup",()=>{
    // Display the current value of the input field in the paragraph
    paragraph1.textContent = `current value: ${input1.value}`;
});

// This line adds a keyup event listener to the input element. The keyup event is triggered every time the user releases a key while typing in the input field.



// Activity 4 : Form Events 

// 1. Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("myForm");
form.addEventListener('submit',(event)=>{
event.preventDefault();
console.log("Name:", form.name.value);
console.log("Email:",form.email.value);
});


// 2. Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.getElementById("mySelect");
const paragraph2 = document.getElementById("myParagraph");

select.addEventListener('change',()=>{
    paragraph2.textContent = `Selected value: ${select.value}`;
})





// Activity 5 : Event Delegation 

// 1. Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("myList");

list.addEventListener('click',(event)=>{
    if(event.target.tagName === 'LI'){
        console.log(`clicked item:${event.target.textContent}`)
    }
})



// 2. Add an event listener to a parent element that listens for events from dynamically added child elements.

const parentDiv = document.getElementById("parentDiv");
const addButton = document.getElementById("addButton");

parentDiv.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON'){
        console.log(`clicked button: ${event.target.textContent}`);
    }
});

addButton.addEventListener('click',()=>{
    const newButton = document.createElement('button');
    newButton.textContent = `Button ${parentDiv.children.length + 1}`;
    parentDiv.appendChild(newButton);
});


// Event Delegation: Uses a single event listener on the parent element to handle clicks on dynamically added child elements.
// Dynamically Add Elements: Demonstrates how to dynamically add child elements and have them recognized by the event listener.


// Single Listener: Uses one event listener on the parent element to manage events for all child elements, including dynamically added ones.
// Direct Handling: Directly handles clicks and logs the text content of the clicked buttons in a straightforward way.