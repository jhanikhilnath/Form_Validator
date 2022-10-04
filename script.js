const myname = document.querySelector('.--name');
const email = document.querySelector('.--email');
const pw = document.querySelector('.--pw');
const pwcon = document.querySelector('.pw--con');

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	if (myname.value == '' || myname.value == ' ') {
		myname.classList.add('error');
		document.querySelector('.name > p');
	} else {
		myname.classList.add('perfect');
	}
	if (email.value == '' || email.value == ' ' || !email.value.includes('@')) {
		email.classList.add('error');
	} else {
		email.classList.add('perfect');
	}
	if (pw.value == '' || myname.value == ' ' || pw.value.length < 5) {
		pw.classList.add('error');
	} else {
		pw.classList.add('perfect');
	}
	if (pw.value !== pwcon.value) {
		pwcon.classList.add('error');
	} else {
		pwcon.classList.add('perfect');
	}
});
