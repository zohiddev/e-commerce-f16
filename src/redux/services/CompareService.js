import { createAsyncThunk } from "@reduxjs/toolkit"
import { compareProductsUrl } from "../../helpers/urls"
import Axios from "../../axios"



export const getComparedProducts = createAsyncThunk('comparedProducts/get', async (query, thunkApi) => {
    const response = await Axios.get(compareProductsUrl(query))

    return response.data.data
})