import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function BooksProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/Books_first.png",
      title: "Шайх Муҳаммад Содиқ Муҳаммад Юсуф",
      lastpayment: "",
      paymment: "884 000 сум",
      credit: "115 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/Books_second.png",
      title: "Трудовой кодекс Республики Узбекистан",
      lastpayment: "",
      paymment: "120 000 сум",
      credit: "16 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/Books_third.png",
      title: "Лидернинг олтин китоби",
      lastpayment: "",
      paymment: "35 000 сум",
      credit: "5 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Books_fourth.png",
      title: "Дейл Карнеги: Қандай қилиб дўст орттириш ва",
      lastpayment: "",
      paymment: "30 000 сум",
      credit: "4 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Books_fifth.png",
      title: "Ҳакан Ўзкан: Воз кечилмас аёл бўлиш",
      lastpayment: "",
      paymment: "52 000 сум",
      credit: "7 000 сум x 12 мес",
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

export default BooksProducts;
