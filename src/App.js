import logo from './logo.svg';
import './App.css';
import Api from './components/Api';
import CountryApi from './components/Countries/CountryListApi';
import CountrySelect from './components/Countries/CountrySelect';

function App() {
  return (
    <div className="App">
      <Api/>
      <CountryApi/>
      {/* <CountrySelect/> */}
    </div>
  );
}

export default App;
