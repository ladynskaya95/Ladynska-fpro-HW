const categoriesContainer = document.querySelector(".categories");
const productsContainer = document.querySelector(".products");
const productInfoContainer = document.querySelector(".productInfo");
const ordersContainer = document.querySelector(".orders");
const myOrdersButton = document.querySelector(".myOrdersButton");

const products = [
  {
    id: 1,
    categoryName: "Овочі, фрукти",
    products: [
      {
        productName: "Яблука",
        price: 20,
        productInfo:
          " Яблука багаті на поліфеноли, які відповідають за ряд переваг для здоров'я.",
      },
      {
        productName: "Персики",
        price: 60,
        productInfo:
          "Аромат персика здатний діяти на організм людини як антидепресант. ",
      },
      {
        productName: "Помідори",
        price: 35,
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
        price: 40,
        productInfo:
          "Кефір як натуральний молочнокислий напій із мікробіологічної точки зору є надзвичайно цінним і унікальним пробіотиком.",
      },
      {
        productName: "Ряжанка",
        price: 30,
        productInfo:
          "Ряжанка — кисломолочний продукт, що виготовляється на основі коровʼячого пряженого молока та молочнокислих бактерій ",
      },
      {
        productName: "Сметана",
        price: 30,
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
        price: 28,
        productInfo:
          "Батон — поширений вид булочних виробів поряд із плетеними виробами, булками, сайками та булочною дрібницею",
      },
      {
        productName: "Круасан з шоколадом",
        price: 30,
        productInfo: "Круасани з шоколадом – кожен ранок буде добрим! ",
      },
      {
        productName: "Чіабатта",
        price: 42,
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
        price: 80,
        productInfo:
          "Зелений чай — ґатунок чаю, який досягається такою обробкою чайного листя: зав'ялювання + часткова сушка + скручування + досушування, також подрібнення",
      },
      {
        productName: "Ананасовий сік",
        price: 90,
        productInfo:
          "Ананасовий сік стимулює роботу гормональної залози, покращує роботу травного тракту і сприяє зниженню ваги.",
      },
      {
        productName: "Латте",
        price: 90,
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
  ordersContainer.innerHTML = "";
  displayOrdersButton();

  products.forEach((category) => {
    const categoryButton = document.createElement("div");
    categoryButton.style.padding = "20px";
    categoryButton.innerText = category.categoryName;
    categoryButton.addEventListener("click", () => displayProducts(category));
    categoriesContainer.appendChild(categoryButton);
  });
}

function displayOrdersButton() {
  myOrdersButton.style.display = "block";
  myOrdersButton.addEventListener("click", displayOrders);

}


function displayOrders() {
  categoriesContainer.innerHTML = "";
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";
  ordersContainer.innerHTML = "";
  myOrdersButton.style.display = "none";

  if (orders.length === 0) {
    const noOrdersMessage = document.createElement("p");
    noOrdersMessage.innerText = "Ще немає замовлень :(";
    ordersContainer.appendChild(noOrdersMessage);
  } else {
    orders.forEach((order, index) => {
      const orderDiv = document.createElement("div");
      orderDiv.style.padding = "10px";
      orderDiv.style.marginBottom = "10px";
      orderDiv.style.backgroundColor = "rgba(96, 170, 96, 0.767)";

      const orderInfo = document.createElement("p");
      
        orderInfo.innerText = `Товар "${order.productName}" - Дата: ${order.date}, Ціна: $${order.price}`;
       

      const orderDetailsButton = document.createElement("button");
      orderDetailsButton.innerText = "Детальніше";

     
      orderDetailsButton.addEventListener("click", () => {
        displayOrderDetails(order);
      });

      const deleteOrderButton = document.createElement("button");
      deleteOrderButton.innerText = "Видалити";
      deleteOrderButton.style.backgroundColor = "red";
      deleteOrderButton.addEventListener("click", () => deleteOrder(index));

      orderDiv.appendChild(orderInfo);
      orderDiv.appendChild(orderDetailsButton);
      orderDiv.appendChild(deleteOrderButton);
      ordersContainer.appendChild(orderDiv);
    });
  }
  const backButton = document.createElement("button");
  backButton.innerText = "Назад до категорій";
  backButton.style.backgroundColor = "darkgreen";

  backButton.addEventListener("click", displayCategories);
  ordersContainer.appendChild(backButton);
  
}

function displayOrderDetails(order) {
  productInfoContainer.innerHTML = "";
  ordersContainer.innerHTML = "";

  const orderDetailsHeading = document.createElement("h2");
  orderDetailsHeading.innerText = `${order.productName}`;
  orderDetailsHeading.style.padding = "20px";
  orderDetailsHeading.style.backgroundColor = "rgba(253, 108, 108, 0.562)";

  const orderDetails = document.createElement("div");
  orderDetails.style.padding = "20px";
  orderDetails.style.backgroundColor = "rgba(253, 108, 108, 0.362)";

  const productName = document.createElement("p");
  productName.innerText = `${order.productName}`;

  const price = document.createElement("p");
  price.innerText = `Ціна: $${order.price}`;

  const orderDate = document.createElement("p");
  orderDate.innerText = `Дата замовлення: ${order.date}`;

  orderDetails.appendChild(productName);
  orderDetails.appendChild(price);
  orderDetails.appendChild(orderDate);

  productInfoContainer.appendChild(orderDetailsHeading);
  productInfoContainer.appendChild(orderDetails);

  displayOrdersButton();
}

function deleteOrder(index) {
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  displayOrders();
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
  buyButton.style.border = "none";
  buyButton.style.backgroundColor = "lightblue";

  buyButton.innerText = "Купити";
  buyButton.addEventListener("click", () => {
    addToOrders(product);
    displayCategories();
  });

  productInfoContainer.appendChild(productName);
  productInfoContainer.appendChild(productInfo);
  productInfoContainer.appendChild(buyButton);
}

function addToOrders(product) {
  const order = {
    productName: product.productName,
    price: product.price,
    date: new Date().toLocaleDateString(),
  };
 orders.push(order);
 localStorage.setItem("orders", JSON.stringify(orders));
 alert("Товар додано до замовлення.");
 
}


document.addEventListener("DOMContentLoaded", () => {
  const storedOrders = localStorage.getItem("orders");
  if (storedOrders) {
    orders = JSON.parse(storedOrders);
  }
});

displayCategories();


