import React from 'react';

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({
  element,
  type,
  id,
  label,
  labelPos,
  color,
  fullWidth,
  value,
  checked,
  onChange,
  icon,
  iconPos,
  autoFocus,
  sx,
}) => {
  return element === 'radio' ? (
    <FormControlLabel
      value={labelPos}
      size="large"
      control={
        <Radio
          color={color}
          checked={checked}
          value={value}
          onChange={onChange}
        />
      }
      label={label}
      labelPlacement={labelPos}
    />
  ) : (
    <TextField
      type={type}
      id={id}
      sx={sx}
      label={label}
      color={color}
      value={value}
      autoFocus={autoFocus ? true : false}
      onChange={onChange}
      fullWidth={fullWidth ? true : false}
      InputProps={{
        startAdornment: iconPos === 'start' && (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
        endAdornment: iconPos === 'end' && (
          <InputAdornment position="end">{icon}</InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
