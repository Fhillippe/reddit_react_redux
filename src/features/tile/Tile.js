import './tile.css'
import { useNavigate } from 'react-router-dom'

export const Tile = ({onClickActive, title, author, upVotes, img, id, subreddit}) =>{
    const navigate = useNavigate()
    const handleClick =()=>{
        if(!onClickActive) return;
        navigate(`/comments/${subreddit}/${id}`)
    }
    return(
        <div 
        onClick={handleClick}
        className="tile">
                {img.match(/http/)?<img src={img}/>:<div></div>}<h2>{title}</h2>
                <p id='votes'>upVotes: {upVotes}</p>
                <p id='author'>author: {author}</p>   
        </div>
    )
}