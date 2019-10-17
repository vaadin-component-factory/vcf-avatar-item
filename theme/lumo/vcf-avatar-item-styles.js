import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/sizing';
import '@vaadin/vaadin-lumo-styles/typography';

const theme = document.createElement('dom-module');
theme.id = 'vcf-avatar-item-lumo';
theme.setAttribute('theme-for', 'vcf-avatar-item');
theme.innerHTML = `
    <template>
      <style include="">
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
