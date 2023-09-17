const saveButton = document.querySelector("#saveData");

saveButton.addEventListener("click", displayData);

function displayData() {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const birthdate = document.querySelector("#birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.querySelector("#city").value;
  const address = document.querySelector("#address").value;

  const languages = [];
  const language1 = document.querySelector("#language1");
  const language2 = document.querySelector("#language2");
  const language3 = document.querySelector("#language3");

  if (language1.checked) {
    languages.push(language1.value);
  }
  if (language2.checked) {
    languages.push(language2.value);
  }
  if (language3.checked) {
    languages.push(language3.value);
  }

  document.querySelector("#displayFirstName").innerText = firstName;
  document.querySelector("#displayLastName").innerText = lastName;
  document.querySelector("#displayBirthdate").innerText = birthdate;
  document.querySelector("#displayGender").innerText = gender;
  document.querySelector("#displayCity").innerText = city;
  document.querySelector("#displayAddress").innerText = address;
  document.querySelector("#displayLanguages").innerText = languages.join(", ");

  document.querySelector(".registration-form").classList.add("hidden");
  document.querySelector("#data-table").classList.remove("hidden");
}
