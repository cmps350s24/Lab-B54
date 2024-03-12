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

const countries = []

async function handleRegionChange() {

    if (!localStorage[regionDD.value]) {
        const url = `${regionBaseURL}${regionDD.value}`
        const data = await fetch(url) //suspends the function until it is resolved
        countries = await data.json()
        localStorage[regionDD.value] = JSON.stringify(countries)

    } else
        countries = JSON.parse(localStorage[regionDD.value])

    // save to local storage
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
    countryDD.innerHTML = countries
        .map(country => `<option value='${country.name.common}'>${country.name.common}</option>`)
        .join(' ')

    handleCountryChange()
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

// const localStorage = {}

// localStorage.name = "Abdulahi"
// localStorage.age = 100

// console.log(localStorage.name);
// console.log(Object.keys(localStorage));

// delete localStorage.name
// console.log(Object.keys(localStorage));

// if (localStorage.name) {
//     console.log("Name exists");
// }else{
//     console.log("Name does not exist");
// }