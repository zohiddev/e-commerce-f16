import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function ClothesProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/clothes_first.png",
      title: "Рубашка белая 504",
      lastpayment: "",
      paymment: "219 000 сум",
      credit: "29 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-10%",
      img: "../src/assets/img/clothes_second.png",
      title: "Юбка клеш Anaki 773 серый",
      lastpayment: "",
      paymment: "105 000 сум",
      credit: "14 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-24%",
      img: "../src/assets/img/clothes_third.png",
      title: "Брюки AW23CA3S-2- 18934",
      lastpayment: "",
      paymment: "289 990 сум",
      credit: "38 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/clothes_fourth.png",
      title: "Рубашка короткий рукав SS23CL2N-19-12460",
      lastpayment: "",
      paymment: "190 000 сум",
      credit: "25 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/clothes_fifth.png",
      title: "Юбка клеш Anaki 773 черный",
      lastpayment: "",
      paymment: "105 000 сум",
      credit: "14 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "-28%",
      img: "../src/assets/img/clothes_sixth.png",
      title: "Набор для студентов ART- 01",
      lastpayment: "955 000 сум",
      paymment: "799 000 сум",
      credit: "104 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "-20%",
      img: "../src/assets/img/clothes_seventh.png",
      title: "Набор для студентов ART- 05",
      lastpayment: "1 055 000 сум",
      paymment: "805 000 сум",
      credit: "105 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "-27%",
      img: "../src/assets/img/clothes_eighth.png",
      title: "Школьный набор для 5-11 классов",
      lastpayment: "684 000 сум",
      paymment: "649 800 сум",
      credit: "85 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "-50%",
      img: "../src/assets/img/clothes_nineth.png",
      title: "Брюки AW23CA3N-2- 18668",
      lastpayment: "",
      paymment: "290 000 сум",
      credit: "38 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "-7%",
      img: "../src/assets/img/clothes_tenth.png",
      title: "Рубашка длинный рукав SS23CA2N-19-12677",
      lastpayment: "290 000 сум",
      paymment: "170 000 сум",
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

export default ClothesProducts;
