import './App.css'
import { SearchBar } from '../features/searchBar/SearchBar'
import { Content } from '../features/content/Content'
import { Routes, Route} from 'react-router-dom'
import { Comments } from '../features/comments/Comments'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <SearchBar />
          <div className='contentContainer'>
            <Content />
          </div>
        </>}/>
        <Route path='/comments/:subreddit/:id' element={
          <Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
