import { useState } from 'react';
import './App.css';
import Validation from './validation';


function App() {

    const [values, setvalues ] = useState({
      name: '',
      email: '',
      password: '',
      tel: '',
    })
    const [ errors, setErrors ] = useState({})

    
   function formChange(ev){

     const RecupValue = { ...values, [ev.target.name]: ev.target.value.trim()}
     setvalues(RecupValue)
     setErrors(Validation(values));
     
    }

    function formSubmit(e){
      e.preventDefault();
      setErrors(Validation(values));
     
    }
   
    
 

  return (
    <div className='container'>
      <form action="" onSubmit={formSubmit} >
        <input type="text" name="name" id="" placeholder='Name' value={values.name} onChange={formChange} />
        {errors && <span className='error'>{errors.name}</span>}
        <input type="email" name="email" id=""  placeholder='Email' value={values.email} onChange={formChange} />
        {errors && <span className='error'>{errors.email}</span>}
        <input type="password" name="password" id="" placeholder='Password' value={values.password} onChange={formChange}  />
        {errors && <span className='error'>{errors.password}</span>}
        <input type="tel" name="tel" autoComplete='none' placeholder='Phone' value={values.tel} onChange={formChange} />
        {errors && <span className='error'>{errors.tel}</span>}
        <textarea name="message" id="" cols="50" rows="10" placeholder='Message'></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
