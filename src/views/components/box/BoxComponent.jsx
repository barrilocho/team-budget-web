import { node, string } from 'prop-types';

const BoxComponent = ({ children, className = '' }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

BoxComponent.propTypes = {
  children: node,
  className: string,
};
export default BoxComponent;
