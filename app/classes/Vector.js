class Vector {
	constructor(_module = 0, _direction = 0.0) {
		this.module = _module;
		this.direction = _direction;
	}

	static factory(m, direction) {
		return new Vector(Math.random() * (m.max - m.min) + m.min, direction);
	}
}

export default Vector;
