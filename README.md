# &lt;vcf-avatar-item&gt;

## Demo

https://vcf-avatar-item.netlify.com/

## Installation

Install `vcf-avatar-item`:

```sh
npm i @vaadin-component-factory/vcf-avatar-item --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-avatar-item';
```

And use it:

```html
<vcf-avatar-item></vcf-avatar-item>
```

By default, an avatar icon is shown on the avatar component. There are three ways to change what is shown on the avatar.

1.  Provide a `name` attribute. An abbreviation will be created based on the provided name and will be shown instead of the avatar icon. E.g. Abbreviation for "John Doe" will be "JD".

```html
<vcf-avatar-item name="John Doe"></vcf-avatar-item>
```

2.  Provide an `abbr` attribute. The provided abbreviation will be shown instead of the avatar icon.

```html
<vcf-avatar-item abbr="ST"></vcf-avatar-item>
```

*Providing `abbr` will override `name` attribute.*

3.  Provide an `image` attribute. The provided image will be shown instead of the avatar icon. If provided, the `name` attribute will be used as `alt` attribute of the image.

```html
<vcf-avatar-item image="https://randomuser.me/api/portraits/women/5.jpg" name="Jane Doe"></vcf-avatar-item>
```

*Providing `image` will override both `name` and `abbr` attributes.*

## Running demo

1. Fork the `vcf-avatar-item` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-avatar-item` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Commercial Vaadin Add-on License version 3 (CVALv3). For license terms, see LICENSE.

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
