import './App.css'
import { SearchBar } from '../features/searchBar/SearchBar'
import { Content } from '../features/content/Content'


function App() {
  return (
    <div className="App">  
      <SearchBar />
      <div className='contentContainer'>
        <Content />
      </div>
    </div>
  );
}

export default App;
