// import './App.css';
import House from './components/House';
import HouseList from './components/HouseList';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='w-4/5 pt-44 mx-auto'>
      <Search/>
      <HouseList/>  
      </div>
    </div>
  );
}

export default App;
