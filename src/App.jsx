import Notes from './pages/Notes';
import Create from './pages/Create';
import RootLayout from './layouts/RootLayout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
