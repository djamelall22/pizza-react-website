import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GolobalStyles';
import Hero from './components/Hero';

function App() {
  <Navbar />;
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
