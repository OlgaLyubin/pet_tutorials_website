// function that shows an "add post" controls
function addPost() {
	var addButton= document.getElementById("addPost");
	if(addButton.style.visibility == "visible") {
		addButton.style.visibility = "hidden";
	}
	else {
		addButton.style.visibility = "visible"
	}
}