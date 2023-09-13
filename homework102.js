const categoriesContainer = document.querySelector(".categories");
const productsContainer = document.querySelector(".products");
const productInfoContainer = document.querySelector(".productInfo");

const products = [
  {
    id: 1,
    categoryName: "Овочі, фрукти",
    products: [
      {
        productName: "Яблука",
        productInfo:
          " Яблука багаті на поліфеноли, які відповідають за ряд переваг для здоров'я.",
      },
      {
        productName: "Персики",
        productInfo:
          "Аромат персика здатний діяти на організм людини як антидепресант. ",
      },
      {
        productName: "Помідори",
        productInfo:
          "Помідори постачають вітамін А, який підтримує імунну систему, зір та здоров'я шкіри.",
      },
    ],
  },
  {
    id: 2,
    categoryName: "Молочна продукція",
    products: [
      {
        productName: "Кефір",
        productInfo:
          "Кефір як натуральний молочнокислий напій із мікробіологічної точки зору є надзвичайно цінним і унікальним пробіотиком.",
      },
      {
        productName: "Ряжанка",
        productInfo:
          "Ряжанка — кисломолочний продукт, що виготовляється на основі коровʼячого пряженого молока та молочнокислих бактерій ",
      },
      {
        productName: "Сметана",
        productInfo:
          "В сметані містяться такі вітаміни: А, D, Е, В1, В2, РР, С.",
      },
    ],
  },
  {
    id: 3,
    categoryName: "Хліб, випічка",
    products: [
      {
        productName: "Батон",
        productInfo:
          "Батон — поширений вид булочних виробів поряд із плетеними виробами, булками, сайками та булочною дрібницею",
      },
      {
        productName: "Круасан з шоколадом",
        productInfo: "Круасани з шоколадом – кожен ранок буде добрим! ",
      },
      {
        productName: "Чіабатта",
        productInfo:
          "Чіабатта – легендарний хліб з берегів сонячної і яскравою Італії.",
      },
    ],
  },
  {
    id: 4,
    categoryName: "Напої",
    products: [
      {
        productName: "Зелений чай",
        productInfo:
          "Зелений чай — ґатунок чаю, який досягається такою обробкою чайного листя: зав'ялювання + часткова сушка + скручування + досушування, також подрібнення",
      },
      {
        productName: "Ананасовий сік",
        productInfo:
          "Ананасовий сік стимулює роботу гормональної залози, покращує роботу травного тракту і сприяє зниженню ваги.",
      },
      {
        productName: "Латте",
        productInfo:
          "Латте – це кавовий напій, який зроблений з еспресо, взбитого молока та молочної пінки.",
      },
    ],
  },
];

function displayCategories() {
  categoriesContainer.innerHTML = "";
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  products.forEach((category) => {
    const categoryButton = document.createElement("div");
    categoryButton.style.padding = "20px"
    categoryButton.innerText = category.categoryName;
    categoryButton.addEventListener("click", () => displayProducts(category));
    categoriesContainer.appendChild(categoryButton);
  });
}


function displayProducts(category) {
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  category.products.forEach((product) => {
    const productButton = document.createElement("div");
    productButton.style.padding = "20px";
    productButton.style.backgroundColor = "rgba(148, 228, 172, 0.795)";

    productButton.innerText = product.productName;
    productButton.addEventListener("click", () => displayProductInfo(product));
    productsContainer.appendChild(productButton);
  });
}


function displayProductInfo(product) {
  productInfoContainer.innerHTML = "";

  const productName = document.createElement("h2");
  productName.innerText = product.productName;
  productName.style.padding = "20px";
  productName.style.backgroundColor = "rgba(253, 108, 108, 0.562)";

  const productInfo = document.createElement("p");
  productInfo.innerText = product.productInfo;
  productInfo.style.padding = "20px";
  productInfo.style.backgroundColor = "rgba(253, 108, 108, 0.362)";

  const buyButton = document.createElement("button");
  buyButton.style.color = "blue";
  buyButton.style.border = 'none';
  buyButton.style.backgroundColor = "lightblue";

  
  buyButton.innerText = "Купити";
  buyButton.addEventListener("click", () => {
    alert("Товар куплений");
    displayCategories();
  });

  productInfoContainer.appendChild(productName);
  productInfoContainer.appendChild(productInfo);
  productInfoContainer.appendChild(buyButton);
}


displayCategories();
