document.addEventListener("DOMContentLoaded", function () {
  const httpButton = document.getElementById("httpButton");
  const httpsButton = document.getElementById("httpsButton");

  httpButton.addEventListener("click", function () {
    redirectToUrl("https://www.google.com.ua/");
  });

  httpsButton.addEventListener("click", function () {
    redirectToUrl("https://www.google.com.ua/");
  });

  function redirectToUrl(url) {
    if (!/^https?:\/\//i.test(url)) {
      url = "http://" + url;
    }
    window.location.href = url;
  }
});
