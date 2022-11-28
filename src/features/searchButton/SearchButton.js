import { useDispatch, useSelector } from "react-redux"
import { selectSearch } from "../searchBar/SearchBarSlice"
import { loadContent } from "../content/contentSlice"

export const SearchButton = () => {
    const dispatch = useDispatch()
    const searchFor = useSelector(selectSearch)
    const handleSearch = () =>{
        dispatch(loadContent(searchFor))
    }

    return (
        <button
        onClick={handleSearch}
        >Search</button> 
    )
}