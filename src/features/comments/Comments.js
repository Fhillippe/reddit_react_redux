import './comments.css'
import { useDispatch, useSelector } from "react-redux"
import { 
    selectComments,
    loadComments,
    selectTile,
    commentsLoading,
    failToLoadComments } from "./commentsSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Tile } from "../tile/Tile"

export const Comments = () =>{
    const dispatch = useDispatch()
    const comments = useSelector(selectComments).map((element, i)=> <p key={i}>{element}</p>)
    const loading = useSelector(commentsLoading)
    const fail = useSelector(failToLoadComments)
    const tile = useSelector(selectTile)
    const {subreddit, id} = useParams()
    useEffect(()=>{
        dispatch(loadComments({id: id, subreddit: subreddit}))
    },[])
    if(loading) return <p>Comments are Loading</p>
    if(fail) return <p>Failed to load comments</p>
    if(Object.keys(tile).length === 0) return <></>
    console.log(tile)
    return (<div className="comments">
        <Tile 
            title={tile.title}
            upVotes={tile.ups}
            author={tile.author}
            img={tile.thumbnail}
            id={id}
            subreddit={subreddit}
            onClickActive={false}/>
        {comments}
    </div>)
}