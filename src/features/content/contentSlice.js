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
        faileToLoadContent: false
    },
    extraReducers: (builder)=>{
        builder
            .addCase(loadContent.pending,(state)=>{
                state.isContentLoading= true
                state.faileToLoadContent= false
            })
            .addCase(loadContent.fulfilled,(state, {payload})=>{
                state.isContentLoading= false
                state.faileToLoadContent= false
                state.content = payload.data.children
            })
            .addCase(loadContent.rejected,(state)=>{
                state.isContentLoading= false
                state.faileToLoadContent= true
            })
            
    }

})

export const selectContent = state => state.content.content
export default contentSlice.reducer