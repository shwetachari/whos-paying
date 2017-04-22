// hide results #picked div on dom load
$(document).ready(function(){
  $("#picked").hide();
});

// change last word of h1 to user input
var titleEntered = prompt("What are you paying for?", "Dinner, Drinks, etc.");
var title = titleEntered.toLowerCase();
var mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Who's paying for " + title + "?";

// create empty array to add names from user input
var nameArray = [];
// create global ul variable from HTML ul id="namesList" to add/remove children
var ul = document.getElementById("namesList");
// create global form variable to clear form input after button click
var form = document.getElementById("form");

function addName() {
  var nameEntered = document.getElementById("name").value;
  // capitalize first letter of name on button click
  var name = nameEntered[0].toUpperCase() + nameEntered.substring(1);
  console.log(name);
  //check if name already exists in array, and if it does, alert user and end function
  for (i = 0; i < nameArray.length; i++) {
    if (name == nameArray[i]) {
      alert(name + " already exists!");
      // clear input
      form.reset();
      return;
    }
  }
  // add new name into array and add new name to HTML list
    nameArray.push(name);
    var textName = document.createTextNode(name);
    var li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(textName);
    // li.className = "text-center";
  // console.log array to check functionality
  console.log(nameArray);
  // clear input
  form.reset();
}
function removeName() {
  var nameEntered = document.getElementById("name").value;
  // capitalize first letter of name to match array value
  var name = nameEntered[0].toUpperCase() + nameEntered.substring(1);
  for (i = 0; i < nameArray.length; i++) {
    if (name == nameArray[i]) {
      nameArray.splice(i, 1);
      var liToKill = ul.childNodes[i];
      liToKill.parentNode.removeChild(liToKill);
    }
  }
  // console.log array to check functionality
  console.log(nameArray);
  // clear input
  form.reset();
}

function selectRan(){
  var arrayIndex = Math.floor(Math.random() * nameArray.length)
  $("#picked").show();
  document.getElementById("picked").innerHTML = nameArray[arrayIndex] + " is paying for " + title + "!";
}

$(document).mouseup(function (e)
{
    var container = $("#picked");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
