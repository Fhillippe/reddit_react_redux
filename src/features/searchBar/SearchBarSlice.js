import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        text: '',
        deleteHidden:true
    },
    reducers:{
        setSearch(state, action){
            state.text = action.payload
        },
        deleteSearch(state){
            state.text=''
        },
        hideDelete(state){
            state.deleteHidden=true
        },
        showDelete(state){
            state.deleteHidden=false
        }
    }

})

export const selectSearch = (state) => state.searchBar.text
export const selectDeleteHidden = (state) => state.searchBar.deleteHidden
export const {setSearch, deleteSearch, hideDelete, showDelete} = searchBarSlice.actions
export default searchBarSlice.reducer