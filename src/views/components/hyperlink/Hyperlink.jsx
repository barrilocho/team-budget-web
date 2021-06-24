import { func, string } from 'prop-types';
import React from 'react';

const Hyperlink = React.forwardRef(({ href = '', onClick, text = '' }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {text}
    </a>
  );
});

Hyperlink.propTypes = {
  href: string,
  onClick: func,
  text: string,
};
Hyperlink.defaultProps = {
  href: '',
  onClick: () => {},
  text: '',
};

export default Hyperlink;
