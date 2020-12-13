//connect all function in 1
function connectAll() {
    var formData = readForm();
    display(formData);
    resetForm()
   
    //removeElement()
}

//read input from html
function readForm() {
var formData = document.getElementById("textarea").value;
        return  formData;
}
//display input in new div
function display(data) {
let newDiv = document.createElement('div');//create new div
newDiv.innerHTML=data; //change div to input value
var list = document.getElementById("test");//select div need to manupulate
list.insertBefore(newDiv, list.childNodes[0]);//lis blog newest to the top
}

//resetdata
function resetForm() {
    document.getElementById("textarea").value="";
    
}
