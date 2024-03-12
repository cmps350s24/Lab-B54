// Step 1 : Get the reference of the element you want to interact with
const regionDD = document.querySelector('#region')
const countryDD = document.querySelector('#country')

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
    alert(countryDD.value)
}