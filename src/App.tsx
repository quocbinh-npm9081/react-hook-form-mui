import React from 'react';
import './App.css';
import { TextField } from '@mui/material';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubEmailText from './Components/SubEmailText';
import SubPasswordText from './Components/SubPasswordText';

interface IFormInputs {
  email: string,
  password: string,
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

function App() {

  const methods =  useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler : SubmitHandler<IFormInputs> = (data: IFormInputs)=>{
    console.log(data);
  }

  console.log('watch', methods.watch('email'));
  

  return (
    <div className="App">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <SubEmailText/>
          <SubPasswordText/>
          <button type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
