import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
InputField.propTypes = {
  form: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

function InputField(props) {
  const { label, name, form } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          style={{ width: "100%", marginBottom: 10 }}
          onChange={onChange}
          onBlur={onBlur}
          selected={value}
          label={label}
          variant="outlined"
          error={hasError}
          //   helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;