
const quantityBoxes = document.querySelectorAll(".quantity-box");

      quantityBoxes.forEach((quantityBox) => {
        const quantityInput = quantityBox.querySelector(".quantity-input");
        const quantityMinus = quantityBox.querySelector(".quantity-minus");
        const quantityPlus = quantityBox.querySelector(".quantity-plus");

        quantityMinus.addEventListener("click", () => {
          if (quantityInput.value > 1) {
            quantityInput.value--;
          } else {
            quantityInput.value = 0;
          }
        });

        quantityPlus.addEventListener("click", () => {
          quantityInput.value++;
        });
      });


