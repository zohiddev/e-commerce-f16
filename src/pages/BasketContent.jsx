import React from 'react'

function BasketContent() {
  return (
    <div className='basket container'>
        <div className="basket__left">
            <div className="basket__items-div">
                <h1 className="basket__items-header">
                В корзине 2 товара
                </h1>
                <div className="basket__items-item">
                    <div className="basket__items-product">
                    <img className='basket__items-img' src="../src/assets/img/Cosmetics_first.png" alt="" />
                    <div className="basket__items-cont">
                        <h3 className="basket__items-title">Стайлер Dyson HS05 EU никель/медный</h3>
                        <p className="basket__items-subtitle">SofiTex</p>
                        <div className="basket__items-buttons">
                            <div className="basket__items-button">
                            В избранное
                            </div>
                            <div className="basket__items-button border">
                            Удалить
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="basket__items-price">
                        <div className="basket__items-count">
                            <div className="basket__items-quantity">- 1 +</div>
                            <div className="basket__items-prices">
                                <div className="basket__items-price">8 238 600 сум</div>
                                <div className="basket__items-discount">9 154 000 сум</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basket__items-item">
                <div className="basket__items-product">
                    <img className='basket__items-img' src="../src/assets/img/Cosmetics_first.png" alt="" />
                    <div className="basket__items-cont">
                        <h3 className="basket__items-title">Стайлер Dyson HS05 EU никель/медный</h3>
                        <p className="basket__items-subtitle">SofiTex</p>
                        <div className="basket__items-buttons">
                            <div className="basket__items-button">
                            В избранное
                            </div>
                            <div className="basket__items-button border">
                            Удалить
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="basket__items-price">
                        <div className="basket__items-count">
                            <div className="basket__items-quantity">- 1 +</div>
                            <div className="basket__items-prices">
                                <div className="basket__items-price">8 238 600 сум</div>
                                <div className="basket__items-discount">9 154 000 сум</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basket__data">
                <div className="basket__items-header">
                Ваши данные
                </div>
                <div className="basket__data-div">
                <div className="basket__data-form">
                    <p className="basket__data-title">Имя и фамилия</p>
                    <input className="basket__data-input"></input>
                </div>
                <div className="basket__data-form">
                    <p className="basket__data-title">Имя и фамилия</p>
                    <input className="basket__data-input"></input>
                </div>
                </div>
            </div>
        </div>
        <div className="basket__right">
            <div className="basket__side-menu">
                <div className="basket__price-div">
                    <div className="basket__price-div-body">
                    <div className="basket__price-name">Итого:</div>
                    <div className="basket__discount">Вы экономите: 969 080 сум</div>
                    </div>
                    <div className="basket__price-num">10 868 920 сум</div>
                </div>
                <div className="basket__content">
                    <form className="basket__form">
                        <input type="text" className='basket__input' placeholder='Введите промокод'/>
                        <button className='basket__button'>Применить</button>
                    </form>
                    <div className="basket__texts">
                   <div className="texts__div">Стоимость:                   <div className="texts__num">10 868 920 сум</div></div> 
                   <div className="texts__div">Промокод:                      <div className="texts__num">0 сум</div></div>       
                   <div className="texts__div">Использованный<br />
                    бонус:                                 <div className="texts__num">0 сум</div></div>
                    <div className="texts__div">Размер комиссии за<br />               <div className="texts__num">0 %</div></div>
                    <div className="texts__div">наличный расчет:    </div>
                    <div className="texts__div">Стоимость доставки:                    <div className="texts__num">0 сум</div> </div>
                    </div>

                    <div className="basket__line"></div>

                    <div className="basket__texts">
                    <div className="texts__div">Доставка:                   <div className="texts__num">Курьером</div></div>
                    <div className="texts__div">Способ оплаты: </div>
                    <div className="texts__div">Тип заказа:                  <div className="texts__num">Покупка</div> </div>
                    </div>
                    <div className="basket__order">
                        <div className="basket__avtorization">O Вы не авторизованы</div>
                        <button className="basket__button-xl">Оформить заказ</button>
                        <div className="basket__agree">
                        Нажимая 'Оформить заказ', я соглашаюсь с <a href="" className='basket__link'>публичным договором оферты</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basket__content basket__small-menu">
                <div className="basket__price-div">
                    <div className="basket__price-name">Итого:</div>
                    <div className="basket__price-num">10 868 920 сум</div>
                </div>
                    <form className="basket__form">
                        <input type="text" className='basket__input'/>
                        <button className='basket__button'>Применить</button>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default BasketContent