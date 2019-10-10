/* eslint-disable semi, react/no-render-return-value */
import loadEnhancedMusicPlayer from './enhanced-music-player';

class IAUX {
    /**
     *
     * @param { string } component name in the registry
     * @param { object } props - data that hydrates component
     */
    static componentHandlerRegistry(component) {
        const registry = {
            enhancedAudioPlayer: loadEnhancedMusicPlayer,
        };

        if (!registry[component]) {
            throw new Error('No IAUX Component registered');
        }

        return registry[component];
    }

    /**
     * V1 Initialization of ia-components
     * use class for DOM hook: js-iaux-component
     * add data attributes:
     *  - data-iaux-component: directs to responsible loader.
     *      - should match what's inside `IAUX.componentHandlerRegistry`
     *  - data-component-params: data to pass into component
     */
    static setUpIauxComponents() {
        const iauxComponents = document.querySelectorAll('.js-iaux-component');
        if (!iauxComponents.length) return;

        iauxComponents.forEach((component) => {
            const whichComponent = component.getAttribute('data-iaux-component');
            const componentData = component.getAttribute('data-component-params');
            const parsedData = JSON.parse(componentData);

            try {
                const componentHandler = IAUX.componentHandlerRegistry(whichComponent);
                return componentHandler(parsedData);
            } catch {
                // eslint-disable-next-line no-param-reassign
                component.innerHTML = `Uh oh, we hit a snag. The ${whichComponent} component was unable to load.`;
                return undefined;
            }
        })
    }
}

$(IAUX.setUpIauxComponents)