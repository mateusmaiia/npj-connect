import './index.css'
import PropTypes from 'prop-types';

export function Input({ type, placeholder, value, onChange, label }) {
  return (
    <div className='input-wrapper'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string
};
