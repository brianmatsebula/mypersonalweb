// Get the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the text input element
  var input = document.getElementById("myInput");
  
  // Get the text output element
  var output = document.getElementById("myOutput");
  
  // Set the text of the output element to the value of the input element
  output.innerHTML = input.value;
});
