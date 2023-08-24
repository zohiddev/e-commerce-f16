import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function SportsToolsProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/SportsTools_first.png",
      title: "Обруч Hula Hoop 6018 PowerGym",
      lastpayment: "",
      paymment: "390 000 сум",
      credit: "51 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/SportsTools_second.png",
      title: "Набор гантелей 10кг 6 в 1",
      lastpayment: "",
      paymment: "730 000 сум",
      credit: "95 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-10%",
      img: "../src/assets/img/SportsTools_third.png",
      title: "Велосипед Skillmax SK- 047",
      lastpayment: "2 427 000 сум",
      paymment: "2 184 300 сум",
      credit: "283 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/SportsTools_fourth.png",
      title: "Кинезио Тейп лента эластичная на клейкой",
      lastpayment: "",
      paymment: "121 000 сум",
      credit: "16 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/SportsTools_fifth.png",
      title: "Протеин Чистая изо- сыворотка Ява Лабс Yava",
      lastpayment: "",
      paymment: "830 000 сум",
      credit: "108 000 сум x 12 мес",
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

export default SportsToolsProducts;
