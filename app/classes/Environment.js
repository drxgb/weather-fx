import Particle from './Particle.js';
import Position from './Position.js';
import Vector from './Vector.js';

class Environment {
	constructor(container, maxParticles, elementCallback = () => {}) {
		this.container = container;
		this.particles = [];
		this.maxParticles = maxParticles;
		this.elementCallback = elementCallback;
		this.thread = () => {};
	}

	start(velocity, direction) {
		clearInterval(this.thread);

		this.thread = setInterval(() => {
			this.createParticle(velocity, direction);
			this.particles.forEach((particle) => particle.update());
			for (let i = 0; i < this.particles.length; ++i) {
				if (!this.particles[i].isInside()) {
					this.container.removeChild(this.particles[i].element);
					this.particles.splice(i, 1);
				}
			}
		}, (1 / 60) * 1000);
	}

	createParticle(velocity, direction) {
		while (this.particles.length < this.maxParticles) {
			this.particles.push(this.onCreate(velocity, direction));
		}
	}

	onCreate(velocity, direction) {
		return new Particle(
			this.elementCallback(),
			this.container,
			new Vector(velocity, direction),
			this.setInitialPosition()
		);
	}

	setInitialPosition() {
		const x = Math.random() * this.container.clientWidth;
		const y = Math.random() * this.container.clientHeight;
		return new Position(x, y);
	}

	clear() {
		this.particles = [];
		while (this.container.firstChild)
			this.container.removeChild(this.container.firstChild);
	}
}

export default Environment;
