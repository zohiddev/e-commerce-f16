import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getProductWithSlug } from '../redux/services/ProductsService'

const ProductItem = () => {
  const {product, loading} = useSelector(state => state.product)
  const params = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProductWithSlug(params.slug))
  }, [])

  console.log(params)

  return (
    <div>
      {
        loading ? <h1>Loading....</h1> : <div>
          <h1>{product.name_uz}</h1>
          <img src={product.image} alt={product.name_uz}/>
        </div>
      }
    </div>
  )
}

export default ProductItem