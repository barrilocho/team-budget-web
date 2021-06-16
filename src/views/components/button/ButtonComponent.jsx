import { string } from 'prop-types';

const Button = ({ text, type }) => {
  return <button type={type === 'button' ? 'button' : 'submit'}>{text}</button>;
};

Button.propTypes = {
  text: string,
  type: string,
};
export default Button;
