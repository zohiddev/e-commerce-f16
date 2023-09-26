import React from 'react'
import TaqqoslashplusIcon from '../assets/icons/TaqqoslashplusIcon'
import TaqqoslashdeletIcon from '../assets/icons/TaqqoslashdeletIcon'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getComparedProducts } from '../redux/services/CompareService'
import ProductItem from '../layout/Main/ProductItem'
const CompareProducts = () => {
  const {comparedProducts, loading, items, features} = useSelector(state => state.compare)
  const dispatch = useDispatch()
  
  const createQuery = () => {
    let query = ''

    for(let i = 0; i < comparedProducts.length; i++){
      query = query + `products[${i}]=${comparedProducts[i].alias}&` 
    }

    return query
  }

  useEffect(() => {
    dispatch(getComparedProducts(createQuery()))
  }, [])

  if(loading){
    return <h1>Loading....</h1>
  }

  return (

    <div className="catalog-page">
      <div className="container">
        <div className=''>
          <div className="catalog-title-wrap">
            <h1 className="catalog-title">Сравнение товаров</h1>
          </div>
          <div className="compare__categories">
            <div className="compare__categories-inner">
              <button className="compare__categories-btn _active">
                Ноутбуки
                <span>2</span>
              </button>
            </div>
          </div>
          <div className="compare__items">
            <div className="compare__items-actions">
              <button>
                <TaqqoslashplusIcon />
                <span>Добавить товары</span>
              </button>
              <button>
                <TaqqoslashdeletIcon />
                <span>Очистить категорию</span>
              </button>
            </div>
          </div>
          <div style={{display: 'flex', gap: '16px'}}>
          {items?.map((item, key) => (
              <ProductItem
                key={key}
                product={item}
              />
            ))}
          </div>
          <div className="compare__slider-row">
            <div className="compare__info _active">
              <div className="compare__info-head">
                <span>Характеристики</span>
              </div>
              {
                features.map((item, key) => (
                  <div className="compare__info-body" key={key}>
                    <div className="compare__info-slider">
                      <div className="compare__info-slide">
                        {
                          items.map((_, i) => (
                            <div className="compare__info-item" key={i}>
                              <div className="compare__info-item-head">{item.name_oz}</div>
                              <div className="compare__info-item-text">{item.values[i] ? item.values[i].name_oz : '-'}</div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareProducts