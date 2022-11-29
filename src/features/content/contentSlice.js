import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadContent = createAsyncThunk(
    'content/LoadContent',
    async(search)=>{
        const response= await fetch(`https://www.reddit.com/search.json?q=${search}`)
        const jsonResponse = await response.json()
        return jsonResponse
    }
)

export const loadComments = createAsyncThunk(
    'content/LoadComments',
    async({id, subreddit})=>{
        const response= await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`)
        const jsonResponse = await response.json()
        return jsonResponse
    }
)


export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content : [],
        comments: [],
        isContentLoading: false,
        failToLoadContent: false,
        commentsLoading: false,
        failToLoadComments: false
    },
    extraReducers: (builder)=>{
        builder
            .addCase(loadContent.pending,(state)=>{
                state.isContentLoading= true
                state.failToLoadContent= false
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
            })
            .addCase(loadComments.pending,(state)=>{
                state.commentsLoading= true
                state.failToLoadComments= false
            })
            .addCase(loadComments.fulfilled,(state, {payload})=>{
                state.commentsLoading= false
                state.failToLoadComments= false
                state.comments = [...payload[1].data.children]
            })
            .addCase(loadComments.rejected,(state)=>{
                state.commentsLoading= false
                state.failToLoadComments= true
            })
            
    }

})

export const selectContent = state => state.content.content
export const selectComments = state => state.content.comments
export const isContentLoading = state => state.content.isContentLoading
export const failToLoadContent = state => state.content.failToLoadContent
export default contentSlice.reducer