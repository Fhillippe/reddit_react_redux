import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "../features/searchBar/SearchBarSlice";
import contentSlice from "../features/content/contentSlice";
import commentsSlice from "../features/comments/commentsSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarSlice,
    content: contentSlice,
    comments: commentsSlice
  }
});