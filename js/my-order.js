var fromDateInput = document.querySelector("#from-date-input");
      var toDateInput = document.querySelector("#to-date-input");

      var fromDatepicker = flatpickr(fromDateInput, {
        dateFormat: "d/m/Y",
      });

      var toDatepicker = flatpickr(toDateInput, {
        dateFormat: "d/m/Y",
      });

      var fromDatepickerBtn = document.querySelector("#from-date-picker-btn");
      var toDatepickerBtn = document.querySelector("#to-date-picker-btn");

      fromDatepickerBtn.addEventListener("click", function () {
        fromDatepicker.open();
      });

      toDatepickerBtn.addEventListener("click", function () {
        toDatepicker.open();
      });