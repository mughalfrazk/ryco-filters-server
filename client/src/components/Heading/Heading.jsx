import React from 'react';

import styles from './Heading.module.scss';

// coloe: "black" | "red"
// size: "xs" | "sm" | "md" | "lg" | "xl"
// element: "secondary"
// transform: "default | "lowercase" | "capitalize"

const Heading = ({ children, element, color, size, transform, style }) => {
  return (
    <p
      className={`
        ${styles.heading}
        ${styles[size]}
        ${styles[color]}
        ${styles[element]}
        ${styles[transform]}
      `}
      style={style}
    >
      {children}
    </p>
  );
};

export default Heading;
