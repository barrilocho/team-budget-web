import { string } from 'prop-types';

const Label = ({ text = '', htmlFor = '' }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
    </label>
  );
};

Label.propTypes = {
  text: string,
  htmlFor: string,
};
export default Label;
