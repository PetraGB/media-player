import React from 'react';
import './App.css';
import PageGrid from './components/layouts/PageGrid';
import SongList from './components/logic/SongList';

function App() {
  return (
    <div className="musicApp">
      <PageGrid>
        <SongList />
      </PageGrid>
    </div>
  );
}

export default App;
