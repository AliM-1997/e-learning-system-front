import "./input.css";

export default function Input({
  name,
  type = "text",
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="flex column full-width my-input">
      <label className="bold black-text">{name}</label>
      <input
        className="rounded full-width"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
