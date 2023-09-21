import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const EventsService = createAsyncThunk('events/get', async (_, thunkAPI) => {
    const response = await axios.get('https://ecommerce.main-gate.appx.uz/dev/v1/events/list')

    return response.data
})


export default EventsService