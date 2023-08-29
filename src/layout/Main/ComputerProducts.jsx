import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function ComputerProducts() {
  const products = [
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
        discount: "0%",
        img: "../src/assets/img/noutbuk_second.png",
        title: "Ноутбук Lenovo Ideapad 1 15IGL7 N4020 4/256 GB SSD 15.6 HD",
        lastpayment: "",
        paymment: "2 563 200 сум",
        credit: "332 000 сум x 12 мес",
    },
    // {
    //     id: 3,
    //     discount: "-20%",
    //     img: "../src/assets/img/noutbuk_third.png",
    //     title: "Ноутбук Asus Rog Strix G17 R-7 4800H 16/512GB PCIe SSD RTX-",
    //     lastpayment: "16 989 000 сум",
    //     paymment: "13 591 200 сум",
    //     credit: "1 758 000 сум x 12 мес",
    // },
    // {
    //     id: 4,
    //     discount: "-27%",
    //     img: "../src/assets/img/noutbuk_fourth.png",
    //     title: "Ноутбук Lenovo 81WQ001XRK V15 N4020 4GB 1TB 15.6",
    //     lastpayment: "4 025 000 сум",
    //     paymment: "2 953 000 сум",
    //     credit: "356 000 сум x 12 мес",
    // },
    // {
    //     id: 5,
    //     discount: "-7%",
    //     img: "../src/assets/img/noutbuk_fifth.png",
    //     title: "Ноутбук Honor MagicBook 15 R5 512GB",
    //     lastpayment: "8 645 000 сум",
    //     paymment: "8 039 849 сум",
    //     credit: "1 040 000 сум x 12 мес",
    // },
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

export default ComputerProducts;
