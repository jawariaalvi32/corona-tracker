import './App.css';
import Header from './components/Header';
import Api from './components/global/Api';
import { CountryApi } from './components/Countries/Api';
import Grid from '@material-ui/core/Grid';
import Logo from './images/covid.gif'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item md={6} sm={12}>
         <img src={Logo} alt="logo" width="100%"/>
        </Grid>
        <Grid item md={5} sm={12}>
          <Header/>
          <Api/>
          <CountryApi/>
        </Grid>
        <Grid item md={1} sm={0}/>
      </Grid>
    </div>
  );
}

export default App;
