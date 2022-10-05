import React from 'react';
import { TextField } from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';

const SubText: React.FC<{name: string,defaultValue?: string}> = ({name, defaultValue}) =>{

  const {control , formState: { errors } } = useFormContext();
  return (

        <Controller 
          name={name}
          control={control}
          defaultValue={defaultValue? defaultValue : ''}
          render={({field})=>{
            return(
              <TextField {...field}
                        variant="outlined"
                        error={!!errors[name]}
                        helperText={errors[name] ? `${errors[name]?.message}` : ''}
              />
            )
          }}
        />
      

  );
}


export default SubText;
