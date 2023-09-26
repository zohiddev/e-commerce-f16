import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../axios";
import { categoriesListUrl } from "../../helpers/urls";


export const getCategoriesList = createAsyncThunk('categoriesList/get', async (_, thunkApi) => {
    const response = await Axios.get(categoriesListUrl)

    return response.data.data
})