import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CountrySelect = ({countries}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      select: '',
    });
  
    const handleChange = (event) => {
      const select = event.target.name;
      setState({
        ...state,
        [select]: event.target.value,
      });
    };
    const countryList = 
      countries.map((items, index) => (
        <option key={index} value={items.Country}>{items.Country}</option>
      ))
  
  return (
    <div className="justify-content-center d-flex">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
        <Select
          native
          value={state.select}
          onChange={handleChange}
          inputProps={{
            select: 'age',
            id: 'age-native-simple',
          }}
        >
            {
              countryList ? countryList : 
              <option value='0'>Select</option>
            }
        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelect;