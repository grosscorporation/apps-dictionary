const countries = require('./data/countries')

const res = countries.filter((country) => !country.hasOwnProperty('tld'))

console.log(res)
