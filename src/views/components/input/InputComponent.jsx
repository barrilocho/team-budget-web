import { string } from 'prop-types';
import Label from '../label/LabelComponent';

const Input = ({
  defaultValue = '',
  placeholder = '',
  type = 'text',
  label = '',
  name = '',
  id = '',
  prefixIcon = '',
  suffixIcon = '',
}) => {
  return (
    <div className="field">
      {label && <Label htmlFor={id} text={label} className="label" />}
      <div
        className={`control ${prefixIcon ? 'has-icons-left' : ''} ${
          suffixIcon ? 'has-icons-right' : ''
        }`}
      >
        <input
          name={name}
          id={id}
          defaultValue={defaultValue}
          className="input"
          type={type}
          placeholder={placeholder}
        />
        {prefixIcon && (
          <span className="icon is-small is-left">
            <i className={`fas fa-${prefixIcon}`} />
          </span>
        )}
        {suffixIcon && (
          <span className="icon is-small is-right">
            <i className={`fas fa-${suffixIcon}`} />
          </span>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: string,
  type: string,
  defaultValue: string,
  name: string,
  label: string,
  id: string,
  prefixIcon: string,
  suffixIcon: string,
};
export default Input;
