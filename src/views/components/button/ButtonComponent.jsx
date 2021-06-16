import { string } from 'prop-types';

const Button = ({ text, type, size = 'normal' }) => {
  return (
    <button
      className={`button is-primary is-${size} is-fullwidth`}
      type={type === 'button' ? 'button' : 'submit'}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string,
  type: string,
  size: string,
};
export default Button;
