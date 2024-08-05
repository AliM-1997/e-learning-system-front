import "./input.css";

export default function Input({
  name,
  type = "text",
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="input-container">
      <label>{name}</label>
      <input
        className="input"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
