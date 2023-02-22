import "./Button.scss";

export default function Button({ children, isPrimary, isSecondary, ...props }) {
  let buttonClass = "button";
  switch (true) {
    case isPrimary:
      buttonClass += " button_primary";
      break;
    case isSecondary:
      buttonClass += " button_secondary";
      break;
    default:
      break;
  }

  return (
    <button onClick={props.handleClick} className={buttonClass}>
      {children}
    </button>
  );
}
