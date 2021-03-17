"use strict";

function initCounting(element) {
	const elements = document.querySelectorAll(`.${element}`);

	elements.forEach((element) => {
		element.innerHTML = 0;
	});
}

function countingUp(element, duration) {
	const start = 0;
	const elements = document.querySelectorAll(`.${element}`);

	elements.forEach((element) => {
		const end = element.dataset.count;

		if (end === start) return;
		const range = end - start;
		let current = start;
		const increment = start < end ? 1 : 0;
		const stepTime = Math.abs(Math.floor(duration / range));

		const timer = setInterval(function () {
			current += increment;
			element.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);
	});
}

window.addEventListener("scroll", function () {
	var elementTarget = document.querySelector(".future__counter");

	if (window.scrollY === 1500) {
		countingUp("future__counter--number", 1500);
	}

	if (window.scrollY < 1000 || window.scrollY > 1700) {
		initCounting("future__counter--number");
	}
});

const btnMobile = document.querySelector(".btn-mobile");
const menu = document.querySelector(".header");

let flagOpen = false;

function openMenuMobile() {
	btnMobile.classList.toggle("show");
	menu.classList.toggle("show");
}

btnMobile.addEventListener("click", openMenuMobile);
