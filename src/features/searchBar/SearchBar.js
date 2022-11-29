import { useSelector, useDispatch } from "react-redux";
import { selectSearch, selectDeleteHidden, setSearch, deleteSearch,
hideDelete, showDelete} from "./SearchBarSlice";
import './searchBar.css'
import { loadContent } from "../content/contentSlice"

export const SearchBar = () =>{
    const search = useSelector(selectSearch)
    const hidden = useSelector(selectDeleteHidden)
    const dispatch = useDispatch()

    const handleChange = ({target}) =>{
        dispatch(setSearch(target.value))
    }  

    const handleDelete = () =>{
        dispatch(deleteSearch())
    }
    const handleEnter = (e) =>{
        if(e.key === 'Enter') dispatch(loadContent(search))
    }

    const handleMouseEnter = () =>{
        dispatch(showDelete())
    }

    const handleMouseLeave = ()=>{
        dispatch(hideDelete())
    }

    return (
        <div className="header">
            <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="searchBar">
                <input
                    onKeyDown={handleEnter}
                    value={search}
                    onChange={handleChange}
                    placeholder='type something you want to search'> 
                </input>
                <button
                    hidden={hidden}
                    onClick={handleDelete}>x
                </button>
            </div>
        </div>
        )
}