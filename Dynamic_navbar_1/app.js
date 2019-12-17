
// Change navbar properties on scroll position
window.addEventListener('scroll', () => scrollFunction());

var prevScrollpos = window.pageYOffset;

function scrollFunction() {

	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("#nav").style.top = "0";	
	} else {
		document.querySelector("#nav").style.top = "-300px";
	}

	prevScrollpos = currentScrollPos;
}

