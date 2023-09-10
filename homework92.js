const textField = document.querySelector("#text-field");

textField.addEventListener("focus", () => {
  const dynamicDiv = document.createElement("div");
  dynamicDiv.id = "dynamic-div";
  dynamicDiv.textContent = "Privet:)";
  document.body.appendChild(dynamicDiv);
});

textField.addEventListener("blur", () => {
  const dynamicDiv = document.querySelector("#dynamic-div");
  if (dynamicDiv) {
    document.body.removeChild(dynamicDiv);
  }
});
