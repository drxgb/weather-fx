import Vector from './Vector.js';
import Position from './Position.js';

class Particle {
	constructor(
		element,
		parent = undefined,
		velocity = new Vector(),
		position = new Position()
	) {
		this.element = element;
		this.parent = parent;
		this.velocity = velocity;
		this.position = position;
		this.setPosition(position.x, position.y);

		if (this.parent !== undefined) {
			this.parent.appendChild(this.element);
		}
	}

	setX(x) {
		this.position.x = x;
		this.element.style.left = x;
	}

	setY(y) {
		this.position.y = y;
		this.element.style.top = y;
	}

	setPosition(x, y) {
		this.setX(x);
		this.setY(y);
	}

	update(elapsedTime = (1 / 60)) {
		const x = parseFloat(this.velocity.module.toString()) * Math.cos(this.velocity.direction) * elapsedTime;
		const y = parseFloat(this.velocity.module.toString()) * Math.sin(this.velocity.direction) * elapsedTime;
		this.setPosition(this.position.x + x, this.position.y + y);
	}

	isInside() {
		const x = this.position.x;
		const y = this.position.y;
		const w = (this.parent === undefined) ? window.innerWidth : this.parent.clientWidth;
		const h = (this.parent === undefined) ? window.innerHeight : this.parent.clientHeight;

		return (x >= 0) && (x <= w) && (y >= 0) && (y <= h);
	}
}

export default Particle;
