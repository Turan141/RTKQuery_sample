import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: []
}

export const productsApiSlice = createSlice({
    name: 'productsApi',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addToBasket } = productsApiSlice.actions

export default productsApiSlice.reducer
