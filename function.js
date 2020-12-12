function connectAll() {
    var formData = readForm()
    display(formData)
    //onClick()
    //removeElement()
}
function readForm() {
var formData = document.getElementById("textarea").value;
return  formData
}
function display(data) {
let newDiv = document.createElement('div');
newDiv.innerHTML=data;
var list = document.getElementById("test");
list.insertBefore(newDiv, list.childNodes[0])
}


/*function onClick(){
let newSpan = document.createElement('div');
newSpan.id="delco";
newSpan.innerHTML="deleteeeeeeeeeeeeeeee";
document.body.appendChild(newSpan)
var list = document.getElementById("delco");
list.insertBefore(newSpan, list.childNodes[0]);
}








/*function display(data) {
    let newDiv = document.createElement('div');
    newDiv.id="test";
    newDiv.innerHTML=data;
    document.body.appendChild(newDiv)
    var list = document.getElementById("test");
    list.insertBefore(newDiv, list.childNodes[0]);
    
    }*/



