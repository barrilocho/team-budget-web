import { bool, node, oneOf } from 'prop-types';

const Container = ({ children, is = '', isFluid = false }) => {
  const isBreakPoint = `${is !== '' ? `is-${is}` : ''}`;
  const fluid = `${isFluid ? `is-fluid` : ''}`;
  const classes = `${isBreakPoint} ${fluid}`.trim();

  return <div className={`container ${classes}`}>{children}</div>;
};

Container.propTypes = {
  children: node,
  is: oneOf(['widescren', 'fullhd', 'max-desktop', 'max-widescreen']),
  isFluid: bool,
};

export default Container;
