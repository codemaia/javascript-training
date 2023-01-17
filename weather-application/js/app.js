const formCity = document.querySelector('[data-js="change-location"]');


formCity.addEventListener('submit', async event => {
    event.preventDefault();
    
    const inputValue = event.target.city.value;

    const { LocalizedName } = await getCity(inputValue);
    const { Temperature } =  await getCityWeather(LocalizedName)

    console.log(Temperature);

});