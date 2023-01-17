const formCity = document.querySelector('[data-js="change-location"]');


formCity.addEventListener('submit', event => {
    event.preventDefault();

    console.log(event.target.city.value);

});