import { useSelector } from "react-redux";
import { selectContent } from "./contentSlice";
import { Tile } from "../tile/Tile";

export const Content =()=>{
    const content = useSelector(selectContent)
    console.log(content)
    const toDisplay = content.map(topic=>{
        return <Tile key={topic.id} name={topic.data.title}/>
    })
    console.log(toDisplay)

    return (
        <div className="contentContainer">
            {toDisplay}
        </div>
    )
}
