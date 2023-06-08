import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Home1 from './components/home1';

function App() {
  return (
    <div className="App">
      <div >
        <Navbar/>
      <Home1/>
      </div>
      
    </div>
  );
}

export default App;
