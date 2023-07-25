import './App.css';
import  SearchBar  from './components/searchbar.js';
import  BusinessList from './components/businesslist.js';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
