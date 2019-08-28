/* eslint-disable max-len */
import { html, PolymerElement } from '@polymer/polymer/polymer-element';

class VcfAvatarItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--lumo-size-s);
          height: var(--lumo-size-s);
          border-radius: 50%;
          overflow: hidden;
          background-color: var(--lumo-primary-color);
          color: var(--lumo-primary-contrast-color);
          font-size: 50px;
          font-weight: 500;
          text-transform: uppercase;
          vertical-align: middle;
          line-height: 1;
        }

        img {
          max-width: 100%;
        }

        svg {
          display: block;
        }

        .abbr {
          font: inherit;
          fill: currentColor;
          width: 90%;
          height: 90%;
          padding: 5%;
        }

        .icon {
          fill: none;
          stroke: currentColor;
          width: 60%;
          height: 60%;
          padding: 20%;
        }

        :host([name]) .icon,
        :host([abbr]) .icon,
        :host([image]) .icon {
          display: none;
        }

        :host([image]) .abbr {
          display: none;
        }
      </style>
      <template is="dom-if" if="[[abbr]]">
        <svg viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" class="abbr">
          <text dy="0.3em" text-anchor="middle">[[abbr]]</text>
        </svg>
      </template>
      <svg viewBox="0 0 32 32" class="icon">
        <path
          d="M26.6666 28V25.3333C26.6666 23.9188 26.1047 22.5623 25.1045 21.5621C24.1044 20.5619 22.7478 20 21.3333 20H10.6666C9.25216 20 7.8956 20.5619 6.89541 21.5621C5.89522 22.5623 5.33331 23.9188 5.33331 25.3333V28"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 14.6667C18.9455 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <template is="dom-if" if="[[image]]">
        <img src="[[image]]" alt="[[name]]" />
      </template>
    `;
  }

  static get is() {
    return 'vcf-avatar-item';
  }

  static get version() {
    return '0.2.1';
  }

  static get properties() {
    return {
      name: {
        type: String,
        observer: 'nameChanged',
        reflectToAttribute: true
      },
      abbr: String,
      image: String
    };
  }

  nameChanged() {
    if (this.name) {
      this.abbr = this.abbr || this.name.match(/\b\S/g).join('');
      this.setAttribute('title', this.name);
    } else {
      this.removeAttribute('title');
    }
  }
}

customElements.define(VcfAvatarItem.is, VcfAvatarItem);

/**
 * @namespace Vaadin
 */
window.Vaadin = window.Vaadin || {};
window.Vaadin.VcfAvatarItem = VcfAvatarItem;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfAvatarItem);
}
