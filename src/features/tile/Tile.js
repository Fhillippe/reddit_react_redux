import './tile.css'


export const Tile = ({name, author, upVotes}) =>{
    return(
        <div className="tile">
            <h3>{name}</h3>
            <p>upVotes: {upVotes}</p>
            <p>author: {author}</p>
        </div>
    )
}