import { string } from 'prop-types';

const Button = ({ text, type, size = 'normal', formId = '' }) => {
  return (
    <button
      form={formId}
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
  formId: string,
};
export default Button;
