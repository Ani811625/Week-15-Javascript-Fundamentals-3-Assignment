const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  function displayCarProperties(car) {
    for (const key in car) {
      console.log(`${key}: ${car[key]}`);
    }
  }

  