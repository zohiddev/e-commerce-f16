import React from "react";
import ProductTechnologics from "./ProductTechnologics";
function BuildingMaterialsProducts() {
  const products = [
    {
      id: 1,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_first.png",
      title: "Стабилизатор напряжения Andeli ASV-",
      lastpayment: "",
      paymment: "1 760 000 сум",
      credit: "228 000 сум x 12 мес",
    },
    {
      id: 2,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_second.png",
      title: "Набор инструментов TOTAL THKTHP1152",
      lastpayment: "",
      paymment: "728 000 сум",
      credit: "95 000 сум x 12 мес",
    },
    {
      id: 3,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_third.png",
      title: "Аккумуляторная отвертка TOTAL TSDLI0801",
      lastpayment: "",
      paymment: "398 000 сум",
      credit: "52 000 сум x 12 мес",
    },
    {
      id: 4,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_fourth.png",
      title: "Торцовочная пила Bosch GCM 216",
      lastpayment: "",
      paymment: "2 063 000 сум",
      credit: "267 000 сум x 12 мес",
    },
    {
      id: 5,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_fifth.png",
      title: "Аппарат для сварки пластиковых труб Welloo",
      lastpayment: "",
      paymment: "303 000 сум",
      credit: "40 000 сум x 12 мес",
    },
    {
      id: 6,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_sixth.png",
      title: "Цифровой мультиметр UNIT UT89x",
      lastpayment: "",
      paymment: "343 000 сум",
      credit: "45 000 сум x 12 мес",
    },
    {
      id: 7,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_seventh.png",
      title: "Набор розеток Total THT141451",
      lastpayment: "",
      paymment: "388 000 сум",
      credit: "51 000 сум x 12 мес",
    },
    {
      id: 8,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_eighth.png",
      title: "Ножовка по дереву INGCO HHAS28400",
      lastpayment: "",
      paymment: "89 000 сум",
      credit: "12 000 сум x 12 мес",
    },
    {
      id: 9,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_nineth.png",
      title: "Краскопульт Total TT3506",
      lastpayment: "",
      paymment: "342 000 сум",
      credit: "45 000 сум x 12 мес",
    },
    {
      id: 10,
      discount: "0%",
      img: "../src/assets/img/BuildingMaterials_tenth.png",
      title: "Перфоратор Total TH1153236",
      lastpayment: "",
      paymment: "1 323 000 сум",
      credit: "172 000 сум x 12 мес",
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

export default BuildingMaterialsProducts;
