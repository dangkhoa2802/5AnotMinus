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

      const applyCouponBtn = document.querySelector(".coupon button");
      const cartTotalPrice = document.querySelector(".cart-total-price");

      applyCouponBtn.addEventListener("click", () => {
        // Hiển thị loader
        const loader = document.querySelector(".loader");
        loader.style.display = "block";

        // Đợi 1 giây
        setTimeout(function () {
          // Ẩn loader và thay đổi nội dung của phần tổng giá tiền của giỏ hàng
          loader.style.display = "none";
          cartTotalPrice.innerHTML =
            "<div><p>Subtotal</p><p>Shipping</p><p>Total</p></div><div><p>Free</p><p>Free</p><p>Free</p></div>";
        }, 1500);
      });