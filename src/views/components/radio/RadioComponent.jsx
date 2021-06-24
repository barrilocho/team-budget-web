import { arrayOf, string, func, shape } from 'prop-types';
import Label from '../label';

const Radio = ({
  label = '',
  options = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No' },
  ],
  name = '',
  onChange,
}) => {
  return (
    <div className="field">
      <Label text={label} />
      <div className="control">
        {options.map((option) => {
          return (
            <label key={option.value} className="radio">
              <input onChange={onChange} type="radio" name={name} value={option.value} />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

Radio.propTypes = {
  label: string,
  options: arrayOf(shape({ value: string, label: string })),
  name: string,
  onChange: func,
};
export default Radio;
