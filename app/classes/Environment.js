import Particle from './Particle.js';
import Position from './Position.js';
import Vector from './Vector.js';

class Environment {
	constructor(
		container,
		maxParticles,
		elementCallback = () => {},
		min = 0,
		max = 0
	) {
		this.container = container;
		this.particles = [];
		this.maxParticles = maxParticles;
		this.elementCallback = elementCallback;
		this.thread = () => {};
		this.min = min;
		this.max = max;
		this.direction = 0;
	}

	start(direction) {
		clearInterval(this.thread);
		this.direction = direction;

		this.thread = setInterval(() => {
			this.createParticle({ min: this.min, max: this.max });
			this.particles.forEach((particle) => particle.update());
			for (let i = 0; i < this.particles.length; ++i) {
				if (!this.particles[i].isInside()) {
					this.container.removeChild(this.particles[i].element);
					this.particles.splice(i, 1);
				}
			}
		}, (1 / 60) * 1000);
	}

	initThread() {}

	createParticle(velocity) {
		while (this.particles.length < this.maxParticles) {
			this.particles.push(this.onCreate(velocity, this.direction));
		}
	}

	onCreate(velocity) {
		return new Particle(
			this.elementCallback(),
			this.container,
			Vector.factory(velocity, this.direction),
			this.setInitialPosition()
		);
	}

	setInitialPosition() {
		const x = Math.random() * this.container.clientWidth;
		const y = Math.random() * this.container.clientHeight;
		return new Position(x, y);
	}

	changeDirection(direction) {
		this.particles.forEach(
			(particle) => (particle.velocity.direction = direction)
		);
		this.start(direction);
	}

	clear() {
		this.particles = [];
		while (this.container.firstChild)
			this.container.removeChild(this.container.firstChild);
	}
}

export default Environment;
