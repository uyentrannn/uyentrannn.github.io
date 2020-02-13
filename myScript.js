function iconChange() {
	setTimeout(function(){ document.getElementById("icon").href = "static/uyen-icon-1.gif";}, 250);
	setTimeout(function(){ document.getElementById("icon").href = "static/uyen-icon-2.gif";}, 500);
	setTimeout(function(){ document.getElementById("icon").href = "static/uyen-icon-1.gif";}, 750); 
	setTimeout(function(){ document.getElementById("icon").href = "static/uyen-icon-2.gif";}, 1000); 
}

window.onload = function() {
	setInterval(function() {
		iconChange();
	}, 250);
};