import React from 'react';
import { TextField } from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';

const SubText: React.FC<{name: string,defaultValue?: string}> = ({name, defaultValue}) =>{

  const {control , formState: { errors } } = useFormContext();

  console.log(name);  
  console.log(errors.user);


  return (

        <Controller 
          name={name}
          control={control}
          defaultValue={defaultValue? defaultValue : ''}
          render={({field})=>{
            return(
              <TextField {...field}
                        variant="outlined"
                        error={!!errors}
                        // helperText={`errors.${name} `? `errors.${name}.message` : ''}
              />
            )
          }}
        />
      

  );
}


export default SubText;
