import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
    'content/loadComments',
    async({id, subreddit})=>{
        const response= await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`)
        const jsonResponse = await response.json()
        return jsonResponse
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        tile:{},
        commentsLoading: false,
        failToLoadComments: false
    },
    extraReducers: (builder)=>{
        builder
            .addCase(loadComments.pending,(state)=>{
                state.commentsLoading= true
                state.failToLoadComments= false
            })
            .addCase(loadComments.fulfilled,(state, {payload})=>{
                state.commentsLoading= false
                state.failToLoadComments= false
                state.tile = payload[0].data.children[0].data
                state.comments = payload[1].data.children.map(element=>element.data.body)
            })
            .addCase(loadComments.rejected,(state)=>{
                state.commentsLoading= false
                state.failToLoadComments= true
            })
            
    }

})

export const selectTile = state => state.comments.tile
export const selectComments = state => state.comments.comments
export const commentsLoading = state => state.comments.commentsLoading
export const failToLoadComments = state => state.comments.failToLoadComments
export default commentsSlice.reducer