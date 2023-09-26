import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../axios";
import { bannerListUrl } from "../../helpers/urls";


const EventsService = createAsyncThunk('events/get', async (_, thunkAPI) => {
    const response = await Axios.get(bannerListUrl)

    return response.data.data
})


export default EventsService