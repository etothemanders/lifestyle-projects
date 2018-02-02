const panelsModule = (function() {
	const panels = document.querySelectorAll('.panel');
	const blogButton = document.querySelector('.button4');

	function toggleActive(ev) {
		if (ev.propertyName.startsWith('flex')) this.classList.toggle('open-active');
	}

	function toggleOpen() {
		this.classList.toggle('open');
	}

	function goToBlog() {
		window.open('https://medium.com/@etothemanders/latest');
	}

	function init() {
		panels.forEach(panel => panel.addEventListener('click', toggleOpen));
		panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

		blogButton.addEventListener('click', goToBlog);
	}

	return {
		init: init,
	};
})();

window.onload = () => panelsModule.init();
