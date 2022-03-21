
import './App.css';
import About from './components/About ';
import Client from './components/Client';
import Header from './components/Header';
import Menu from './components/Menu';
import Price from './components/Price';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
   <Header/>
   <About/>
   <Shop/>
   <Menu/>
   <Client/>
   <Price/>
    </div>
  );
}

export default App;
