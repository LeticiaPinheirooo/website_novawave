/*FUNCIONA O ACORDEAO*/
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".faq-item");

    accordions.forEach((accordion) => {
      accordion.addEventListener("toggle", () => {
        if (accordion.open) {
          accordions.forEach((other) => {
            if (other !== accordion && other.open) {
              other.open = false;
            }
          });
        }
      });
    });
  });

