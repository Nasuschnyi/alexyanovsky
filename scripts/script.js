let currentHour = new Date().getUTCHours() + 2;
console.log(currentHour);

let video = document.querySelector('#video');
let banners = document.querySelector('.banners');
let text = document.querySelector('.title');
let image = document.querySelector('.video-cover');
let comments = document.querySelectorAll('.article');

function showVideoAndComments() {
	video.style.display = 'block';
	banners.style.display = 'none';
	text.style.display = 'none';
	image.style.display = 'none';
	commentsContainer.style.display = 'block';
}

function showVideoBannersTextAndComments() {
	video.style.display = banners.style.display = text.style.display = 'block';
	image.style.display = 'none';
	comments.forEach((comment) => (comment.style.display = 'block'));
}

function showImageAndComments() {
	video.style.display = 'none';
	banners.style.display = 'none';
	text.style.display = 'none';
	image.style.display = 'block';
	commentsContainer.style.display = 'block';
}

if (currentHour >= 18 && currentHour < 18) {
	showVideoAndComments();
} else if (currentHour >= 18 && currentHour < 21) {
	showVideoBannersTextAndComments();
} else {
	showImageAndComments();
}
