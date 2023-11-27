import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React from "react";

type FormInputProps = {
  LeftIcon?: () => JSX.Element;
  RightIcon?: () => JSX.Element;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  label?: string;
  placeholder?: string;
} & Omit<TextFieldProps, "variant">;

export default function FormInput(props: FormInputProps) {
  const { LeftIcon, value, onChange, RightIcon, label, placeholder } = props;
  return (
    <Box display="flex" alignItems="center" width={1} margin={1}>
      {LeftIcon && (
        <Box position="absolute" paddingX={1}>
          <LeftIcon />
        </Box>
      )}
      <TextField
        type="text"
        label={label ?? "Text Field"}
        placeholder={placeholder ?? label ?? "Enter text"}
        fullWidth
        value={value}
        onChange={onChange}
        InputLabelProps={
          LeftIcon && {
            sx: {
              left: 24,
            },
          }
        }
        InputProps={{
          sx: {
            paddingLeft: LeftIcon ? 3 : 0,
          },
          endAdornment: RightIcon && (
            <InputAdornment position="end">
              <RightIcon />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
}
