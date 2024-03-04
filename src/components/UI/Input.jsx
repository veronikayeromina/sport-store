export function Input({ error, ...rest }) {
  return (
    <div className="form__input-wrapper">
      <input
        className={`form__input ${error ? "form__input-error" : ""}`}
        {...rest}
      />
      {error && <p className="form__input-message">{error}</p>}
    </div>
  );
}
