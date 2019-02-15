const CountryService = {
  fetchCountries: () => {
    return fetch('/countries')
    .then(response => response.json())
  }
}

export default CountryService;