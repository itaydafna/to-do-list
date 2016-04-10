function addAction() {
  var actionItem = document.getElementById("action").value,
    ol = document.getElementById("list"),
    li = document.createElement("li");
  li.appendChild(document.createTextNode(actionItem))
  ol.appendChild(li);
  actionItem='default text';
}

var button = document.getElementById("submit");

button.addEventListener("click", addAction);

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addAction();
  } else {
    return false
  }
})

// upon click - willl cross-out li, or delete it if it's already crossed
document.addEventListener("click", function(e) {
  var item = e.target;
  if (item.nodeName.toLowerCase() === "li") {
    if (item.className === "crossed-out") {
    	item.remove();
    } 
    else {
      item.className +="crossed-out";
    }
  } 
  else {
    return false
  };
})
