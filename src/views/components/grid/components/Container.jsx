import { bool, node, oneOf, string } from 'prop-types';

const Container = ({ children, is = '', isFluid = false, className = '' }) => {
  const isBreakPoint = `${is !== '' ? `is-${is}` : ''}`;
  const fluid = `${isFluid ? `is-fluid` : ''}`;
  const classes = `${isBreakPoint} ${fluid}`.trim();

  return <div className={`container ${classes} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: node,
  className: string,
  is: oneOf(['widescren', 'fullhd', 'max-desktop', 'max-widescreen']),
  isFluid: bool,
};

export default Container;
