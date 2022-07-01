import Countries from './data/countries.json'
import Currencies from './data/currencies.json'
import Dictionary from './data/dictionary.json'
import Languages from './data/languages.json'

const countries = Object.freeze(Countries)
const currencies = Object.freeze(Currencies)
const dictionary = Object.freeze(Dictionary)
const languages = Object.freeze(Languages)

export { countries, languages, dictionary, currencies }
