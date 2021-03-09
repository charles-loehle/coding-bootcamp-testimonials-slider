const buttons = document.querySelectorAll('button');
const initial = document.getElementById('initial');
const final = document.getElementById('final');

for (let i = 0; i < buttons.length; i++) {
	// add click events to the buttons
	buttons[i].addEventListener('click', () => {
		initial.classList.toggle('displayNone');
		final.classList.toggle('displayNone');
	});
}
