import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function FakirProducts() {
  const products = [
    {
      id: 1,
      discount: "-20%",
      img: "../src/assets/img/Fakir_first.png",
      title: "Турецкая кофемашина Beny",
      lastpayment: "364 000 сум",
      paymment: "291 200 сум",
      credit: "38 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-20%",
      img: "../src/assets/img/Fakir_second.png",
      title: "Кухонный комбайн Fakir Culina Chef Розовый",
      lastpayment: "5 825 000 сум",
      paymment: "4 660 000 сум",
      credit: "603 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-5%",
      img: "../src/assets/img/Fakir_third.png",
      title: "Кофеварка Fakir Kaave Mono Фиолетовый",
      lastpayment: "837 000 сум",
      paymment: "795 150 сум",
      credit: "103 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "-20%",
      img: "../src/assets/img/Fakir_fourth.png",
      title: "Блендер Fakir Mr Chef Quadro Красный",
      lastpayment: "1 408 000 сум",
      paymment: "1 126 400 сум",
      credit: "146 000 сум x 12 мес",
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

export default FakirProducts;
