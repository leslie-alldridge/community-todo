// Adding user input to screen when save is pressed 
function saveTodo(textInput){
    var userInput = document.getElementById('input').value;
    console.log(userInput);
    var c = document.createElement('li');
    var t = document.createTextNode(userInput);
    c.appendChild(t);
    document.getElementById('todoList').appendChild(c);
}
// alert to test the remove button is hooked up
function removeTest(){
    alert("remove clicked");
}