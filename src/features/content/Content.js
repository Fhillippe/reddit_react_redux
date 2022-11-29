import { useSelector } from "react-redux";
import { selectContent, isContentLoading, failToLoadContent } from "./contentSlice";
import { Tile } from "../tile/Tile";
import './content.css'

export const Content =()=>{
    const content = useSelector(selectContent)
    const loading = useSelector(isContentLoading)
    const fail = useSelector(failToLoadContent)
    if(loading) return <h1>Articles  loading</h1>
    if(fail) return <h1>Failed to find anything</h1>

    const toDisplay = content.map((topic, i)=>{
        const {title, ups, author, img} = topic.data
        return <Tile 
        key={i} 
        name={title}
        upVotes={ups}
        author={author}/>
    })

    return (
        <div className="contentContainer">
            {toDisplay.sort((a,b)=>{
                return b.props.upVotes-a.props.upVotes})}
        </div>
    )
}
