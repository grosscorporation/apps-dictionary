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
 *  []country
 */
```

```json
{
	"name": "Wallis and Futuna",
	"capital": "Mata Utu",
	"population": "16025",
	"languages": "wls,fud,fr-WF",
	"callingCode": "681",
	"numeric": "876",
	"timezone": "UTC+12:00",
	"region": "Oceania",
	"tld": "wf",
	"currency": {
		"name": "Franc",
		"symbol": "Fr",
		"symbolNative": "Fr",
		"decimalDigits": 2,
		"rounding": 0,
		"isoCode": "XPF",
		"namePlural": "CFP franc"
	},
	"countryName": "Wallis and Futuna",
	"countryShortCode": "WF",
	"regions": [
		{ "name": "Alo", "shortCode": "ALO" },
		{ "name": "Sigave", "shortCode": "SIG" },
		{ "name": "Wallis", "shortCode": "WAL" }
	]
}
```

```js
/**
 *  []currency
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
 *  []language
 */
```

```json
{
	"name": "Afrikaans",
	"nativeName": "Afrikaans",
	"iso_code": "af"
}
```
