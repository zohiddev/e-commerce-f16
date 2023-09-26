import { createSlice } from "@reduxjs/toolkit";
import EventsService from "../services/EventsService";

const initialState = {
    items: [],
    loading: false
}

const EventsSlice = createSlice({
    name: 'events',
    initialState,
    extraReducers:{
        [EventsService.pending]: (state) => {
            state.loading = true
        },
        [EventsService.fulfilled]: (state, action) => {
            console.log(action)
            state.items = action.payload.sliders
            state.loading = false
        },
        [EventsService.rejected]: (state, action) => {
            state.loading = false
            console.log(action.payload)
        }
    }
})

export default EventsSlice.reducer