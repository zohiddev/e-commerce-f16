import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function ConditsionerProducts() {
  const products = [
    {
      id: 1,
      discount: "-50%",
      img: "../src/assets/img/conditsioner_first.png",
      title: "Вертикальный пылесос Arzum AR4064 Hera Eco 2-",
      lastpayment: "1 480 000 сум",
      paymment: "740 000 сум",
      credit: "96 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/conditsioner_second.png",
      title: "Кондиционер Artel Iceberg 12HDG Invertor",
      lastpayment: "",
      paymment: "5 266 000 сум",
      credit: "681 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/conditsioner_third.png",
      title: "Кондиционер Artel ART- 12HS Shah Inventor",
      lastpayment: "",
      paymment: "4 900 000 сум",
      credit: "634 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/conditsioner_fourth.png",
      title: "Кондиционер Avalon ART- 12HQ (Inverter Wi-Fi)",
      lastpayment: "",
      paymment: "7 293 000 сум",
      credit: "985 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/conditsioner_fifth.png",
      title: "Кондиционер Artel Everest 12 Inverter",
      lastpayment: "",
      paymment: "5 545 000 сум",
      credit: "717 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "0%",
      img: "../src/assets/img/conditsioner_sixth.png",
      title: "Вентилятор Vitek VT-1926",
      lastpayment: "",
      paymment: "374 000 сум",
      credit: "49 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/conditsioner_seventh.png",
      title: "Стиральная машина Artel WF60F010AW",
      lastpayment: "",
      paymment: "3 641 000 сум",
      credit: "471 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "0%",
      img: "../src/assets/img/conditsioner_eighth.png",
      title: "Кондиционер Moonx Flora 12",
      lastpayment: "",
      paymment: "4 868 000 сум",
      credit: "630 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/conditsioner_nineth.png",
      title: "Мойка высокого давления Welloo HPW63165",
      lastpayment: "",
      paymment: "1 360 000 сум",
      credit: "176 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "0%",
      img: "../src/assets/img/conditsioner_tenth.png",
      title: "Кондиционер Shivaki- Emura 09HF R410 Белый",
      lastpayment: "",
      paymment: "4 551 000 сум",
      credit: "22 000 сум x 12 мес",
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

export default ConditsionerProducts;
