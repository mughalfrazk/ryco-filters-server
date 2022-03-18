import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const CustomButton = ({
  element,
  children,
  variant,
  color,
  sx,
  onClick,
  className,
  linkClass,
  px,
  to,
}) => {
  const blockBtnStyles = {
    borderRadius: 0,
    paddingTop: 0.3,
    paddingBottom: 0.1,
    paddingRight: px,
    paddingLeft: px,
  };

  const btnElement =
    element === 'icon' ? (
      <IconButton color={color} sx={sx} className={className} onClick={onClick}>
        {children}
      </IconButton>
    ) : element === 'block' ? (
      <Button
        variant={variant}
        color={color}
        className={className}
        onClick={onClick}
        sx={[sx, blockBtnStyles]}
      >
        {children}
      </Button>
    ) : (
      <Button
        variant={variant}
        color={color}
        sx={sx}
        className={className}
        onClick={onClick}
      >
        {children}
      </Button>
    );

  return to ? (
    <Link to={to} className={linkClass}>
      {btnElement}
    </Link>
  ) : (
    btnElement
  );
};

export default CustomButton;
