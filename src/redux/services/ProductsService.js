import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productOfTheDayUrl, productWithSlug, productsSaleList } from "../../helpers/urls";
import Axios from "../../axios";



export const getProductsS = createAsyncThunk('products/get', async (_, thunkApi) => {
    const response = await Axios.get(productsSaleList)

    return response.data.data
})

export const getProductWithSlug = createAsyncThunk('productSlug/get', async (slug, thunkApi) => {
    const response = await Axios.get(productWithSlug(slug))

    return response.data.data
})

export const getProductOfDay = createAsyncThunk('productSlug/get', async (_, thunkApi) => {
    const response = await Axios.get(productOfTheDayUrl)

    return response.data.data
})