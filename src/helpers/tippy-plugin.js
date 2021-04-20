import tippy, { animateFill, createSingleton } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';
import '../assets/scss/tooltips.scss';

const defaultConfig = {
	plugins: [animateFill],
	animateFill: true,
	arrow: false
};

const plugin = {
/**
 * add tippy as a vue plugin
 * @param {Object} app Vue app to add the plugin too
 * @param {Object} options distionnary of default options to pass to the tippy instance
 */
	// eslint-disable-next-line no-undef
	install(app, options) {
		tippy.setDefaultProps({
			...options
		});
		app.config.globalProperties.$tippy = {};
		app.config.globalProperties.$tippy.new = function (targets, optionalProps) {
			return tippy(targets, { ...defaultConfig, ...optionalProps });
		};


		app.config.globalProperties.$tippy.singletonFromTarget = function (targets, optionalProps) {
			const tippies = [];

			// instanciate tippy for each component
			targets.forEach(target => {
				tippies.push(tippy(target, { ...defaultConfig, ...optionalProps }));
			});

			return createSingleton(tippies, { ...defaultConfig, ...optionalProps });
		};

		app.config.globalProperties.$tippy.singletonFromTippies = function (tippies, optionalProps) {
			return createSingleton(tippies, { ...defaultConfig, ...optionalProps });
		};

		app.directive('tippy', {
			mounted: function (el, binding) {
				// condition is checked only on mount
				if (Object.prototype.hasOwnProperty.call(binding.value, 'condition')) {
					if (binding.value.condition && el.dataset.tippyContent !== '') {
						tippy(el, {
							...defaultConfig,
							...binding.value.config
						});
					}
				}
				else {
					tippy(el, {
						...defaultConfig,
						...binding.value
					});
				}
			}
		});
	}
};

export default plugin;