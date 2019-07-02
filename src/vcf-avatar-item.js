import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

class VcfAvatarItem extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }

  static get is() {
    return 'vcf-avatar-item';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {};
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(VcfAvatarItem.is, VcfAvatarItem);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfAvatarItem = VcfAvatarItem;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfAvatarItem);
}
