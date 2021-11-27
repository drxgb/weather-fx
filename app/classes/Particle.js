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

	update(elapsedTime = 1 / 60) {
		const pos = this.onUpdate(elapsedTime);
		this.setPosition(this.position.x + pos.x, this.position.y + pos.y);
	}

	onUpdate(elapsedTime) {
		const d = (this.velocity.direction * Math.PI) / 180;
		const x = this.velocity.module * Math.cos(d) * elapsedTime;
		const y = this.velocity.module * Math.sin(d) * elapsedTime;
		return new Position(x, y);
	}

	isInside() {
		const x = this.position.x;
		const y = this.position.y;
		const w =
			this.parent === undefined
				? window.innerWidth
				: this.parent.clientWidth;
		const h =
			this.parent === undefined
				? window.innerHeight
				: this.parent.clientHeight;

		return x >= 0 && x <= w && y >= 0 && y <= h;
	}
}

export default Particle;
