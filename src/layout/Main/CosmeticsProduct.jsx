import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function CosmeticsProducts() {
  const products = [
    {
      id: 1,
      discount: "10%",
      img: "../src/assets/img/Cosmetics_first.png",
      title: "Стайлер Dyson HS05 EU никель/медный",
      lastpayment: "9 154 000 сум",
      paymment: "8 238 600 сум",
      credit: "1 066 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-8%",
      img: "../src/assets/img/Cosmetics_second.png",
      title: "Стайлер Dyson Airwrap Complete Long",
      lastpayment: "9 549 000 сум",
      paymment: "8 798 000 сум",
      credit: "1 138 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-43%",
      img: "../src/assets/img/Cosmetics_third.png",
      title: "Antonio Banderas Blue Seduction EDT 100ml",
      lastpayment: "613 000 сум",
      paymment: "350 000 сум",
      credit: "46 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_fourth.png",
      title: "Отбеливающее мыло Dr. Rashel 100 гр.",
      lastpayment: "",
      paymment: "35 000 сум",
      credit: "5 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_fifth.png",
      title: "Увлажняющий тональный кушон Missha Magic",
      lastpayment: "",
      paymment: "90 000 сум",
      credit: "12 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_sixth.png",
      title: "Набор кистей YEAHJIN FASHION маленький",
      lastpayment: "",
      paymment: "18 000 сум",
      credit: "3 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_seventh.png",
      title: "Крем Кутис /Cutis Cream/-30 GM",
      lastpayment: "",
      paymment: "17 500 сум",
      credit: "3 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_eighth.png",
      title: "Мыло для волос Black Polygonum Soap",
      lastpayment: "",
      paymment: "29 000 сум",
      credit: "4 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_nineth.png",
      title: "Toy 2 Moschino 100ml EDP (Original)",
      lastpayment: "",
      paymment: "748 000 сум",
      credit: "97 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "0%",
      img: "../src/assets/img/Cosmetics_tenth.png",
      title: "Dolce & Gabbana Light Blue pour Femme EDT",
      lastpayment: "",
      paymment: "899 000 сум",
      credit: "113 000 сум x 12 мес",
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

export default CosmeticsProducts;
