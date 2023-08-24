import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function TelevisionsProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/Televisions_first.png",
      title: "Телевизор Premier 43 PRM 700S Smart TV",
      lastpayment: "",
      paymment: "3 227 000 сум",
      credit: "418 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-18%",
      img: "../src/assets/img/Televisions_second.png",
      title: "Телевизор Vesta V32LH4000 32",
      lastpayment: "1 570 000 сум",
      paymment: "1 288 000 сум",
      credit: "167 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/Televisions_third.png",
      title: "Artel TV A43KF5500 (109 см) Android",
      lastpayment: "",
      paymment: "3 216 000 сум",
      credit: "416 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/Televisions_fourth.png",
      title: "Телевизор Shivaki US43H3303",
      lastpayment: "",
      paymment: "2 985 000 сум",
      credit: "386 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/Televisions_fifth.png",
      title: "Телевизор ART A32KH5000 norm черный",
      lastpayment: "",
      paymment: "1 285 000 сум",
      credit: "167 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "-7%",
      img: "../src/assets/img/Televisions_sixth.png",
      title: "Sony PlayStation 5 + DVD (from U.A.E)",
      lastpayment: "8 000 000 сум",
      paymment: "7 450 000 сум",
      credit: "964 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/Televisions_seventh.png",
      title: "ТВ-приставка Xiaomi TV Box S (2nd Gen)",
      lastpayment: "",
      paymment: "799 000 сум",
      credit: "104 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "-9%",
      img: "../src/assets/img/Televisions_eighth.png",
      title: "Телевизоры Artel A43KF5000 norm Чёрный",
      lastpayment: "2 852 000 сум",
      paymment: "2 602 000 сум",
      credit: "337 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/Televisions_nineth.png",
      title: "Геймпад Sony Dualshock 4 PS4 Jet Black",
      lastpayment: "",
      paymment: "265 000 сум",
      credit: "35 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "0%",
      img: "../src/assets/img/Televisions_tenth.png",
      title: "Xiaomi Mi TV Stick",
      lastpayment: "",
      paymment: "507 000 сум",
      credit: "66 000 сум x 12 мес",
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

export default TelevisionsProducts;
