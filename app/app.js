import Boot from './init.js';
import Environment from "./classes/Environment.js";


// Gerar container para inserir o ambiente de partículas
const container = Boot.createContainer('#particle-container');


// Gerar ambiente de controle de partículas
new Environment(container, 200, 300, 90.0, () => {
	const size = Math.random() * 6 + 2;
	const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	el.setAttribute('width', size.toString());
	el.setAttribute('height', size.toString());
	el.style.position = 'absolute';
	el.innerHTML = `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#C8E8FF" />`;

	return el;
});
