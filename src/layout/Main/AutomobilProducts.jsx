import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function AutomobilProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/Automobil_first.png",
      title: "Радар-детектор Neoline X-COP 7700s",
      lastpayment: "",
      paymment: "1 960 000 сум",
      credit: "254 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-28%",
      img: "../src/assets/img/Automobil_second.png",
      title: "Пена для чистки автомобильных шин",
      lastpayment: "55 000 сум",
      paymment: "40 000 сум",
      credit: "6 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/Automobil_third.png",
      title: "Видеорегистратор с радар-детектором",
      lastpayment: "",
      paymment: "2 805 000 сум",
      credit: "363 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Automobil_fourth.png",
      title: "Автомобильный руль Mercedes Baujun",
      lastpayment: "",
      paymment: "1 286 558 сум",
      credit: "167 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Automobil_fifth.png",
      title: "Видеорегистратор с радар-детектором",
      lastpayment: "",
      paymment: "2 930 000 сум",
      credit: "379 000 сум x 12 мес",
    },
  ];

  return (
    <div>
      <div className="cloth_f">
        <div className="container">
          <div className="cloth__content">
            <div className="cloth_first_row">
              {products.map((item, key) => (
                <ProductTechnologics
                  key={key}
                  discount={item.discount}
                  img={item.img}
                  title={item.title}
                  lastpayment={item.lastpayment}
                  paymment={item.paymment}
                  credit={item.credit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomobilProducts;
