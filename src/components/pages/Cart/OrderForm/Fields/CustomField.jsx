export const CustomField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group mb-2">
    <label className="mb-1 font-weight-bold" htmlFor={label}>
      {label} *
    </label>
    <input
      {...input}
      id={label}
      placeholder={label}
      type={type}
      className="w-100"
    />
    {touched &&
      ((error && <p className="invalid-field">{error}</p>) ||
        (warning && <p className="invalid-field">{warning}</p>))}
  </div>
);
