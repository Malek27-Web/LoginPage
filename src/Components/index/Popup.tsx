import "./index.css";
interface Props {
  textPrpos: string;
  onClose: () => void;
}
function Popup({ textPrpos, onClose }: Props) {
  return (
    <div className="border d-flex flex-column   align-items-center justify-content-center  w-25 h-25 d-inline-block  popup">
      <p className="fs-1 fw-medium text-light"> {textPrpos}</p>
      <button
        className="btn btn-close btn-close-white position-absolute button"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Popup;
