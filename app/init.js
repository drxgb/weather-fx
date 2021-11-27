export default {
	createContainer: (name) => {
		const container = document.querySelector(name);
		container.style.position = 'fixed';
		container.style.width = '100%';
		container.style.height = '100%';
		container.style.pointerEvents = 'none';
		return container;
	},
};
