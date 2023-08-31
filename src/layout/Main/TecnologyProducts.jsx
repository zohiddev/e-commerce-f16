import React from "react";
import ProductTechnologics from "./ProductTechnologics";

function TecnologyProducts() {
  const productsTechnologics = [
    {
      id: 1,
      discount: "-8%",
      img: "../src/assets/img/noutbuk_first.png",
      title: "Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15.6 HD (from",
      lastpayment: "2 852 000 сум",
      paymment: "2 623 840 сум",
      credit: "355 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "-10%",
      img: "../src/assets/img/pen.png",
      title: "Стайлер Dyson HS05 EU никель/ медный",
      lastpayment: "9 154 000 сум",
      paymment: "8 238 600 сум",
      credit: "1 066 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "-24%",
      img: "../src/assets/img/phone_first.png",
      title: "Redmi Note 12 Pro 4G (Global) Графитово-серый 8/256 GB",
      lastpayment: "3 978 000 сум",
      paymment: "3 028 000 сум",
      credit: "392 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/noutbuk_second.png",
      title: "Ноутбук Lenovo Ideapad 1 15IGL7 N4020 4/256 GB SSD 15.6 HD",
      lastpayment: "",
      paymment: "2 563 200 сум",
      credit: "332 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/phone_second.png",
      title: "Honor X9a изумрудно-зеленый 8/256 GB",
      lastpayment: "",
      paymment: "4 516 000 сум",
      credit: "584 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "-28%",
      img: "../src/assets/img/phone_third.png",
      title: "Samsung Galaxy A14 (Global) Черный 6/128 GB",
      lastpayment: "2 859 000 сум",
      paymment: "2 077 000 сум",
      credit: "269 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "-20%",
      img: "../src/assets/img/noutbuk_third.png",
      title: "Ноутбук Asus Rog Strix G17 R-7 4800H 16/512GB PCIe SSD RTX-",
      lastpayment: "16 989 000 сум",
      paymment: "13 591 200 сум",
      credit: "1 758 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "-27%",
      img: "../src/assets/img/noutbuk_fourth.png",
      title: "Ноутбук Lenovo 81WQ001XRK V15 N4020 4GB 1TB 15.6",
      lastpayment: "4 025 000 сум",
      paymment: "2 953 000 сум",
      credit: "356 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "-50%",
      img: "../src/assets/img/pylesos.png",
      title: "Вертикальный пылесос Arzum AR4064 Hera Eco 2-в-1",
      lastpayment: "1 480 000 сум",
      paymment: "740 000 сум",
      credit: "96 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "-7%",
      img: "../src/assets/img/noutbuk_fifth.png",
      title: "Ноутбук Honor MagicBook 15 R5 512GB",
      lastpayment: "8 645 000 сум",
      paymment: "8 039 849 сум",
      credit: "1 040 000 сум x 12 мес",
    },
  ];

  return (
    <div>
      <div className="noutbuk_f">
        <div className="container">
          <div className="noutbook__content">
            <div className="noutbuk_first_row">
              {productsTechnologics.map((item, key) => (
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

export default TecnologyProducts;
