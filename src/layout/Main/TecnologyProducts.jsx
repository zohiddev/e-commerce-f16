import React from "react";
import ProductTechnologics from "./ProductTechnologics";
import { productsTechnologics } from "../../utils/data";

function TecnologyProducts() {


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
                  id={item.id}
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
