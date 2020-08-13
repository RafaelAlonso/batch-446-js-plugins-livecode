const garage_name = 'ppkAzul';
const garage_url = `https://wagon-garage-api.herokuapp.com/${garage_name}/cars`;

// Codigo para adicionar um carro ao HTML
const addCarToHTML = (car) => {
  const display = document.querySelector('.cars-list');
  const newCarBrand = car.brand;
  const newCarModel = car.model;
  const newCarPlate = car.plate;
  const newCarOwner = car.owner;

  const insert = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${newCarBrand}" />
      </div>
      <div class="car-info">
        <h4>${newCarBrand} ${newCarModel}</h4>
        <p><strong>Owner:</strong> ${newCarOwner}</p>
        <p><strong>Plate:</strong> ${newCarPlate}</p>
      </div>
    </div>
  `

  display.insertAdjacentHTML('beforeend', insert);
}

// AJAX pra pegar todos os carros da garagem
const getAllCars = () => {
  fetch(garage_url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // debugger

      data.forEach((car) => {
        addCarToHTML(car);
      })

    })
}

// AJAX adicionar um carro na garagem QUANDO USER ENVIA O FORM
const addCarToGarage = (event) => {
  event.preventDefault();
  const carInfo =  {
    "brand": document.getElementById('brand').value,
    "model": document.getElementById('model').value,
    "owner": document.getElementById('owner').value,
    "plate": document.getElementById('plate').value
  };

  const params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carInfo)
  };

  fetch(garage_url, params)
    .then(response => response.json())
    .then((data) => {
      addCarToHTML(data);
    });
}

export { addCarToGarage, getAllCars };
