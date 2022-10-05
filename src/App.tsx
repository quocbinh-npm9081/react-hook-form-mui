import React from 'react';
import './App.css';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubText from './Components/SubText';
import DatetimePicker from './Components/DatetimePicker';
interface IFormInputs {
  email: string,
  password: string,
  date: Date,
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
  date: yup.date()
});

function App() {

  const methods =  useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler : SubmitHandler<IFormInputs> = (data: IFormInputs)=>{
    console.log("DATA: :" , data);
  }

  // console.log('watch', methods.watch('email'));
  

  return (
    <div className="App">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <SubText
          name="email"
          />
          <SubText
          name="password"
          />
          <DatetimePicker 
            name='date'
          />
          <button type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
