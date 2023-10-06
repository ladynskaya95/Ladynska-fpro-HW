class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    this.residents.push(human);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Maximum number of apartments reached.");
    }
  }
}

const human1 = new Human("John", "Male");
const human2 = new Human("Anna", "Female");
const human3 = new Human("Michael", "Male");
const human4 = new Human("Valera", "Male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();


apartment1.addResident(human1);
apartment2.addResident(human2);
apartment2.addResident(human3);
apartment3.addResident(human4);

const house = new House(3);
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

const detailsContainer = document.getElementById("details-container");

house.apartments.forEach((apartment, index) => {
  const apartmentDetails = document.createElement("div");
  apartmentDetails.innerHTML = `<h3>Apartment ${index + 1} residents:</h3>`;

  apartment.residents.forEach((resident) => {
    apartmentDetails.innerHTML += `<p>${resident.name}, ${resident.gender}</p>`;
  });

  detailsContainer.appendChild(apartmentDetails);
});
