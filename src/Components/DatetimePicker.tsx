import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import {TextField} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Controller, useFormContext } from 'react-hook-form';


const DatetimePicker: React.FC<{
    name:string
}> = ({
    name
}) => {

    const {control, formState: {errors}} = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller 
        name={name}
        control={control}
        defaultValue={null}
        render={({field, ...props})=>{
            console.log("field: " ,field );            
            return (
                <DesktopDatePicker 
                    inputFormat='MM/DD/YYYY'
                    value={field.value}
                    onChange={(date)=>{
                        console.log(date);
                        field.onChange(date);
                    }}
                    renderInput={(params)=> <TextField {...params}/>}
                />

            )
        }}
    />
    </LocalizationProvider>
  );
};

export default DatetimePicker;