const Countries = require('./data/countries.json')
const Currencies = require('./data/currencies.json')
const Dictionary = require('./data/dictionary.json')
const Languages = require('./data/languages.json')

const countries = Object.freeze(Countries)
const currencies = Object.freeze(Currencies)
const dictionary = Object.freeze(Dictionary)
const languages = Object.freeze(Languages)

module.exports = { countries, languages, dictionary, currencies }
