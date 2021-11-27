import Particle from './Particle.js';
import Position from './Position.js';

class SnowParticle extends Particle {
	onUpdate(elapsedTime) {
		const d =
			(this.velocity.direction * Math.PI) / 180 +
			Math.sin((new Date().getTime() * Math.PI) / 180) * 0.5;
		const x = this.velocity.module * Math.cos(d) * elapsedTime;
		const y = this.velocity.module * Math.sin(d) * elapsedTime;
		return new Position(x, y);
	}
}

export default SnowParticle;
