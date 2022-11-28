import './App.css'
import { SearchBar } from '../features/searchBar/SearchBar'
import { SearchButton } from '../features/searchButton/SearchButton'
import { Content } from '../features/content/Content'


function App() {
  return (
    <div className="App">  
      <SearchBar />
      <SearchButton />
      <Content />
    </div>
  );
}

export default App;
