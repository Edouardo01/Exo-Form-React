import React, { useState } from 'react';
import './App.css';
import { FaEyeSlash, FaEye} from 'react-icons/fa';


function App() {

const formValues = { name: "", password: ""}
const [ stateValue, setStateValue] = useState(formValues);

const [ errors, setErrors] = useState({});

 const Login = (ev) => {
      
  const { name, value} = ev.target;
  setStateValue({ ...stateValue, [name]: value.trim()});
}
 const formSubmit = (ev)  =>{
  ev.preventDefault();
  setErrors(Validate(stateValue));
}

const Validate = (values) => {
  const errors = {}
  const regexPassword = /[a-zA-Z0-9][^a-zA-Z0-9]/;

  if (!values.name) {
    errors.name = "Name Required"
  }
  else if (values.name.length < 3) {
    errors.name = "Password must contain at least 3 char"
  }
  else if (!values.password) {
    errors.password = "Password Required"
  }
  else if (values.password.length < 8) {
    errors.password = "Password must contain at least 8 char..."
  }
  else if (!regexPassword.test(values.password)) {
    errors.password = "Password must contain a number, symbol, uppercase letter"
  }
  else{
    alert('Bienvenue! Vous êtes connecté');
  }
  return errors;
}

function ShowPassword() {
  let btn = document.querySelector('.btn');
  let pass = document.getElementById('password');
  btn.classList.toggle('active');
  pass.type = pass.type === 'password' ? 'text' : 'password'
}
  
  
  return (
    <main>
          <div class="container">
          {/* <pre>{JSON.stringify(stateValue)}</pre> */}
              <form name="form" onSubmit={formSubmit}>
                <center><h2>Login</h2></center>
                <div>
                   <label>Nom d'utilisateur</label>
                   <input type='text' id="name" name='name' placeholder='Username' value={stateValue.name} onChange={Login}></input>
                   {errors.name && <center className='message'>{errors.name}</center>}
                </div>
                <div>
                   <label>Mot de passe</label>
                   <input type='password' name='password' id="password" placeholder='Password' value={stateValue.password}  onChange={Login}></input>
                   <button type='button' className='btn' name='btn' onClick={ShowPassword}>
                    <FaEyeSlash className='hide' />
                    <FaEye className='show' />
                   </button>
                   {errors.password && <center className='message'>{errors.password}</center>}
                </div>
                <button type="submit" id="submit">Se connecter</button>
               
              </form>
          </div>
    </main>
   
  )
}


export default App;