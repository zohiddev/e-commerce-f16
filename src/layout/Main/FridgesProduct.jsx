import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function FridgesProducts() {
  const products = [
    {
      id: 1,
      discount: "-20%",
      img: "../src/assets/img/Fridges_first.png",
      title: "Вытяжка Goodwell GWH- R0260B",
      lastpayment: "2 254 000 сум",
      paymment: "1 803 200 сум",
      credit: "234 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/Fridges_second.png",
      title: "Сервиз столовый Torix 88 пр LA DOLCE 1998",
      lastpayment: "",
      paymment: "1 214 000 сум",
      credit: "157 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-8%",
      img: "../src/assets/img/Fridges_third.png",
      title: "Набор кухонных ножей Kukmara 8 предметов",
      lastpayment: "285 000 сум",
      paymment: "265 000 сум",
      credit: "35 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Fridges_fourth.png",
      title: "Узкий двухкамерный холодильник с нижней",
      lastpayment: "",
      paymment: "3 791 536 сум",
      credit: "491 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Fridges_fifth.png",
      title: "Xолодильник Shivaki HD 345 RN Тёмный стальной",
      lastpayment: "",
      paymment: "4 490 000 сум",
      credit: "581 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "-8%",
      img: "../src/assets/img/Fridges_sixth.png",
      title: "Чайник нержавейка kuk- 07/3103 3,0 л Зелёный",
      lastpayment: "252 000 сум",
      paymment: "232 000 сум",
      credit: "30 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/Fridges_seventh.png",
      title: "Набор ложек и вилок DF- 2435 36 шт.",
      lastpayment: "",
      paymment: "291 000 сум",
      credit: "38 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "0%",
      img: "../src/assets/img/Fridges_eighth.png",
      title: "Холодильник Бирюса 122",
      lastpayment: "",
      paymment: "3 298 389 сум",
      credit: "427 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/Fridges_nineth.png",
      title: "Холодильник Бирюса 110",
      lastpayment: "",
      paymment: "3 030 677 сум",
      credit: "392 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "-5%",
      img: "../src/assets/img/Fridges_tenth.png",
      title: "Набор посуды Queen 005",
      lastpayment: "2 136 000 сум",
      paymment: "2 029 200 сум",
      credit: "263 000 сум x 12 мес",
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

export default FridgesProducts;
