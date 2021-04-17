import tippy, { animateFill } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';

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
		app.config.globalProperties.$tippy = function (targets, optionalProps) {
			tippy(targets, {
				...defaultConfig,
				...optionalProps
			});
		};

		app.directive('tippy', {
			mounted: function (el, binding) {
				console.log(el, binding);
				// condition is checked only on mount
				if (Object.prototype.hasOwnProperty.call(binding.value, 'condition')) {
					console.log('has condition');
					if (binding.value.condition) {
						console.log('codition is valid');
						tippy(el, {
							...defaultConfig,
							...binding.value.config
						});
					}
				}
				else {
					console.log("don't have condition");
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