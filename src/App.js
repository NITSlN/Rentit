
import Banner from './components/Banner';
import HouseList from './components/HouseList';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='w-4/5 pt-44 mx-auto'>
      <Banner/>
      <Search/>
      <HouseList/>  
      </div>
    </div>
  );
}

export default App;
