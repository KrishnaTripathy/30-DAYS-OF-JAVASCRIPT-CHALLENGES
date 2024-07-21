// Activity 1 : Selecting and Manipulating Elements

// 1. select an html element by its ID and change its text content.
 
function changeText() {
    var element = document.getElementById('myElement');
    element.textContent = "This is the new meassge";
}

// 2.select an html element by its class and change its background color.
 function changeBackgroundColor(){
    var element =  document.querySelector(".color");
   element.style.backgroundColor = "red";
 }

// Activity 2 : Creating and Appending Elements 

// 1.create a new div element with some text  content and append it to the body.
function appendDiv(){
    var newDiv = document.createElement("div");
    newDiv.textContent = "This is a new div";
    document.body.appendChild(newDiv);
}
// appendChild is used to add a new child element to a specified parent element in the DOM. When you create a new element using document.createElement, it exists in memory but is not yet part of the document. appendChild attaches this new element to the document, making it visible on the web page.

// 2. create a new li element and add it to an existing ul list.

function addListItem(){
    var newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("myList").appendChild(newItem);
}


// Activity 3 : Removing Elements

// 1. select an HTML element and remove it from the DOM. 
function removeElement(){
    var element = document.getElementById("myElement");
    element.remove();
}

// 2. remove the last child of a specific HTML element.

function removeLastChild(){
    document.getElementById("myList").lastElementChild.remove();

}


// Activity 4 : Modifying Attributes and classes

// 1.select an html element and change one of its attributes (eg. src of an img tag).
function changeImageSource(){
    var img = document.getElementById("myImage");
    img.src = "./img2.webp";
}

// 2.Add and remove a css class to / form an HTML element.
function addClass(){
    document.getElementById("myElement").classList.add("highlight");
}
function removeClass(){
    document.getElementById("myElement").classList.remove("highlight");
}


// Activity 5 : Event Handling 

// 1.Add a click event listener to a button that changes the text content of a paragraph .
const button = document.getElementById("myButton");
const element = document.getElementById("myElement");

button.addEventListener("click",()=>{
    element.textContent = "New text";
});

// 2. Add a mouseover event listener to an element that changes its border color.
const color = document.getElementById("color");
color.addEventListener("mouseover", () => {
    color.style.borderColor = "red";
});

color.addEventListener("mouseout",()=>{
    element.style.borderColor = "black";
});