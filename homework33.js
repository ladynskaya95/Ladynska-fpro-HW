const birthYear = prompt("Введіть рік народження:");
const city = prompt("Введіть місто, в якому ви живете:");
const favSport = prompt("Введіть ваш улюблений вид спорту:");


if (birthYear && city && favSport) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(birthYear);

  let message = `Вам ${age} років.\n`;

  switch (city) {
    case "Київ":
      country = "України";
      break;
    case "Вашингтон":
      country = "США";
      break;
    case "Лондон":
      country = "Великої Британії";
      break;
    default:
      country = "цієї країни";
      break;
  }

  message +=
    city === "Київ" || city === "Вашингтон" || city === "Лондон"
      ? `Ти живеш у столиці ${country}.\n`
      : `Ти живеш у місті ${city}.\n`;

  const сhampions = {
    "футбол": "Андрій Ярмоленко",
    "баскетбол": "Майкл Джордан",
    "теніс": "Серена Вільямс",
  };


if (favSport) {
  const formattedSport = favSport.toLowerCase();

  if (сhampions[formattedSport]) {
    const championName = сhampions[formattedSport];
    message += `Круто! Хочеш стати як ${championName}?`;
  }
  else {
    message += "Дякую за відповіді!";
  }
}
  alert(message);
} 
    else {
  let missingInfo = "Шкода, що ви не захотіли ввести ";


switch (true) {
  case !birthYear:
    missingInfo += "свою дату народження";
    break;
  case !city:
    missingInfo += !birthYear ? ", місто" : "місто";
    break;
  case !favSport:
    missingInfo += birthYear && city ? ", вид спорту" : birthYear || city ? " та вид спорту" : "вид спорту";
    break;
  default:
    missingInfo = null;
    break;
}

if (missingInfo) {
  missingInfo += ".";
  alert(missingInfo);
}
    }
