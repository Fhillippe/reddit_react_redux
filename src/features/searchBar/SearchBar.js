import { useSelector, useDispatch } from "react-redux";
import { selectSearch, setSearch, deleteSearch } from "./SearchBarSlice";


export const SearchBar = () =>{
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    const handleChange = ({target}) =>{
        dispatch(setSearch(target.value))
    }  

    const handleDelete = () =>{
        dispatch(deleteSearch())
    }

    return (
        <div className="searchBar">
            <input 
                value={search}
                onChange={handleChange}
                placeholder='type something you want to search'> 
            </input>
            <button
                onClick={handleDelete}>x
            </button>
        </div>
        )
}