
import React from 'react';

const Logo = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
  );
};

export default Logo;
