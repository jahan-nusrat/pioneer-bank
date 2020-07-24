const btn = document.querySelector('button');
const total = document.querySelector('#total');
const btn2 = document.querySelector('.with');
const logIn = document.querySelector('#login');
const depositNum = document.querySelector('#deposit-num');
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');
const withNum = document.querySelector('#with-num');

/* add background color to deposit,withdraw,balance box */
const colors = ['pink', 'aqua', 'yellow'];
const box = document.querySelectorAll('.div-box');
for (let i = 0; i < colors.length && i < box.length; i++) {
	box[i].style.backgroundColor = colors[i];
}

/* to hide login pae and to show transaction page */
logIn.addEventListener('click', () => {
	const logInBox = document.querySelector('.login-box');
	logInBox.style.display = 'none'; //hide
	const main = document.querySelector('main');
	main.style.display = 'block'; //show
});

/* preventDefault() to prevent default behaviour */
const form = document.querySelectorAll('form');
for (let value of form) {
	value.addEventListener('submit', (event) => {
		event.preventDefault();
	});
}

/* deposit money and add total */
btn.addEventListener('click', function () {
	total.innerHTML = parseFloat(total.innerHTML) + parseFloat(depositNum.value);
	deposit.innerHTML = parseFloat(deposit.innerHTML) + parseFloat(depositNum.value);
	depositNum.value = '';
});

/* withdraw money and deduct from total */
btn2.addEventListener('click', function () {
	total.innerHTML = parseFloat(total.innerHTML) - parseFloat(withNum.value);
	withdraw.innerHTML = parseFloat(withdraw.innerHTML) + parseFloat(withNum.value);
	withNum.value = '';
});