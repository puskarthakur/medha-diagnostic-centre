import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './Reducers/orderReducer'

const store = configureStore({
    reducer:{
        order:orderReducer

    }
})

export default store