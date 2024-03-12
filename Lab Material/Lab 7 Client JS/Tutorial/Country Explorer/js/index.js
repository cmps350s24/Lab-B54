// Step 1 : Get the reference of the element you want to interact with
const regionDD = document.querySelector('#region')
const countryDD = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

// Add the end points
const regionBaseURL = 'https://restcountries.com/v3.1/region/'
const countryBaseURL = 'https://restcountries.com/v3.1/name/'

// Step 2 : Add events to this elements

regionDD.addEventListener('change', handleRegionChange)
countryDD.addEventListener('change', handleCountryChange)

async function handleRegionChange() {
    const url = `${regionBaseURL}${regionDD.value}`
    const data = await fetch(url) //suspends the function until it is resolved
    const countries = await data.json()
    countryDD.innerHTML = countries
        .map(country => `<option value='${country.name.common}'>${country.name.common}</option>`)
        .join(' ')
}

async function handleCountryChange() {
    const url = `${countryBaseURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    factsArea.innerHTML = convertCountryToFactsHTML(countries[0])
}

function convertCountryToFactsHTML(country) {
    const currKeys = Object.keys(country.currencies) //"ISR", "TTR", "USD"
    const langKeys = Object.keys(country.languages) //"ISR", "TTR", "USD"

    const currencies = currKeys.map(key => country.currencies[key].name).join(' - ')
    const languages = langKeys.map(key => country.languages[key]).join(' - ')
    return `
        <h1>Facts About ${country.name.official}</h1>
        <img src="${country.flags.png}" alt="Flag of ${country.name.official}">
        <table>
            <tr>
                <th>Official Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${currencies}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${languages}</td>
            </tr>
        </table>
    `
}