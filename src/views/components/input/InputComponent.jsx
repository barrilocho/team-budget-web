import { func, string } from 'prop-types';
import Label from '../label/LabelComponent';

const Input = ({
  placeholder = '',
  type = 'text',
  label = '',
  name = '',
  id = '',
  prefixIcon = '',
  suffixIcon = '',
  error = '',
  value = '',
  onChange,
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
          onChange={onChange}
          name={name}
          id={id}
          value={value}
          className={`input ${error ? 'is-danger' : ''}`}
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
        {error && <p className="help is-danger">{error}</p>}
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  id: string,
  prefixIcon: string,
  suffixIcon: string,
  error: string,
  value: string,
  onChange: func,
};
export default Input;
