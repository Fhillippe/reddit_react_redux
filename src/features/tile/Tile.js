import './tile.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadComments, selectComments } from '../content/contentSlice';


export const Tile = ({title, author, upVotes, img, id, subreddit}) =>{
    const dispatch = useDispatch()
    const comments = useSelector(selectComments).map(comment=>{
        return <p>{comment.body}</p>
    })
    console.log(comments)
    const handleComments =()=>{
        dispatch(loadComments({
            id: id,
            subreddit: subreddit}))
    }
    return(
        <div 
        onClick={handleComments}
        className="tile">
            <div className='leftSection'>
                <h4>{title}</h4>
                <p id='votes'>upVotes: {upVotes}</p>
                <p id='author'>author: {author}</p>
            </div>
            <div className='rightSection'>
                {img.match(/http/)&&<img src={img} />}
            </div>
            <div className='comments'>

            </div>
        </div>
    )
}