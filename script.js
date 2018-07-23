var toDoList = []; // Global array to contain the uncompleted items
var completedToDoList = [];
var num = 1;
// Adding user input to screen when save is pressed 
function saveTodo(textInput){
	var userInput = document.getElementById('input').value;
	if(userInput!== ""){
		console.log("User added " + userInput);
		var c = document.createElement('li');
		var t = document.createTextNode(userInput);
		c.appendChild(t);
		document.getElementById('todoList').appendChild(c);
		document.getElementById("input").value = ""; //empties the textbox		
		//need to append x to a span
		var span = document.createElement("SPAN");
		var xSymbol = document.createTextNode("\u00D7");
  		span.className = 'removeItem' + num;
  		span.appendChild(xSymbol);
		c.appendChild(span);
		lineItemAction(); 
		//array actions
		addToArray(userInput);
		num++;
	}


}
// Removes the To-Do item from the list without placing it into the completed section.
// Haven't included code to handle numbers that exceeds the size of the list.
function removeTest(textInput){
	var userInput = document.getElementById("input").value - 1;
	if(userInput!== ""){
		if(typeof userInput === "number"){ // <-------- not seeing if it's a number or not.
			removeFromArray(userInput);
		}
		else{
			alert("Please enter the number of task.");
		}
		document.getElementById("input").value = "";
		var list = document.getElementById("todoList");
		list.removeChild(list.childNodes[userInput]);   
	}
}

// Moves list items to a separate array under the "Completed Section"
// Current issue with this function is that it's returning any value with '0'  <---------ISSUE
function completeToDo(){
	var userInput = document.getElementById("input").value - 1;
	if(userInput!== ""){
		if(typeof userInput === "number"){ // <-------- not seeing if it's a number or not.
			moveToCompleteArray(userInput);
		}
		else{
			alert("Please enter the number of task.");
		}
		document.getElementById("input").value = "";

		var list = document.getElementById("todoList");
		var target = list.childNodes[userInput];
		var c = document.createElement("li");
		var t = document.createTextNode(target.value);
		c.appendChild(t);
		document.getElementById("todoCompleted").appendChild(c);
		
		list.removeChild(target);   
	}
}

// Adds selected item to the array and prints array into console
function addToArray(item){
	toDoList.push(item);
	console.log("Current To-Do-List items")
	toDoList.forEach(function(entry){
		console.log(entry);
	});
	console.log("**********");
}

function removeFromArray(number){
	toDoList.splice(number, 1);
	console.log(number);
	toDoList.forEach(function(entry){
		console.log(entry);
	});
	console.log("**********");
}

function moveToCompleteArray(number){
	completedToDoList.push(toDoList[number]);
	toDoList.splice(number, 1);
	console.log("Current Completed-List items")
	completedToDoList.forEach(function(entry){
		console.log(entry);
	});
	console.log("**********")
}

// at the moment this runs when the user presses Save and listens
// out for someone clicking the x span 

function lineItemAction(){
	var removeItems = document.getElementsByClassName('removeItem' + num);
	var i;
	for (i = 0; i < removeItems.length; i++) {
  		removeItems[i].onclick = function() {
		var lineItem = this.parentElement;
		// what I want to do here is grab the class name and split the text 
		// and number portion, then pass the number through into removeFromArray
		// because class names now have numbers included to identify which one
		//is being clicked for removal.
		lineItem.style.display = "none";
		removeFromArray(num); //needs -1 since array starts at 0
  	}
	}
}


