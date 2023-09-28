function generateList(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "";
  }

  let result = "";

  for (const item of array) {
    result += "<ul>";

    if (Array.isArray(item)) {
      result += generateList(item); 
    } else {
      result += `<li>${item}</li>`;
    }

    result += "</ul>";
  }

  return result;
}


const exampleArray = [1, 2, 3, [1.1, 1.2], 4, 5];
const generatedList = generateList(exampleArray);
console.log(generatedList);
