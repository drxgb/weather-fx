import Particle from './Particle.js';
import Position from './Position.js';

class SnowParticle extends Particle {
	onUpdate(elapsedTime) {
		const d =
			this.velocity.direction +
			Math.sin((new Date().getMilliseconds() / elapsedTime) * 30.0);
		const x =
			parseFloat(this.velocity.module.toString()) *
			Math.cos(d) *
			elapsedTime;
		const y =
			parseFloat(this.velocity.module.toString()) *
			Math.sin(d) *
			elapsedTime;
		return new Position(x, y);
	}
}

export default SnowParticle;
