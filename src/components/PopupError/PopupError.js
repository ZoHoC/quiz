import "./PopupError.scss";

export default function PopupError(props) {
  return (
    <div className="popup">
      <div className="popup__content">Number of questions must be between 1 and 20!</div>
    </div>
  );
}
