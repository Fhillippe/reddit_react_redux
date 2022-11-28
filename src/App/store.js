import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "../features/searchBar/SearchBarSlice";
import contentSlice from "../features/content/contentSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarSlice,
    content: contentSlice
  }
});