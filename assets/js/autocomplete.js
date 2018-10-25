
function language() {
  this.list = ["java", "javascript", "c", "python"];
}

function populate(sourceString) {
  var myList = document.getElementById(sourceString); //getting input data in string format in variable sorceString
  var sourceObject = eval(sourceString); //construct object by converting string in obj using build in function
  var obj = new sourceObject(); //construct obj #language

  // Add empty array
  var options = '';

  for( var i=0; i < obj.list.length; i++) {
    options += '<option value = "'+obj.list[i] + '" />';
  }

  myList.innerHTML = options;

}


// // close list
// var closebtns = document.getElementsByClassName("close");
// var i;

// /* Loop through the elements, and hide the parent, when clicked on */
// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//   this.parentElement.style.display = 'none';
// });
// }