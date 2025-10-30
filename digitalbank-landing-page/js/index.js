let mobileIcon = document.querySelector(".mobile-nav-icon");
let mobileNav = document.querySelector(".mobile-nav-tabs");

mobileIcon.addEventListener("click", (event) => {
	event.stopPropagation();

	if (mobileIcon.src.endsWith("icon-hamburger.svg")) {
		mobileIcon.src = "./images/icon-close.svg";
		mobileIcon.alt = "Close navigation menu";
		mobileNav.style.display = "flex";
	} else {
		mobileIcon.src = "./images/icon-hamburger.svg";
		mobileIcon.alt = "Open navigation menu";
		mobileNav.style.display = "none";
	}
});

document.body.addEventListener("click", () => {
	mobileIcon.src = "./images/icon-hamburger.svg";
	mobileIcon.alt = "Open navigation menu";
	mobileNav.style.display = "none";
});
