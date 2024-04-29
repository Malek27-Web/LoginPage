import "./index.css";
interface Props {
  textPrpos: string;
  onClose: () => void;
}
function Popup({ textPrpos, onClose }: Props) {
  return (
    <div className="border d-flex flex-column  align-items-center justify-content-center  border-1 border-dark w-25 h-25 d-inline-block  popup">
      <p className="fs-3 fw-medium "> {textPrpos}</p>
      <button className="btn btn-secondary" onClick={onClose}>
        close
      </button>
    </div>
  );
}

export default Popup;
