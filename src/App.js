import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './components/home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hola Brenda</h1>
        
      </header>
      <body>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      </body>
    </div>
  );
}

export default App;
