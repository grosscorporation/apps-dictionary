## :cloud: Installation

```sh
# Using npm
npm install --save apps-dictionary

# Using yarn
yarn add apps-dictionary
```

### Countries

```js
import {countries, currencies, dictionary, languages} from apps-dictionary

/**
 *  country
 */
```

```json
{
	"name": "Andorra",
	"capital": "Andorra la Vella",
	"population": "84000",
	"languages": "ca",
	"callingCode": "376",
	"numeric": "020",
	"timezone": "UTC+01:00",
	"region": "Europe",
	"tld": "ad",
	"currency": {
		"name": "Euro",
		"symbol": "€",
		"symbolNative": "€",
		"decimalDigits": 2,
		"rounding": 0,
		"isoCode": "EUR",
		"namePlural": "euros"
	}
}
```

```js
/**
 *  currency
 */
```

```json
{
	"symbol": "$",
	"name": "US Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"iso_code": "USD",
	"name_plural": "US dollars"
}
```

```js
/**
 *  language
 */
```

```json
{
	"name": "Afrikaans",
	"nativeName": "Afrikaans",
	"iso_code": "af"
}
```
