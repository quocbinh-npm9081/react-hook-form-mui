import React from "react";
import { useFieldArray, useWatch, useFormContext } from "react-hook-form";
import { Box } from "@mui/material";
import SubText from "./SubText";
import DatetimePicker from "./DatetimePicker";

const FieldArray: React.FC<{
  methods: any;
  formSubmitHandler: any;
}> = ({ methods, formSubmitHandler }) => {
  const {
    control,
    formState: { errors },
    reset
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "user",
  });

  return (
    <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <SubText name={`user.${index}.email`} />
              <SubText name={`user.${index}.password`} />
              <DatetimePicker name={`user.${index}.date`} />
              <button type="button" onClick={() => remove(index)}>
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
      <Box>
        <button
          type="button"
          onClick={() =>
            reset({
              user: [
                {
                  email: "quocbinh123@gmail.com",
                  password: "1312423sfsad",
                  date: new Date(),
                },
              ],
            })
          }
        >
          RESET
        </button>
        <button
          type="button"
          onClick={() =>
            append({
              email: "caoQupcBinhMore@gmail.com",
              password: "21312more",
              date: new Date(),
            })
          }
        >
          APPEND
        </button>
      </Box>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FieldArray;
