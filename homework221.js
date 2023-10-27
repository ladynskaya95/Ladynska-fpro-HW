class SuperMath {
            check(obj) {
                if (['+', '-', '/', '*', '%'].includes(obj.znak)) {
                    try {
                        const result = eval(`${obj.X} ${obj.znak} ${obj.Y}`);
                        const resultElement = document.getElementById('result');
                        resultElement.textContent = `Результат: ${result}`;
                    } catch (error) {
                        // Обробка помилок
                    }
                } else {
                    // Некоректний знак операції
                }
            }
        }

        const p = new SuperMath();
        const calculateButton = document.getElementById('calculate');
        calculateButton.addEventListener("click", () => {
          const X = parseFloat(document.getElementById("X").value);
          const Y = parseFloat(document.getElementById("Y").value);
          const znak = document.getElementById("znak").value;
          p.check({ X, Y, znak });
        });