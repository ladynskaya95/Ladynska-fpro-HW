class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  constructor(brand, model, year, plateNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plateNumber = plateNumber;
    this.owner = null;
  }

  setOwner(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log("The person is not old enough to be the owner of the car.");
    }
  }
}

const person1 = new Person("John", 25);
const person2 = new Person("Anna", 17);
const person3 = new Person("Michael", 30);

const car1 = new Car("Toyota", "Camry", 2015, "ABC123");
const car2 = new Car("Honda", "Civic", 2018, "XYZ789");
const car3 = new Car("Ford", "Focus", 2022, "EF4321GH");

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);

function displayInfoOnPage() {
  const personInfoDiv = document.getElementById("personInfo");
  const carInfoDiv = document.getElementById("carInfo");

  personInfoDiv.innerHTML = "";
  carInfoDiv.innerHTML = "";

  const persons = [person1, person2, person3];
  for (const person of persons) {
    const personInfo = document.createElement("p");
    personInfo.textContent = `Name: ${person.name}, Age: ${person.age}`;
    personInfoDiv.appendChild(personInfo);
  }

  const cars = [car1, car2, car3];
  for (const car of cars) {
    const carInfo = document.createElement("p");
    carInfo.textContent = `Car: ${car.brand} ${car.model}, Year: ${car.year}, Plate Number: ${car.plateNumber}`;
    carInfoDiv.appendChild(carInfo);

    if (car.owner) {
      const ownerInfo = document.createElement("p");
      ownerInfo.textContent = `Owner Information: Name: ${car.owner.name}, Age: ${car.owner.age}`;
      carInfoDiv.appendChild(ownerInfo);
    } else {
      const ownerInfo = document.createElement("p");
      ownerInfo.textContent = "Owner information not available.";
      carInfoDiv.appendChild(ownerInfo);
    }
  }
}

displayInfoOnPage();
