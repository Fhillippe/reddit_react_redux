import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadContent = createAsyncThunk(
    'content/LoadContent',
    async(search)=>{
        console.log(search)
        const response= await fetch(`https://www.reddit.com/search.json?q=${search}`)
        const jsonResponse = await response.json()
        return jsonResponse
    }
)


export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content : [],
        isContentLoading: false,
        failToLoadContent: false
    },
    extraReducers: (builder)=>{
        builder
            .addCase(loadContent.pending,(state)=>{
                state.isContentLoading= true
                state.failToLoadContent= false
                state.noResults= false
            })
            .addCase(loadContent.fulfilled,(state, {payload})=>{
                const newContent = payload.data.children
                state.isContentLoading= false
                state.failToLoadContent= false
                state.content = newContent
            })
            .addCase(loadContent.rejected,(state)=>{
                state.isContentLoading= false
                state.failToLoadContent= true
                state.noResults = false
            })
            
    }

})

export const selectContent = state => state.content.content
export const isContentLoading = state => state.content.isContentLoading
export const failToLoadContent = state => state.content.failToLoadContent
export default contentSlice.reducer