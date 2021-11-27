import Boot from './init.js';
import SnowEnvironment from './classes/SnowEnvironment.js';

// Gerar container para inserir o ambiente de partículas
const container = Boot.createContainer('#particle-container');

// Constantes da página
const velocity = { min: 80, max: 200 };
const direction = 90;
const updateDirection = (d) => {
	document.querySelector('#direction-value').innerHTML = d;
};

// Gerar ambiente de controle de partículas
const snow = new SnowEnvironment(
	container,
	100,
	() => {
		const size = Math.random() * 6 + 2;
		const el = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);

		el.setAttribute('width', size.toString());
		el.setAttribute('height', size.toString());
		el.style.position = 'absolute';
		el.innerHTML = `<circle cx="${size / 2}" cy="${size / 2}" r="${
			size / 2
		}" fill="#C8E8FF" />`;

		return el;
	},
	velocity.min,
	velocity.max
);

window.addEventListener('resize', () => snow.clear());
snow.start(direction);

document
	.querySelector('#control-direction')
	.addEventListener('change', (ev) => {
		const value = ev.target.value;
		snow.changeDirection(value);
		updateDirection(value);
	});
updateDirection(direction);
