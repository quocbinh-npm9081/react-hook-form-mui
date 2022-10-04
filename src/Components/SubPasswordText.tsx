import React from 'react';
import { TextField } from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';



function SubPasswordText() {

    const {
        control, 
        formState: { errors } 
    } = useFormContext();

  return (
 

          <Controller 
            name="password"
            control={control}
            render={({field})=>{
              return(
                <TextField {...field}
                          label="Password"
                          type="password"
                          variant="outlined"
                          error={!!errors.password}
                          helperText={errors.password ? `${errors.password.message}` : ''}                          
                />
                )
            }}
          />
 
  );
}

export default SubPasswordText;
