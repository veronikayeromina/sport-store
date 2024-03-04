export function Button({ children, className, onClick }) {
  return (
    <button className={`btn ${className ? className : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
