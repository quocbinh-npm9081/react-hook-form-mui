import React from "react";
import "./App.css";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@mui/material";
import DatetimePicker from "./Components/DatetimePicker";
import SubText from "./Components/SubText";

import FieldArray from "./Components/FieldArray";
interface IUser {
  email: string;
  password: string;
  date: Date;
}
interface IFormInputs {
  user: IUser[];
}

const schema = yup.object().shape({
  user: yup.array().of(
    yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(4).max(20).required(),
      date: yup.date(),
    })
  ) 
});

function App() {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      user: [
        {
          email: "quocbinh123@gmail.com",
          password: "1312423sfsad",
          date: new Date(),
        },
      ],
    },
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("DATA: :", data);
  };

  // console.log('watch', methods.watch('email'));

  return (
    <div className="App">
      <FormProvider {...methods}>
      <Typography>useFormArray: </Typography>
        <FieldArray methods={methods} formSubmitHandler={formSubmitHandler}/> 
      
      <Typography>Dont use arrayForm: </Typography>
      {/* <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <SubText name="password" />
        <SubText name="email" />
        <DatetimePicker name="date" />
        <button type="submit">Submit</button>
      </form> */}
      </FormProvider>
    </div>
  );
}

export default App;
