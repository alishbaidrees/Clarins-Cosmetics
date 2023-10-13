var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right == "-250px";
menuBtn.onclick = function() {
	if (sideNav.style.right == "-250px") {
		sideNav.style.right = "0";
		menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
	} else {
		sideNav.style.right = "-250px";
		menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
	}
}

$(document).ready(function() {

	$("a").on('click', function(event) {

		if (this.hash !== "") {

			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
