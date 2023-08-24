import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function WashingMachinesProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/WashingMachines_first.png",
      title: "Стиральная машина Artel WF60F010AW",
      lastpayment: "",
      paymment: "3 641 000 сум",
      credit: "471 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/WashingMachines_second.png",
      title: "Стиральная машина полуавтомат Artel",
      lastpayment: "",
      paymment: "2 184 000 сум",
      credit: "283 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/WashingMachines_third.png",
      title: "Cтиральные машины Shivaki-TG90P 9кг",
      lastpayment: "",
      paymment: "1 978 000 сум",
      credit: "256 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/WashingMachines_fourth.png",
      title: "Стиральная машина LG F4V5VG2S (9 кг)",
      lastpayment: "",
      paymment: "8 847 000 сум",
      credit: "1 144 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/WashingMachines_fifth.png",
      title: "Стиральная машина полуавтомат Artel-",
      lastpayment: "",
      paymment: "1 480 000 сум",
      credit: "192 000 сум x 12 мес",
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

export default WashingMachinesProducts;
