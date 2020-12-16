import './App.css';
import Header from './components/Header';
import Api from './components/global/Api';
import { CountryApi } from './components/Countries/Api';

function App() {
  return (
    <div className="App">
      <Header/>
      <Api/>
      <CountryApi/>
    </div>
  );
}

export default App;
