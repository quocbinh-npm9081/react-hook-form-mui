import React from 'react';
import { TextField } from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';



function SubEmailText() {

const {control , formState: { errors } } = useFormContext();
  return (

        <Controller 
          name="email"
          control={control}
          defaultValue="example@gmail.com" 
          render={({field})=>{
            return(
              <TextField {...field}
                        label="Email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email ? `${errors.email?.message}` : ''}
              />
            )
          }}
        />
      

  );
}

export default SubEmailText;
