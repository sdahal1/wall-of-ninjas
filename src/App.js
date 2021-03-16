import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import NinjaForm from './components/NinjaForm';
import DisplayNinjas from './components/DisplayNinjas';

function App() {

  const [formInfo, setFormInfo] = useState({
    ninjaName: "",
    ninjaImg: "",
    ninjaLang: "",
    ninjaFavColor: ""
})
const [allNinjas, setAllNinjas ] = useState([])

const changeHandler = (e)=>{
  setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
  })

}
const submitHandler = (e)=>{
  e.preventDefault()
  // allNinjas.push(formInfo) CANT DO IT THIS WAY IN REACT
  setAllNinjas([...allNinjas, formInfo])
  console.log(allNinjas)
  setFormInfo({
      ninjaName: "",
      ninjaImg: "",
      ninjaLang: "",
      ninjaFavColor: ""
  })
}

  return (
    <div className="App">
      <NinjaForm submitHandler= {submitHandler} changeHandler={changeHandler} formInfo= {formInfo}></NinjaForm>
      <DisplayNinjas allNinjas= {allNinjas} setAllNinjas={setAllNinjas}></DisplayNinjas>

    </div>
  );
}

export default App;
