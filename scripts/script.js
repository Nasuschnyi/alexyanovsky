let currentHour = new Date(
	new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev' })
);

let video = document.querySelector('#video');
let banners = document.querySelector('.banners');
let text = document.querySelector('.title');
let image = document.querySelector('.video-cover');
let comments = document.querySelectorAll('.article');

function toggleDisplay(elements, displayStyle) {
	elements.forEach((element) => {
		element.style.display = displayStyle;
	});
}

function showVideoAndComments() {
	toggleDisplay([video], 'block');
	toggleDisplay([banners, text, image], 'none');
	toggleDisplay(Array.from(comments), 'block');
}

function showVideoBannersTextAndComments() {
	toggleDisplay([video, banners, text], 'block');
	toggleDisplay([image], 'none');
	toggleDisplay(Array.from(comments), 'block');
}

function showImageAndComments() {
	toggleDisplay([video, banners, text], 'none');
	toggleDisplay([image], 'block');
	toggleDisplay(Array.from(comments), 'block');
}

if (currentHour >= 18 && currentHour < 18) {
	showVideoAndComments();
} else if (currentHour >= 18 && currentHour < 21) {
	showVideoBannersTextAndComments();
} else {
	showImageAndComments();
}
