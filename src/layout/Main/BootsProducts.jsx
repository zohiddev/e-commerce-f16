import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function BootsProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/Boots_first.png",
      title: "Мужские Кроссовки АРТ 554865",
      lastpayment: "",
      paymment: "480 000 сум",
      credit: "63 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/Boots_second.png",
      title: "Мужские Кроссовки АРТ 4457812",
      lastpayment: "",
      paymment: "540 000 сум",
      credit: "70 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/Boots_third.png",
      title: "Мягкие мокасины из нубука",
      lastpayment: "",
      paymment: "2 124 500 сум",
      credit: "275 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Boots_fourth.png",
      title: "Мокасины с коричневой лентой",
      lastpayment: "",
      paymment: "2 124 500 сум",
      credit: "275 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Boots_fifth.png",
      title: "ЗАМШЕВЫЕ ЛОФЕРЫ НА БРЕТЕЛЬКАХ С РАЗРЕЗОМ",
      lastpayment: "",
      paymment: "1 990 960 сум",
      credit: "258 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "0%",
      img: "../src/assets/img/Boots_sixth.png",
      title: "МАССИВНЫЕ БОТИНКИ НА ШНУРОВКЕ",
      lastpayment: "",
      paymment: "1 250 420 сум",
      credit: "162 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/Boots_seventh.png",
      title: "КОРЕНАСТЫЕ ТУФЛИ С ЗАСТЕЖКОЙ",
      lastpayment: "",
      paymment: "983 340 сум",
      credit: "128 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "0%",
      img: "../src/assets/img/Boots_eighth.png",
      title: "БОТИЛЬОНЫ ИЗ ЗАМШЕВОЙ КОЖИ С",
      lastpayment: "",
      paymment: "1 250 420 сум",
      credit: "162 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/Boots_nineth.png",
      title: "САНДАЛИИ ИЗ ЗАМШЕВОЙ КОЖИ С",
      lastpayment: "",
      paymment: "776 960 сум",
      credit: "101 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "0%",
      img: "../src/assets/img/Boots_tenth.png",
      title: "ПЛЕТЕНЫЕ САНДАЛИИ",
      lastpayment: "",
      paymment: "388 480 сум",
      credit: "51 000 сум x 12 мес",
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

export default BootsProducts;
