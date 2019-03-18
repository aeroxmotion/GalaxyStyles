import { GalaxyPlugin } from 'https://cdn.jsdelivr.net/gh/LosMaquios/GalaxyJS/dist/galaxy.esm.js'

export default class GalaxyStylesPlugin extends GalaxyPlugin {
  static init (_) {
    const global = this.$global = document.createElement('style')

    global.setAttribute('data-global-style', '')
    global.textContent = this.$options.style
  }

  static install ({ prototype }) {
    const { onCreated } = prototype

    prototype.onCreated = function injectGlobalStyles () {

      // Inject global styles
      this.shadowRoot.prepend(GalaxyStylesPlugin.$global.cloneNode(true))

      onCreated && onCreated.call(this)
    }
  }
}
