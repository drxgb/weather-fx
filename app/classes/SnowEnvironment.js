import Environment from "./Environment.js";
import SnowParticle from "./SnowParticle.js";
import Vector from "./Vector.js";

class SnowEnvironment extends Environment {
	onCreate(velocity, direction) {
		return new SnowParticle(
			this.elementCallback(),
			this.container,
			new Vector(velocity, direction),
			this.setInitialPosition()
		);
	}
};

export default SnowEnvironment;