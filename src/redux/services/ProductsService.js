import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getProductsS = createAsyncThunk('products/get', async (_, thunkApi) => {
    const response = await axios.get('https://ecommerce.main-gate.appx.uz/dev/v1/product/list')

    return response.data
})

export const getProductWithSlug = createAsyncThunk('productSlug/get', async (slug, thunkApi) => {
    const response = await axios.get(`https://ecommerce.main-gate.appx.uz/dev/v1/product/${slug}`)

    return response.data
})