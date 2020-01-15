import React from 'react';
import Header from './components/header';
import Main from './pages/main';
import SearchButton from './components/search-button';
import './style.css'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <SearchButton></SearchButton>
     <Main></Main>
    </div>
  );
}

export default App;
