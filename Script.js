/* Setups for slider */
const allSlides = [];
const slideFirst = {
	imageUrlDesk: "images/desktop-image-hero-1.jpg",
	imageUrlMob: "images/mobile-image-hero-1.jpg",
	title: "Discover innovative ways to decorate",
	description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
};
const slideSecond = {
	imageUrlDesk: "images/desktop-image-hero-2.jpg",
	imageUrlMob: "images/mobile-image-hero-2.jpg",
	title: "We are available all across the globe",
	description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
};
const slideThird = {
	imageUrlDesk: "images/desktop-image-hero-3.jpg",
	imageUrlMob: "images/mobile-image-hero-3.jpg",
	title: "Manufactured with the best materials",
	description: ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
};

allSlides.push(slideFirst);
allSlides.push(slideSecond);
allSlides.push(slideThird);

const slideImage = document.querySelector("div.slide-image");
const slideContent = document.querySelector("div.slide-content");
const headerEl = slideContent.querySelector("article h1");
const descEl = slideContent.querySelector("article p");

const setSlide = (slidePage) => {
	let w = window.screen.width;
	if (w >= 780) {
		slideImage.style.backgroundImage = `url(${allSlides[slidePage].imageUrlDesk})`;
		console.log("Desktop background activated!");
	} else {
		slideImage.style.backgroundImage = `url(${allSlides[slidePage].imageUrlMob})`;
		console.log("Mobile background activated!");
	}
	headerEl.innerText = allSlides[slidePage].title;
	descEl.innerText = allSlides[slidePage].description;
};
let currPage = 0;

setSlide(currPage);
/* End setups for slider */

/* Mobile menu behaviour setups */
const menuBtn = document.querySelector("a.burger-btn");
const btnImage = menuBtn.querySelector("img");
const menu = document.querySelector("ul.main-menu");
const backdrop = document.querySelector("div.backdrop");

menuBtn.addEventListener("click", () => {
	if (menu.style.display === "none" || menu.style.display === "") {
		menu.style.display = "flex";
		btnImage.src = "./images/icon-close.svg";
		backdrop.style.display = "block";
	} else {
		menu.style.display = "none";
		btnImage.src = "./images/icon-hamburger.svg";
		backdrop.style.display = "none";
	}
	menuBtn.classList.toggle("btn-close");
});
/* End mobile menu setups */

/* Setups for slider navigation */
const nextBtn = document.querySelector("a.slide.next");
const prevBtn = document.querySelector("a.slide.prev");
const nextHandler = () => {
	if (currPage < allSlides.length - 1) {
		currPage++;
		setSlide(currPage);
	}
	return;
};
const prevHandler = () => {
	if (currPage > 0) {
		currPage--;
		setSlide(currPage);
	}
	return;
};

nextBtn.addEventListener("click", nextHandler);
prevBtn.addEventListener("click", prevHandler);

/* Navigate slider on keyoboard ke down (left and right arrow) */
window.addEventListener("keydown", (e) => {
	console.log(e.keyCode);
	let str = "";
	switch (e.keyCode) {
		case 37:
			str = "Left Key pressed!";
			prevHandler();
			break;

		case 39:
			str = "Right Key pressed!";
			nextHandler();
			break;
	}
	console.log(str);
});
/* End Navigate slider on keyoboard ke down (left and right arrow) */

window.addEventListener("resize", () => {
	setSlide(currPage);
});
