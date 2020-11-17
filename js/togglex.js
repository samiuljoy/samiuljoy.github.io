function toggle() {
	var element = document.body;
	element.classList.toggle("dark");
  
	var mouse = document.getElementById("mode");
	  if (mouse.innerHTML === "🐼") {
	   mouse.innerHTML = "🐭";
 	 } 
	   else {
 	   mouse.innerHTML = "🐼"; }

	var meta = document.querySelector("meta[name=theme-color]");

  if (meta.getAttribute("content") === "#002f30") {
    console.log(meta.getAttribute("content"));
    meta.setAttribute("content", "#10101c");
  } else {
    console.log(meta.getAttribute("content"));
    meta.setAttribute("content", "#002f30");
  }
}
