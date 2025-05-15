import React from 'react';
import { NotificationGrid } from './components/NotificationGrid';
import { gridSections } from './data/cards';

function App() {
  return (
    <div className="min-h-screen bg-[#004246]">
      <NotificationGrid sections={gridSections} />
    </div>
  );
}

export default App;