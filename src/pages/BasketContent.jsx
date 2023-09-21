import React from 'react'
import TrashIcon from '../assets/icons/TrasIcon'
import LikeIconGray from '../assets/icons/LikeIconGray'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, increaseItem, removeToCard } from '../redux/slices/CartSlice'


function BasketContent() {
    const {items} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
    <div className='basket container'>
        <div className="basket__left">
            <div className="basket__items-div">
                <h1 className="basket__items-header">
                В корзине 2 товара
                </h1>
                {
                 items.map(item => (
                    <div className="basket__items-item" key={item.id}>
                        <div className="basket__items-product">
                        <img className='basket__items-img' src={item.img} alt={item.title} />
                        <div className="basket__items-cont">
                            <a href='' className="basket__items-title">{item.title}</a>
                            {/* <p className="basket__items-subtitle">SofiTex</p> */}
                            <div className="basket__items-buttons">
                                <button className="basket__items-button">
                                    <span className="basket__items-text">В избранное</span>
                                    <span className="basket__items-icon"><LikeIconGray/></span>
                                </button>
                                <button className="basket__items-button border" onClick={() => dispatch(removeToCard(item.id))}>
                                    <span className="basket__items-text">Удалить</span>
                                    <span className="basket__items-icon"><TrashIcon /></span>
                                </button>

                            </div>
                        </div>
                        </div>
                        <div className="basket__items-price">
                            <div className="basket__items-count">
                                <div className="basket__items-quantity">
                                    <button disabled={item.qty === 1} onClick={() => dispatch(decreaseItem(item.id))}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
                                </div>
                                <div className="basket__items-prices">
                                    <div className="basket__items-price">{item.lastpayment}</div>
                                    <div className="basket__items-discount">{item.paymment}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
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
                        <input type="number" className='basket__input'/>

                        <button className='basket__button'>Применить</button>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default BasketContent