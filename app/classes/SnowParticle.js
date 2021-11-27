import Particle from './Particle.js';
import Position from './Position.js';

class SnowParticle extends Particle {
	onUpdate(elapsedTime) {
		const d = this.velocity.direction + Math.sin(new Date().getTime());
		const x = this.velocity.module * Math.cos(d * 30) * elapsedTime;
		const y = this.velocity.module * Math.sin(d) * elapsedTime;
		return new Position(x, y);
	}
}

export default SnowParticle;
