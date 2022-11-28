import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        text: ''
    },
    reducers:{
        setSearch(state, action){
            state.text = action.payload
        },
        deleteSearch(state){
            state.text=''
        }
    }

})

export const selectSearch = (state) => state.searchBar.text
export const {setSearch, deleteSearch} = searchBarSlice.actions
export default searchBarSlice.reducer